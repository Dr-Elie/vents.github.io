function toggleNav() {
    var navLinks = document.getElementById("nav-links");
    var navbarToggle = document.getElementsByClassName("navbar-toggle")[0];
    
    if (navLinks.style.display === "none") {
        navLinks.style.display = "block";
        navbarToggle.style.display = "none";
    } else {
        navLinks.style.display = "none";
        navbarToggle.style.display = "flex";
    }
}
