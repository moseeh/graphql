import { login } from "./templates/login.js";
import { dashboard , userData} from "./templates/dashboard.js";
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
    console.log(currentUser)
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
  const userdata = document.getElementById("user-data")
  if (!userdata) {
    return 
  }
  userdata.innerHTML = userData(currentUser)
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
