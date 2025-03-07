
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Stops the form from submitting to URL

    const email = document.getElementById('emailInput').value.trim();
    const password = document.getElementById('passwordInput').value.trim();
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Clear previous errors
    emailError.innerText = '';
    passwordError.innerText = '';

    let valid = true;

    if (!email) {
        emailError.innerText = "Please enter your email.";
        valid = false;
    }

    if (!password) {
        passwordError.innerText = "Please enter your password.";
        valid = false;
    }

    if (!valid) {
        return;  // Stop if any validation failed
    }

    // Demo credentials - Replace with backend authentication
    if (email === "big@daddy.t" && password === "BigdaddyT") {
        sessionStorage.setItem("userRole", "admin");
        window.location.href = "dashboard.html";
    } else if (email === "user@example.com" && password === "UserPass123") {
        sessionStorage.setItem("userRole", "user");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid login credentials!");
    }
});
