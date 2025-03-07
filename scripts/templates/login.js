export const login = () => `
<div id="login-container">
        <div id="error-message"></div>
        <h2>Login </h2>
        <form id="login-form" action="/submit-login" method="post">
            <div class="form-group">
                <input type="text" id="username" name="username" placeholder="username" required />
            </div>
            <div class="form-group">
                <input type="password" id="password" name="password" placeholder="password" required>
            </div>
            <button type="submit"> Login</button>
        </form>
    </div>
    
`;
