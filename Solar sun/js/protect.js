
const userRole = sessionStorage.getItem('userRole');

const currentPage = window.location.pathname.split('/').pop();

const adminPages = ['dashboard.html', 'profile.html', 'table.html'];
const userPages = ['dashboard.html', 'profile.html'];

if (userRole === 'admin') {
    if (!adminPages.includes(currentPage)) {
        alert('Access Denied - Admin Only Page');
        window.location.href = 'dashboard.html';
    }
} else if (userRole === 'user') {
    if (!userPages.includes(currentPage)) {
        alert('Access Denied - User Only Page');
        window.location.href = 'dashboard.html';
    }
} else {
    // If no role (not logged in), redirect to login
    alert('Please login to access this page.');
    window.location.href = 'login.html';
}
