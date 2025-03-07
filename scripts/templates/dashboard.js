export const dashboard = () => `

    <div>
        <h1>Student Profile</h1>
        <button id="logout-btn">Logout</button>
    </div>
   <section id="user-info" class="profile-section">
            <h2>User Information</h2>
            <div id="user-data">Loading...</div>
        </section>
        
        <section id="xp-section" class="profile-section">
            <h2>Experience Points</h2>
            <div id="xp-data">Loading...</div>
        </section>
        
        <section id="progress-section" class="profile-section">
            <h2>Progress</h2>
            <div id="progress-data">Loading...</div>
        </section>
        
        <section id="statistics-section" class="profile-section">
            <h2>Statistics</h2>
            <div class="graph-container">
                <h3>XP Over Time</h3>
                <svg id="xp-time-graph" width="600" height="400"></svg>
            </div>
            
            <div class="graph-container">
                <h3>Project Pass/Fail Ratio</h3>
                <svg id="pass-fail-graph" width="600" height="400"></svg>
            </div>
        </section>

`;


export const userData = (user) => `
    <div id="username">Username: ${user.login}</div>
    <div id="email">Email: ${user.attrs.email}</div>
    <div id="phone">Phone: ${user.attrs.phone}</div>
    <div id="gender">Gender: ${user.attrs.gender}</div>
    <div id="name">${user.attrs.firstName} ${user.attrs.lastName}</div>
`