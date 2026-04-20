var navbarCollapse = document.getElementById('navbarSupportedContent');

var navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)');

var dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse).hide();
        }
    });
});

dropdownItems.forEach(function(item) {
    item.addEventListener('click', function() {
        if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse).hide();
        }
    });
});
const btn = document.getElementById("darkMode");

btn.onclick = function () {
    document.body.classList.toggle("dark");
};