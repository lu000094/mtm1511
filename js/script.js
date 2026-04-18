/* MTM1511 Final Project - Maplebrook Public Library - main js */

document.addEventListener('DOMContentLoaded', function() {

  // Mobile Menu 
  // AI-Generated: Mobile menu toggle logic
   //Same promt used as in index.html — AI returned HTML + CSS + JS together.
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuClose = document.getElementById('menuClose');

  menuToggle.addEventListener('click', function() {
    mobileMenu.classList.add('active');
    console.log('menu opened'); // testing
  });

  menuClose.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
  });

  // close menu when link clicked
  const menuLinks = document.querySelectorAll('.mobile-menu a');
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
    });
  });


  // contact form
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  contactForm.addEventListener('submit', function(event) {
      event.preventDefault();

      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var message = document.getElementById('message').value.trim();

      if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Please fill in all required fields.';
        formMessage.classList.add('show');
        return;
      }

      // regex from stackoverflow lol
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.classList.add('show');
        return;
      }

      formMessage.textContent = `Thank you, ${name}! Your message has been sent. We will reply soon.`;
      formMessage.classList.add('show');
      contactForm.reset();
      // console.log('form submitted ok');
    });

  // filter buttons for events page
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      filterButtons.forEach(function(btn) {
          btn.classList.remove('active');
      });
      this.classList.add('active');

      var filter = this.getAttribute('data-filter');
      var events = document.querySelectorAll('.event-list-item');

      events.forEach(function(event) {
        if (filter === 'all') {
          event.style.display = 'grid';
        } else if (event.getAttribute('data-category') === filter) {
            event.style.display = 'grid';
        } else {
          event.style.display = 'none';
        }
      });
    });
  });

});