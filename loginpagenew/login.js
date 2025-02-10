document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (!email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate login validation (optional: replace this with actual API call)
    if (email === "user@example.com" && password === "password123") {
        alert('Login successful! Redirecting to welcome page...');
        window.location.href = 'welcome.html'; 
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
