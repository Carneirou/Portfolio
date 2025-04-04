document.addEventListener('DOMContentLoaded', function() {
  // Parallax effect for floating shapes
  const shapes = document.querySelectorAll('.shape');
  window.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
      const speed = index * 0.03 + 0.01;
      const offsetX = (x - 0.5) * 40 * speed;
      const offsetY = (y - 0.5) * 40 * speed;
      shape.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
  });
  
  // Intersection Observer for section animations
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // Trigger specific animations for elements within active section
        if (entry.target.id === 'skills') {
          animateProgressBars();
        }
      }
    });
  }, { threshold: 0.2 });
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
  // Smooth scrolling and navigation highlighting
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      // Update active state
      navLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
      
      // Scroll to section
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Animate progress bars
  function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    });
  }

  // Update active navigation based on scroll position
  function updateNavigation() {
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
  }
  
  // Initial call to set correct navigation state
  updateNavigation();
  
  // Throttled scroll event listener
  let isScrolling;
  window.addEventListener('scroll', function() {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(updateNavigation, 50);
  });
  
  // Add hover effect to buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s ease';
      this.style.transform = 'translateY(-5px)';
    });
    
    btn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});
