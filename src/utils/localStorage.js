/* Define constants for local storage keys
export const LS_USER_KEY = 'hasUsers';
export const LS_CURRENT_USER = 'currentUser ';
export const LS_USER_REQUESTS = 'serviceRequests';

// Get the list of users from local storage
export const getUsers = () => {
  return JSON.parse(localStorage.getItem(LS_USER_KEY)) || [];
};

// Set the list of users in local storage
export const setUsers = (users) => {
  localStorage.setItem(LS_USER_KEY, JSON.stringify(users));
};

// Get the current logged-in user from local storage
export const getCurrentUser  = () => {
  return localStorage.getItem(LS_CURRENT_USER) || null;
};

// Set the current logged-in user in local storage
export const setCurrentUser  = (username) => {
  localStorage.setItem(LS_CURRENT_USER, username);
};

// Clear the current logged-in user from local storage
export const clearCurrentUser  = () => {
  localStorage.removeItem(LS_CURRENT_USER);
};

// Get service requests from local storage
export const getRequests = () => {
  return JSON.parse(localStorage.getItem(LS_USER_REQUESTS)) || {};
};

// Set service requests in local storage
export const setRequests = (requests) => {
  localStorage.setItem(LS_USER_REQUESTS, JSON.stringify(requests));
};

// Update navigation visibility based on login status
export const updateNavVisibility = (loggedIn) => {
  const navItems = document.querySelectorAll('.nav-item'); // Assuming nav items have a class of 'nav-item'
  
  navItems.forEach(item => {
    if (loggedIn) {
      item.style.display = 'block'; // Show nav items for logged-in users
    } else {
      item.style.display = 'none'; // Hide nav items for logged-out users
    }
  });
};
*/export const LS_USER_KEY = 'hasUsers';
export const LS_CURRENT_USER = 'currentUser';

export const getUsers = () => JSON.parse(localStorage.getItem(LS_USER_KEY)) || [];

export const setUsers = users => localStorage.setItem(LS_USER_KEY, JSON.stringify(users));

export const getCurrentUser = () => localStorage.getItem(LS_CURRENT_USER);

export const setCurrentUser = username => localStorage.setItem(LS_CURRENT_USER, username);

export const clearCurrentUser = () => localStorage.removeItem(LS_CURRENT_USER);

export const updateNavVisibility = (loggedIn) => {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.style.display = loggedIn ? 'block' : 'none';
  });
};
