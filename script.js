window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-scroll-effect');
        if (window.scrollY > 50) { // Jika di-scroll lebih dari 50px
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
});
