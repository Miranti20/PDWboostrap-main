/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#efek-ngetik', {
        strings: ['Web Developer.', 'UI/UX Designer.', 'Problem Solver.'],
        typeSpeed: 60,   // Kecepatan ngetik
        backSpeed: 40,   // Kecepatan hapus
        backDelay: 1500, // Jeda sebelum dihapus
        loop: true       // Ulangi terus menerus
    });
});

const toggleBtn = document.getElementById('darkModeToggle');
const bodyElement = document.body;

toggleBtn.addEventListener('click', function() {
    bodyElement.classList.toggle('dark-mode');
    
    // Mengubah teks tombol saat diklik
    if(bodyElement.classList.contains('dark-mode')) {
        toggleBtn.innerText = '☀ Mode Terang';
    } else {
        toggleBtn.innerText = '🌙 Mode Gelap';
    }
});

});
