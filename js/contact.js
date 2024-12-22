document.getElementById('contact').addEventListener('click', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get input values
    const Name = document.getElementById('Name').value.trim();
    const Message = document.getElementById('Message').value.trim();

    // Validate name
    if (Name === "") {
        alert("Please enter your Name");
        return;
    }

    // Validate phone number
    if (Message === "") {
        alert("Please enter Message");
        return;
    }

    // If all validations pass
    window.location = 'login.html'
});