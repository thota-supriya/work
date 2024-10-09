// Read More button functionality
const readMoreButtons = document.querySelectorAll('.about-content .btn-1, .service-box .btn-1');
const readMoreContents = document.querySelectorAll('.read-more-content');

// Initially hide all read-more content
readMoreContents.forEach(content => content.classList.add('hidden'));

// Toggle the read-more content visibility when the button is clicked
readMoreButtons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default action
    const readMoreContent = readMoreContents[index];
    readMoreContent.classList.toggle('hidden');
    button.textContent = readMoreContent.classList.contains('hidden') ? 'Read More' : 'Read Less';
  });
});

// CSS for hiding content (add this rule in your CSS)
const style = document.createElement('style');
style.innerHTML = `
  .hidden {
    display: none;
  }
`;
document.head.appendChild(style);

// Menu icon and navbar functionality
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
};

// Active section functionality on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};

// ScrollReveal functionality
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// Typed.js functionality
const typed = new Typed('.multiple-text', {
  strings: ['Frontend developer', 'Web Designer', 'Data Analyst', 'ML Engineer'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

// Form submission functionality with validation
const form = document.getElementById('myForm');
const fullName = document.getElementById('fullName');
const emailAddress = document.getElementById('emailAddress');
const mobileNumber = document.getElementById('mobileNumber');
const emailSubject = document.getElementById('emailSubject');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validation flags
  let valid = true;
  let errorMessage = '';

  // Validate Full Name
  if (fullName.value.length < 10 || fullName.value.length > 30) {
    valid = false;
    errorMessage += "Full Name must be between 10 and 30 characters.\n";
  }

  // Validate Email Address
  if (!emailAddress.value.endsWith('@gmail.com')) {
    valid = false;
    errorMessage += "Email Address must end with '@gmail.com'.\n";
  }

  // Validate Mobile Number
  if (!/^\d{10}$/.test(mobileNumber.value)) {
    valid = false;
    errorMessage += "Mobile Number must be exactly 10 digits.\n";
  }

  // Show error message if validation fails
  if (!valid) {
    alert(errorMessage);
    return;
  }

  // Display a pop-up message for successful submission
  alert("Thank you for sending a message! We will get back to you soon.");

  // Clear the form fields
  fullName.value = '';
  emailAddress.value = '';
  mobileNumber.value = '';
  emailSubject.value = '';
  message.value = '';
});