document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll function
  function smoothScroll(targetId) {
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  }
  
  // Add event listeners to navigation links
  document.querySelectorAll('.nav-link, .hero-buttons a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      // Update active class for nav links
      document.querySelectorAll('.nav-link').forEach(navLink => {
        navLink.classList.remove('active');
        if (navLink.getAttribute('href') === targetId) {
          navLink.classList.add('active');
        }
      });
      
      // Smooth scroll to section
      smoothScroll(targetId);
    });
  });

  // Animate progress bars on load
  setTimeout(() => {
    document.querySelectorAll('.progress-bar').forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => bar.style.width = width, 100);
    });
  }, 500);
  
  // Add hover effects to skill cards
  document.querySelectorAll('.skill-card').forEach(card => {
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

  // Update active nav link based on scroll position
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY + 100;
    
    document.querySelectorAll('.section').forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  });
});
