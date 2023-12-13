const accountButton = document.querySelector(".account");
const createAccountForm = document.querySelector(".create_account_form");
const closeButton = document.querySelector(".close-btn");
const loginForm = document.querySelector(".myForm");

accountButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    loginForm.classList.add("display-none");
    createAccountForm.classList.add("show");
});

closeButton.addEventListener('click', function() {
    loginForm.classList.remove("display-none");
    createAccountForm.classList.remove("show");
});
