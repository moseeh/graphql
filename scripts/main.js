import { login } from "./templates/login.js";
import { leftSidebar } from "./templates/dashboard.js";
import { handleLogin } from "./auth.js";
import { fetchGraphQL } from "./queries.js";
import {
  topBar,
  statsCards,
  scores,
  gridContainer,
} from "./templates/main_content.js";
import { generateXPGraph } from "./graphs.js";

let app;
let sidebar;
let mainContent;
let currentUser = null;
let response;
let goProjects;
let jsProjects;
let rustProjects;

let rank = [
  "Aspiring Developer",
  "Beginner Developer",
  "Apprentice Developer",
  "Assistant Developer",
  "Basic Developer",
  "Junior Developer",
];

// initial page load
document.addEventListener("DOMContentLoaded", async () => {
  app = document.getElementById("app");
  sidebar = document.getElementById("sidebar");
  mainContent = document.getElementById("main-content");

  //check if user is already logged in
  const token = localStorage.getItem("authToken");
  if (token) {
    response = await fetchGraphQL(token);

    currentUser = response.data.user[0];
    goProjects = response.data.goItems;
    jsProjects = response.data.jsItems;
    rustProjects = response.data.rustItems;
    

    renderDashboard();
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
  const chartContainer = document.getElementById("chart-container")

  if (
    !goProjectsRatio ||
    !jsProjectsRatio ||
    !rsProjectsRatio ||
    !xpValue ||
    !levelValue ||
    !gradeValue
  )
    return;

  goProjectsRatio.innerHTML = done.go.ratio;
  jsProjectsRatio.innerHTML = done.js.ratio;
  rsProjectsRatio.innerHTML = done.rust.ratio;
  const totalXP = currentUser.transactions.reduce((totalXP, transaction) => {
    return transaction.type === "xp" ? totalXP + transaction.amount : totalXP;
  }, 0);
  const totalGrade = currentUser.progresses.reduce((totalGrade, progress) => {
    return progress.grade !== null ? totalGrade + progress.grade : totalGrade
  }, 0)
  gradeValue.innerHTML = totalGrade.toFixed(2)

  const [value, unit] = formatXP(totalXP);
  xpValue.innerHTML =
    value + '<span id="xp-metric-unit" class="metric-unit">' + unit + "</span>";
  levelValue.innerHTML = currentUser.events[0].level + '<span id="xp-metric-unit" class="metric-unit">' + rank[Math.floor(currentUser.events[0].level)/10] + "</span>";
  chartContainer.innerHTML = generateXPGraph(currentUser.transactions, response.data.event[0].startAt, response.data.event[0].endAt)
}

function renderLogin() {
  app.innerHTML = login();

  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", handleLogin);
}

function renderDashboard() {
  //app.innerHTML = dashboard(currentUser);
  sidebar.innerHTML = leftSidebar(currentUser);
  mainContent.innerHTML = topBar() + statsCards() + scores() + gridContainer();

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
  let transactions = currentUser.transactions;

  // Create sets of completed project names for fast lookup
  let completedProjects = new Set();

  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].object && transactions[i].object.name) {
      completedProjects.add(transactions[i].object.name);
    }
  }

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
