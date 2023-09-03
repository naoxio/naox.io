document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("themeToggle");

    // On page load, set the checkbox state from localStorage
    const themeState = localStorage.getItem("themeState");

    if (themeState) {
        themeToggle.checked = themeState === "light";
    }
    if (themeState === "light") {
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
    }
      
    // Add event listener to the checkbox
    themeToggle.addEventListener("change", function() {
        if (this.checked) {
            localStorage.setItem("themeState", "light");
            document.body.classList.add('light-theme');
        } else {
            localStorage.setItem("themeState", "dark");
            document.body.classList.remove('light-theme');
        }
    });
});
