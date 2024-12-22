document.getElementById('loginBtn').addEventListener('click', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get input values
    const email = document.getElementById('Email').value.trim();
    const pass = document.getElementById('pass').value.trim();

    // Validate name
    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    // Validate phone number
    if (pass === "") {
        alert("Please enter password");
        return;
    }

    // If all validations pass
    window.location = 'index.html'
});