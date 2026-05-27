document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {

        localStorage.setItem("JobPortal_User", email);

        window.location.href = "index.html";
    }
    else {
        alert("Please fill all fields");
    }
});
document.getElementById("logoutBtn").addEventListener("click", function (e) {
    e.preventDefault();

    localStorage.removeItem("JobPortal_User");

    window.location.href = "login.html";
});