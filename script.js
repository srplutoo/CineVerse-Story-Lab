document.addEventListener("DOMContentLoaded", function () {
    // Sidebar Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");

    menuToggle.addEventListener("click", function () {
        sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
    });

    // Search Functionality
    document.getElementById("search-bar").addEventListener("keyup", function () {
        let query = this.value.toLowerCase();
        let pages = document.querySelectorAll("nav.sidebar ul li");

        pages.forEach(function (page) {
            let text = page.textContent.toLowerCase();
            if (text.includes(query)) {
                page.style.display = "block";
            } else {
                page.style.display = "none";
            }
        });
    });
});

