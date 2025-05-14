document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const toggle = document.getElementById('toggle');
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
      toggle.checked = true;
    }
    
    toggle.addEventListener('change', function() {
      document.body.classList.toggle('light-mode');
      localStorage.setItem('theme', 
        document.body.classList.contains('light-mode') ? 'light' : 'dark');
    });
  
    // Page Navigation
    const navButtons = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');
    
    navButtons.forEach(button => {
      button.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        
        // Update active button
        navButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Show target page
        pages.forEach(page => {
          page.classList.remove('active-page');
          if (page.id === target) {
            page.classList.add('active-page');
          }
        });
      });
    });
  
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });   