export const topBar = () => `
    <div class="top-bar">
            <div class="nav-links">
                <a href="#" class="nav-link">Learning Paths</a>
                <a href="#" class="nav-link dropdown">Create</a>
                <a href="#" class="nav-link dropdown">Build</a>
                <a href="#" class="nav-link dropdown">Thrive</a>
            </div>

            <div class="actions">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
            </div>
    </div>
    <div class="section-title">Course validation</div>

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
    <div class="scores">
        <div class="dashboard-container">
            <div class="dashboard-header">
                <h1 class="dashboard-title">Performance Dashboard</h1>
                <div class="date-selector">
                    <span>Period:</span>
                    <select>
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                    <option>This year</option>
                    </select>
                </div>
            </div>
    
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
                    +5.2% from last week
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
                    Experience Level
                    </div>
                    <div "level-metric-value" class="metric-value"></div>
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
                    </div>
                    Performance Grade
                    </div>
                    <div class="metric-value">
                    79<span class="metric-unit">%</span>
                    </div>
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
            <div class="chart-container">
                <div class="chart-header">
                    <div class="chart-title">XP Progression</div>
                </div>

                <div class="chart">
                    <div class="chart-bar" style="height: 100%">
                        <div class="chart-bar-fill" style="height: 30%"></div>
                    </div>
                    <div class="chart-bar" style="height: 100%">
                        <div class="chart-bar-fill" style="height: 45%"></div>
                    </div>
                    <div class="chart-bar" style="height: 100%">
                        <div class="chart-bar-fill" style="height: 35%"></div>
                    </div>
                    <div class="chart-bar" style="height: 100%">
                        <div class="chart-bar-fill" style="height: 28%"></div>
                    </div>
                    <div class="chart-bar active" style="height: 100%">
                        <div class="chart-bar-fill" style="height: 80%"></div>
                    </div>
                    <div class="chart-bar" style="height: 100%">
                        <div class="chart-bar-fill" style="height: 42%"></div>
                    </div>
                    <div class="chart-bar" style="height: 100%">
                        <div class="chart-bar-fill" style="height: 38%"></div>
                    </div>
                </div>

                <div class="chart-labels">
                    <div class="chart-label">10 Dec</div>
                    <div class="chart-label">12 Dec</div>
                    <div class="chart-label">14 Dec</div>
                    <div class="chart-label">16 Dec</div>
                    <div class="chart-label">18 Dec</div>
                    <div class="chart-label">20 Dec</div>
                    <div class="chart-label">22 Dec</div>
                </div>
            </div>
    </div>
`

export const gridContainer = () => `
    <div class="grid-container">
            <div>
                <div class="topics-columns">
                    <div class="card">
                        <div class="card-header">
                            <div class="card-title">Weakest topics</div>
                            <div class="action-icons">
                                <button class="icon-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                    </svg>
                                </button>
                                <button class="icon-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <ul class="topic-list">
                            <li class="topic-item">
                                <div class="topic-info">
                                    <div class="topic-number">01</div>
                                    <div class="topic-name">Food safety</div>
                                </div>
                                <div class="topic-score medium">75%</div>
                            </li>
                            <li class="topic-item">
                                <div class="topic-info">
                                    <div class="topic-number">02</div>
                                    <div class="topic-name">Compliance basics</div>
                                </div>
                                <div class="topic-score medium">52%</div>
                            </li>
                            <li class="topic-item">
                                <div class="topic-info">
                                    <div class="topic-number">03</div>
                                    <div class="topic-name">Company networking</div>
                                </div>
                                <div class="topic-score low">30%</div>
                            </li>
                        </ul>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <div class="card-title">Strongest topics</div>
                            <div class="action-icons">
                                <button class="icon-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                    </svg>
                                </button>
                                <button class="icon-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <ul class="topic-list">
                            <li class="topic-item">
                                <div class="topic-info">
                                    <div class="topic-number">01</div>
                                    <div class="topic-name">Cyber security basics</div>
                                </div>
                                <div class="topic-score high">92%</div>
                            </li>
                            <li class="topic-item">
                                <div class="topic-info">
                                    <div class="topic-number">02</div>
                                    <div class="topic-name">Covid protocols</div>
                                </div>
                                <div class="topic-score high">95%</div>
                            </li>
                            <li class="topic-item">
                                <div class="topic-info">
                                    <div class="topic-number">03</div>
                                    <div class="topic-name">Social media policies</div>
                                </div>
                                <div class="topic-score high">89%</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <div class="card">
                    <div class="card-header">
                        <div class="card-title">Course Statistics</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                        </div>
                    </div>

                    <div class="progress-list">
                        <div class="progress-item">
                            <div class="progress-label">Done</div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 65%"></div>
                            </div>
                        </div>

                        <div class="progress-item">
                            <div class="progress-label">On Progress</div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 45%"></div>
                            </div>
                        </div>

                        <div class="progress-item">
                            <div class="progress-label">To Do</div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 25%"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <div class="card-title">Summary</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                        </div>
                    </div>

                    <div class="summary-list">
                        <div class="topic-item">
                            <div class="topic-info">
                                <div class="topic-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                                        <line x1="7" y1="2" x2="7" y2="22"></line>
                                        <line x1="17" y1="2" x2="17" y2="22"></line>
                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                        <line x1="2" y1="7" x2="7" y2="7"></line>
                                        <line x1="2" y1="17" x2="7" y2="17"></line>
                                        <line x1="17" y1="17" x2="22" y2="17"></line>
                                        <line x1="17" y1="7" x2="22" y2="7"></line>
                                    </svg>
                                </div>
                                <div class="topic-name">Courses</div>
                            </div>
                            <div class="topic-score">
                                24
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </div>
                        </div>

                        <div class="topic-item">
                            <div class="topic-info">
                                <div class="topic-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                </div>
                                <div class="topic-name">Total time</div>
                            </div>
                            <div class="topic-score">
                                180
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </div>
                        </div>

                        <div class="topic-item">
                            <div class="topic-info">
                                <div class="topic-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                </div>
                                <div class="topic-name">Total time</div>
                            </div>
                            <div class="topic-score">
                                180
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     </div>
`