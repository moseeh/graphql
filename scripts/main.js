import { login } from "./templates/login.js";

let app;
document.addEventListener("DOMContentLoaded", () => {
  app = document.getElementById("app");
  app.innerHTML = login()
});
