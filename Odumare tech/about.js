consttyped = new Typed('.multiple-text', {
    strings: ['About Us'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
   });

   ScrollReveal().reveal('.heading', { origin: 'top'});
   ScrollReveal().reveal('.statement-box, .stack-container, projects-box, .contact-form', { origin: 'bottom'});
   ScrollReveal().reveal('.course-card, .about-img', { origin: 'left'});
   ScrollReveal().reveal('.home-content p, .intro-box', { origin: 'right'});

   let menuIcon = document.querySelector('#menu-icon');
   let navbar = document.querySelector('.navbar');
   
   menuIcon.onclick = () => {
       menuIcon.classList.toggle('bx-x');
       navbar.classList.toggle('active');
   };
   
   let sections = document.querySelectorAll('section');
   let navLinks = document.querySelectorAll('header nav a');
   
   window.onscroll = () => {
       sections.forEach(sec => {
           let top = window.scrollY;
           let offset = sec.offsetTop - 150;
           let height = sec.offsetHeight;
           let id = sec.getAttribute('id');
   
           if(top >= offset && top < offset + height) {
               navLinks.forEach(links => {
                   links.classList.remove('active');
                   document.querySelector('header nav a[href*=' + id +']').classList.add('active');
               });
           };
       });
   
   
   
       let header = document.querySelector('header');
   
       header.classList.toggle('sticky', window.scrollY > 100);
   
       menuIcon.classList.remove('bx-x');
       navbar.classList.remove('active');  
   };