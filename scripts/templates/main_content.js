export const topBar = () => `
    <div class="top-bar">
  <div class="nav-links"></div>
  <div class="actions">
    <div class="notification-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      </svg>
      <div class="notification-indicator"></div>
      <div class="notification-dropdown">
        <h3>Audit Notifications</h3>
        <div class="audit-items"></div>
      </div>

    </div>
  </div>
</div>
<div class="section-title">Done Projects</div>

`

export const statsCards = () => `
    <div class="stats-cards">
            <div class="stat-card">
                <div class="stat-card-icon">
                    <img src="images/Go-Logo_Blue.png" alt="golang logo" class="image-logo" />
                </div>
                <div class="stat-title">GO</div>
                <div id="go-projects" class="stat-value"></div>
            </div>

            <div class="stat-card">
                <div class="stat-card-icon">
                    <img src="images/js-logo.png" alt="js logo" class="image-logo" />
                </div>
                <div class="stat-title">JS</div>
                <div id="js-projects" class="stat-value"></div>
            </div>

            <div class="stat-card">
                <div class="stat-card-icon">
                    <img src="images/rust-logo.png" alt="rust logo" class="image-logo" />
                </div>
                <div class="stat-title">RUST</div>
                <div id="rs-projects" class="stat-value"></div>
            </div>
    </div>
`
export const scores = () => `
<div class="section-title">Perfomance Dashboard</div>
    <div class="scores">
        <div class="dashboard-container">
            <div class="metrics-container">
                <div class="metric-card purple">
                    <div class="metric-label">
                    <div class="metric-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                    </div>
                    XP Earned
                    </div>
                    <div id="xp-metric-value" class="metric-value"></div>
                    <div class="metric-trend trend-up">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                    +5.2% this month
                    </div>
                    <div class="progress-container">
                    <div class="progress-bar" style="width: 21%;"></div>
                    </div>
                </div>
      
                <div class="metric-card blue">
                    <div class="metric-label">
                    <div class="metric-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                        <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                        <path d="M20 12v4H6a2 2 0 0 0-2 2c0 1.1.9 2 2 2h12v-4"></path>
                        </svg>
                    </div>
                    Current Level and Rank
                    </div>
                    <div id="level-metric-value" class="metric-value"></div>
                    <div class="metric-trend trend-up">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                    +2 levels this month
                    </div>
                    <div class="progress-container">
                    <div class="progress-bar" style="width: 75%;"></div>
                    </div>
                </div>
      
                <div class="metric-card green">
                    <div class="metric-label">
                    <div class="metric-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>Grade</div>
                    <div id="grade-metric-value" class="metric-value"></div>
                    <div class="metric-trend trend-up">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                    +3.5% improvement
                    </div>
                    <div class="progress-container">
                    <div class="progress-bar" style="width: 79%;"></div>
                    </div>
                </div>
        </div>
     </div>
     <div class="section-title">XP Progression</div>
    <div id="chart-container"></div>
`
