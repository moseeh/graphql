export const login = () => `
<div id="login-container">
        <form action="/submit-login" method="post">
            <h2>Login</h2>
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
