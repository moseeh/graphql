export const login = () => `
  <div id="login-container">
    <div id="error-message"></div>
    <h2>Welcome Back</h2>
    <form id="login-form">
      <div class="form-group">
        <input type="text" id="username" name="username" placeholder="Username or email " required />
      </div>
      <div class="form-group">
        <input type="password" id="password" name="password" placeholder="Password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
`;