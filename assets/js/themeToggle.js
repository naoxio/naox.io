document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("themeToggle");

    // On page load, set the checkbox state from localStorage
    const themeState = localStorage.getItem("themeState");
    if (themeState) {
        themeToggle.checked = themeState === "dark";
    }

    // Add event listener to the checkbox
    themeToggle.addEventListener("change", function() {
        if (this.checked) {
            localStorage.setItem("themeState", "dark");
        } else {
            localStorage.setItem("themeState", "light");
        }
    });
});
