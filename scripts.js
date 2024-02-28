document.addEventListener("DOMContentLoaded", function() {
    // Hide all sections except the first one
    var sections = document.querySelectorAll('.section');
    for (var i = 1; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    // Add event listeners to navigation links
    var navLinks = document.querySelectorAll('.navigation a');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            var targetSectionId = this.getAttribute('href').substring(1);
            showSection(targetSectionId);
        });
    }
});

function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].id === sectionId) {
            sections[i].style.display = 'block'; // Show the target section
        } else {
            sections[i].style.display = 'none'; // Hide other sections
        }
    }
}
