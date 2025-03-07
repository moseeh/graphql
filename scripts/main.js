import { login } from "./templates/login.js";
import { dashboard, userData } from "./templates/dashboard.js";
import { handleLogin } from "./auth.js";
import { fetchGraphQL } from "./queries.js";

let app;
let currentUser = null;
let response;

// initial page load
document.addEventListener("DOMContentLoaded", async () => {
  app = document.getElementById("app");

  //check if user is already logged in
  const token = localStorage.getItem("authToken");
  if (token) {
    renderDashboard();
    response = await fetchGraphQL(token);

    currentUser = response.data.user[0];
    console.log(currentUser);
    updateUI();
    // fetchUserProfile(token)
    //   .then((userData) => {
    //     currentUser = userData;
    //     renderDashboard();
    //   })
    //   .catch(() => renderLogin());
  } else {
    renderLogin();
  }
});

function updateUI() {
  const userdata = document.getElementById("user-data");
  const ardata = document.getElementById("ar-data");
  const xpdata = document.getElementById("xp-data");
  if (!userdata || !xpdata || !xpdata) {
    return;
  }
  userdata.innerHTML = userData(currentUser);
  ardata.innerHTML = currentUser.auditRatio.toFixed(1);
  const totalXP = currentUser.transactions.reduce((totalXP, transaction) => {
    return transaction.type === "xp" ? totalXP + transaction.amount : totalXP;
  }, 0);
  xpdata.innerHTML = formatXP(totalXP);
}

function renderLogin() {
  app.innerHTML = login();

  // Add event listener to the form
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", handleLogin);
}

function renderDashboard() {
  app.innerHTML = dashboard(currentUser);

  const logoutBtn = document.getElementById("logout-btn");
  logoutBtn.addEventListener("click", handleLogout);
}

function handleLogout() {
  localStorage.removeItem("authToken");
  currentUser = null;
  renderLogin();
}

function formatXP(bytes) {
  if (bytes >= 1_000_000) {
    return (bytes / 1_000_000).toFixed(2) + " MB";
  } else if (bytes >= 1_000) {
    return (bytes / 1_000).toFixed(2) + " KB";
  } else {
    return bytes + " Bytes";
  }
}
