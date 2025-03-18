import { login } from "./templates/login.js";
import { leftSidebar } from "./templates/dashboard.js";
import { handleLogin } from "./auth.js";
import { fetchGraphQL } from "./queries.js";
import { topBar, statsCards, scores } from "./templates/main_content.js";
import { generateXPGraph } from "./graphs.js";
import { AuditRatio, skills } from "./templates/rightSidebar.js";

let app;
let sidebar;
let mainContent;
let rightSidebar;
let currentUser = null;
let response;
let goProjects;
let jsProjects;
let rustProjects;
let skillTypes;
let audits;

let rank = [
  "Aspiring Developer",
  "Beginner Developer",
  "Apprentice Developer",
  "Assistant Developer",
  "Basic Developer",
  "Junior Developer",
];

// initial page load
document.addEventListener("DOMContentLoaded", () => {
  app = document.getElementById("app");
  sidebar = document.getElementById("sidebar");
  mainContent = document.getElementById("main-content");
  rightSidebar = document.getElementById("right-sidebar");

  //check if user is already logged in
  const token = localStorage.getItem("authToken");
  if (token) {
    renderDashboard(token);
  } else {
    renderLogin();
  }
});

function updateUI(done) {
  const goProjectsRatio = document.getElementById("go-projects");
  const jsProjectsRatio = document.getElementById("js-projects");
  const rsProjectsRatio = document.getElementById("rs-projects");
  const xpValue = document.getElementById("xp-metric-value");
  const levelValue = document.getElementById("level-metric-value");
  const gradeValue = document.getElementById("grade-metric-value");
  const chartContainer = document.getElementById("chart-container");
  const topicList = document.getElementById("topic-list");
  const notificationIndicator = document.querySelector(
    ".notification-indicator"
  );
  const notificationContainer = document.querySelector(
    ".notification-container"
  );
  if (
    !goProjectsRatio ||
    !jsProjectsRatio ||
    !rsProjectsRatio ||
    !xpValue ||
    !levelValue ||
    !gradeValue ||
    !topicList ||
    !notificationIndicator ||
    !notificationContainer
  )
    return;

  goProjectsRatio.innerHTML = done.go.ratio;
  jsProjectsRatio.innerHTML = done.js.ratio;
  rsProjectsRatio.innerHTML = done.rust.ratio;
  const totalXP = currentUser.transactions.reduce((totalXP, transaction) => {
    return transaction.type === "xp" ? totalXP + transaction.amount : totalXP;
  }, 0);

  const totalGrade = currentUser.progresses.reduce((totalGrade, progress) => {
    return progress.grade !== null ? totalGrade + progress.grade : totalGrade;
  }, 0);
  gradeValue.innerHTML = totalGrade.toFixed(2);

  const [value, unit] = formatXP(totalXP);
  xpValue.innerHTML =
    value + '<span id="xp-metric-unit" class="metric-unit">' + unit + "</span>";
  levelValue.innerHTML =
    currentUser.events[0].level +
    '<span id="xp-metric-unit" class="metric-unit">' +
    rank[Math.floor(currentUser.events[0].level / 10)] +
    "</span>";
  chartContainer.innerHTML = generateXPGraph(
    currentUser.transactions,
    response.data.event[0].startAt,
    response.data.event[0].endAt
  );
  DisplaySkills(topicList);

  if (audits.length > 0) {
    notificationIndicator.style.display = "block";
  } else {
    notificationIndicator.style.display = "none";
  }

  PopulateAuditDropdown();
}
function PopulateAuditDropdown() {
  const auditItemsContainer = document.querySelector(".audit-items");

  if (audits.length === 0) {
    auditItemsContainer.innerHTML =
      '<p class="no-audits">No audit notifications</p>';
    return;
  }
  audits.forEach((audit) => {
    const { captainLogin, members } = audit.group;
    const filteredMembers = members.filter(
      (member) => member.userLogin !== captainLogin
    );

    auditItemsContainer.innerHTML += `
    <div class="audit-item">
      <div class="audit-header">
        <span class="project-name">${audit.group.path.replace(
          "/kisumu/module/",
          ""
        )}</span>
        <span class="audit-code">CODE: ${audit.private.code}</span>
      </div>
      <div class="audit-details">
        <p><strong>Group Leader: </strong>${captainLogin}</p>
        ${
          filteredMembers.length > 0
            ? `
        <p><strong>Group Members:</strong></p>
        <div class="member-tags">
          ${filteredMembers
            .map(
              (member) => `<span class="member-tag">${member.userLogin}</span>`
            )
            .join("")}
        </div>`
            : ""
        }
      </div>
    </div>`;
  });
}
function DisplaySkills(topicList) {
  const topFiveSkills = skillTypes
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5)
    .map((skill) => ({
      type: skill.type
        .replace("skill_", "")
        .replace(/^prog$/, "programming")
        .replace(/^(\w)/, (match) => match.toUpperCase()),
      amount: skill.amount,
    }));

  for (let i = 0; i < topFiveSkills.length; i++) {
    let skill = topFiveSkills[i];
    topicList.innerHTML += `
      <li class="topic-item">
      <div class="topic-info">
        <div class="topic-number">0${i + 1}</div>
        <div class="topic-name">${skill.type}</div>
      </div>
      <div class="topic-score high">${skill.amount}%</div>
    </li>
      `;
  }
}

function renderLogin() {
  app.innerHTML = login();
  app.style.display = "flex"
  sidebar.style.display = "none";
  mainContent.style.display = "none";
  rightSidebar.style.display = "none";

  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener(
    "submit",
    async (event) =>
      await handleLogin(event, sidebar, mainContent, rightSidebar, app)
  );
}

export async function renderDashboard(token) {
  app.style.display = "none"
  response = await fetchGraphQL(token);
  currentUser = response.data.user[0];
  goProjects = response.data.goItems;
  jsProjects = response.data.jsItems;
  rustProjects = response.data.rustItems;
  skillTypes = response.data.skill_types[0].transactions_aggregate.nodes;
  audits = currentUser.audits;

  const totalUp = currentUser.transactions.reduce((totalXP, transaction) => {
    return transaction.type === "up" ? totalXP + transaction.amount : totalXP;
  }, 0);
  const totalDown = currentUser.transactions.reduce((totalXP, transaction) => {
    return transaction.type === "down" ? totalXP + transaction.amount : totalXP;
  }, 0);

  sidebar.innerHTML = leftSidebar(currentUser);
  mainContent.innerHTML = topBar() + statsCards() + scores();
  rightSidebar.innerHTML =
    skills() + AuditRatio(totalUp, totalDown, currentUser.auditRatio);

  const logoutBtn = document.getElementById("logout-btn");
  logoutBtn.addEventListener("click", handleLogout);

  let done = doneProjectsCount();

  updateUI(done);
}

function handleLogout() {
  localStorage.removeItem("authToken");
  currentUser = null;
  renderLogin();
}

function formatXP(bytes) {
  if (bytes >= 1_000_000) {
    return [(bytes / 1_000_000).toFixed(2), "MB"];
  } else if (bytes >= 1_000) {
    return [(bytes / 1_000).toFixed(2), "KB"];
  } else {
    return [bytes, "Bytes"];
  }
}

function doneProjectsCount() {
  let transactions = currentUser.transactions.filter(
    (transaction) => transaction.type === "xp"
  );

  // Create sets of completed project names for fast lookup
  let completedProjects = new Set();

  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].object && transactions[i].object.name) {
      completedProjects.add(transactions[i].object.name);
    }
  }
  console.log(completedProjects);

  // Count completed projects for each language
  let goDone = 0;
  let goTotal = goProjects.length;
  for (let i = 0; i < goTotal; i++) {
    if (completedProjects.has(goProjects[i].name)) {
      goDone++;
    }
  }

  let jsDone = 0;
  let jsTotal = jsProjects.length;
  for (let i = 0; i < jsTotal; i++) {
    if (completedProjects.has(jsProjects[i].name)) {
      jsDone++;
    }
  }

  let rustDone = 0;
  let rustTotal = rustProjects.length;
  for (let i = 0; i < rustTotal; i++) {
    if (completedProjects.has(rustProjects[i].name)) {
      rustDone++;
    }
  }

  // Calculate ratios
  const goRatio = `${goDone}/${goTotal}`;
  const jsRatio = `${jsDone}/${jsTotal}`;
  const rustRatio = `${rustDone}/${rustTotal}`;

  // Calculate total ratio
  const totalDone = goDone + jsDone + rustDone;
  const totalProjects = goTotal + jsTotal + rustTotal;
  const totalRatio = `${totalDone}/${totalProjects}`;

  return {
    go: {
      done: goDone,
      total: goTotal,
      ratio: goRatio,
    },
    js: {
      done: jsDone,
      total: jsTotal,
      ratio: jsRatio,
    },
    rust: {
      done: rustDone,
      total: rustTotal,
      ratio: rustRatio,
    },
    total: {
      done: totalDone,
      total: totalProjects,
      ratio: totalRatio,
    },
  };
}
