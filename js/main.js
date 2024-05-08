window.onload = function() {
    document.getElementById('year').textContent = new Date().getFullYear();
    /* Navbar scrolling */
    var links = document.getElementsByClassName('nav-link');
    var navbar = document.getElementsByClassName('navbar')[0];
    var navbarLinks = document.querySelector('.navbar-links');
    var dropdownButton = document.querySelector('.dropdown-button');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(event) {
            event.preventDefault();
            var target = document.getElementById(this.href.split('#')[1]);  
            if (navbarLinks.classList.contains('show')) {
                navbarLinks.classList.toggle('show');
            }
            if (this.href.split('#')[1] !== 'top') {
                let offset = 0;
                if (navbarLinks.classList.contains('show')) {
                    offset = dropdownButton.offsetHeight;
                } else {
                    offset = navbar.offsetHeight;
                }
                window.scrollTo(0, target.offsetTop - offset);
            } else {
                window.scrollTo(0, target.offsetTop);
            }
        });
    }

    /* Content scrolling */
    window.addEventListener('scroll', function() {
        var elements = document.getElementsByClassName('scroll-animation');

        for (let i = 0; i < elements.length; i++) {
            var element = elements[i];
            var position = element.getBoundingClientRect();
            // Check whether the element is in the viewport
            if (position.top < window.innerHeight - 100 || ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2)) {
                element.classList.add('animate');
            }
        }
    });


    /* Dropdown button */
    document.querySelector('.dropdown-button').addEventListener('click', function() {
        var navbarLinks = document.querySelector('.navbar-links');
        var dropdownButton = document.querySelector('.dropdown-button');
        navbarLinks.classList.toggle('show');
        dropdownButton.classList.toggle('fa-bars')
        dropdownButton.classList.toggle('fa-times')
    });
}