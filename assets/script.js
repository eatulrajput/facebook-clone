
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // Perform your login logic here
    console.log("Email: " + email);
    console.log("Password: " + password);
    // You can redirect to another page or perform additional actions after login
});