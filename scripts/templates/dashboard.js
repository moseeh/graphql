export const leftSidebar = (user) => `
        <div class="user-header" >
            <div class="avatar">${user.attrs.firstName.toUpperCase()[0]}${user.attrs.lastName.toUpperCase()[0]}</div>
            <div class="user-title">
              <h1 class="user-name">${user.attrs.firstName.toUpperCase()} ${user.attrs.middleName.toUpperCase()} ${user.attrs.lastName.toUpperCase()}</h1>
              <p class="username">${user.login}</p> 
            </div>
        </div>

        <div class="info-item">
        <div class="info-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2ZM17 18H7V6H17V18Z" />
            <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" />
          </svg>
        </div>
        <div class="info-content">
          <p class="info-label">Phone Number</p>
          <p class="info-value">${user.attrs.phone}</p>
        </div>
      </div>

       <div class="info-item">
        <div class="info-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4ZM20 6L12 11L4 6H20ZM4 18V8L12 13L20 8V18H4Z" />
          </svg>
        </div>
        <div class="info-content">
          <p class="info-label">Email Address</p>
          <p class="info-value">${user.attrs.email}</p>
        </div>
      </div>

      <div class="info-item">
        <div class="info-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8Z" />
            <rect x="7" y="12" width="3" height="3" />
            <rect x="14" y="12" width="3" height="3" />
          </svg>
        </div>
        <div class="info-content">
          <p class="info-label">Date of Birth</p>
          <p class="info-value">${formatDate(user.attrs.dateOfBirth)}</p>
        </div>
      </div>
        
      <div class="info-item">
  <div class="info-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z"/>
      <path d="M10 9C10 8.44772 10.4477 8 11 8H13C13.5523 8 14 8.44772 14 9V14H16V18H14V22H12V18H8V14H10V9Z"/>
    </svg>
  </div>
  <div class="info-content">
    <p class="info-label">Gender</p>
    <p class="info-value">${user.attrs.gender}</p>
  </div>
</div>
<div class="info-item">
  <div class="info-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  </div>
  <div class="info-content">
    <p class="info-label">Country</p>
    <p class="info-value">${user.attrs.country}</p>
  </div>
</div>

        <div class="spacer"></div>
        <div id="logout-btn" class="log-out">
            <span class="menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
            </span>
            Log Out
        </div>
`;


function formatDate(isoDateString) {
    // Create a new Date object from the ISO string
    const date = new Date(isoDateString);
    
    // Array of month names
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    // Get the month name, day, and year
    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    
    // Return the formatted date string
    return `${monthName} ${day}, ${year}`;
  }