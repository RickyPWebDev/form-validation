var form = document.getElementById("myForm");
var successMessage = document.getElementById("success-message");
var formContainer = document.querySelector(".form-container");
var dismissBtn = document.getElementById("dismiss-btn");

form.addEventListener('submit', function(event) {
    event.preventDefault();

    var emailInput = document.getElementById('email');
    var email = emailInput.value.trim();
    var error = document.querySelector('.validation-error-text');
    var userEmailDisplay = document.getElementById('user-email');

    // email validation using regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || !emailRegex.test(email)) {
        error.classList.remove('hidden');
    } else {
        error.classList.add('hidden');

        // Show success message
        userEmailDisplay.textContent = email; // insert email in success text
        formContainer.classList.add('hidden'); // hide form
        successMessage.classList.remove('hidden'); // show success
    }
});

// Dismiss button to go back to form
dismissBtn.addEventListener('click', function() {
    successMessage.classList.add('hidden');
    formContainer.classList.remove('hidden');
    form.reset(); // clear input
});
