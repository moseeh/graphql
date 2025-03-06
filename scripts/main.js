import { login } from "./templates/login.js";
import { dashboard } from "./templates/dashboard.js";
import { handleLogin } from "./auth.js";

let app;
let currentUser = null;


// initial page load
document.addEventListener("DOMContentLoaded", () => {
  app = document.getElementById("app");

  //check if user is already logged in
  const token = localStorage.getItem("authToken");
  if (token) {
    renderDashboard()
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

function renderLogin() {
  app.innerHTML = login();

  // Add event listener to the form
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", handleLogin);
}

function renderDashboard() {
  app.innerHTML = dashboard(currentUser);

  const logoutBtn = document.getElementById("logout-btn")
  logoutBtn.addEventListener("click", handleLogout)
}

function handleLogout() {
  localStorage.removeItem('authToken');
  currentUser = null;
  renderLogin();
}