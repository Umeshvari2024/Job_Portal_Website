// =========================
// THEME TOGGLE (WORKING FOR ALL PAGES)
// =========================

const themeToggle = document.getElementById("themeToggle");

// load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.setAttribute("data-theme", "dark");
    if (themeToggle) themeToggle.innerText = "☀️";
} else {
    document.body.setAttribute("data-theme", "light");
    if (themeToggle) themeToggle.innerText = "🌙";
}

// toggle click
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const currentTheme = document.body.getAttribute("data-theme");

        if (currentTheme === "dark") {
            document.body.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
            themeToggle.innerText = "🌙";
        } else {
            document.body.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            themeToggle.innerText = "☀️";
        }
    });
}


// =========================
// NAVIGATION FUNCTIONS
// =========================

function openApply(jobName) {
    window.location.href = "apply.html?job=" + encodeURIComponent(jobName);
}

function viewDetails(jobName) {
    window.location.href = "job-details.html?job=" + encodeURIComponent(jobName);
}


// =========================
// APPLY PAGE BACK BUTTON
// =========================
function goBack() {
    window.location.href = "jobs.html";
}