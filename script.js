document.addEventListener('DOMContentLoaded', function() {
  // Activate nav links and smooth scroll
  const navLinks = document.querySelectorAll('.nav-link');
  const heroButtons = document.querySelectorAll('.hero-buttons a');
  
  // Function for smooth scrolling
  function smoothScroll(targetId) {
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  }
  
  // Add event listeners to nav links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      // Smooth scroll to section
      smoothScroll(targetId);
    });
  });
  
  // Add event listeners to hero buttons
  heroButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      // Update active nav link
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
          link.classList.add('active');
        }
      });
      
      // Smooth scroll to section
      smoothScroll(targetId);
    });
  });

  // Animate progress bars with interaction
  const skillCards = document.querySelectorAll('.skill-card');
  
  // Initial animation
  setTimeout(() => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    });
  }, 500);
  
  // Add hover interaction to skill cards
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const progressBar = this.querySelector('.progress-bar');
      progressBar.style.opacity = '0.8';
      progressBar.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
    });
    
    card.addEventListener('mouseleave', function() {
      const progressBar = this.querySelector('.progress-bar');
      progressBar.style.opacity = '1';
      progressBar.style.boxShadow = 'none';
    });
  });

  // Activate section based on scroll
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  });
});
