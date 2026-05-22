const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    const currentTheme = document.body.getAttribute("data-theme");

    if (currentTheme === "dark") {
        document.body.removeAttribute("data-theme");
        themeToggle.innerText = "🌙";
    } else {
        document.body.setAttribute("data-theme", "dark");
        themeToggle.innerText = "☀️";
    }

});