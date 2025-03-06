export const login = () => `
<div id="login-container">
        <div id="error-message"></div>
        <h2>Login to continue</h2>
        <form id="login-form" action="/submit-login" method="post">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Enter Your Username" required />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter Your Password" required>
            </div>
            <button type="submit"> Login</button>
        </form>
    </div>
    
`;
