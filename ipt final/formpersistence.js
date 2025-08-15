// Form Persistence for Contact Form

const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Load saved data on page load
window.addEventListener('DOMContentLoaded', () => {
  nameInput.value = localStorage.getItem('contact_name') || '';
  emailInput.value = localStorage.getItem('contact_email') || '';
  messageInput.value = localStorage.getItem('contact_message') || '';
});

// Save data on input
[nameInput, emailInput, messageInput].forEach(input => {
  input.addEventListener('input', () => {
    localStorage.setItem('contact_name', nameInput.value);
    localStorage.setItem('contact_email', emailInput.value);
    localStorage.setItem('contact_message', messageInput.value);
  });
});

// Clear data on successful submit
form.addEventListener('submit', () => {
  localStorage.removeItem('contact_name');
  localStorage.removeItem('contact_email');
  localStorage.removeItem('contact_message');
});