// ── Navigation scroll handling ──
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = ['hero','about','skills','projects','experience','certifications','contact'];

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
        break;
      }
    }
  }
});

// ── Mobile menu ──
const mobileToggle = document.querySelector('.mobile-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileClose = document.querySelector('.mobile-close');

mobileToggle.addEventListener('click', () => mobileMenu.classList.add('open'));
mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
document.querySelectorAll('.mobile-menu a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ── Scroll reveal animations ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '-50px' });

document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => observer.observe(el));

// ── Toast notification ──
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── Copy email ──
document.querySelectorAll('[data-copy]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(el.dataset.copy);
    showToast('Email copied to clipboard!');
  });
});

// ── Contact form with EmailJS ──
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = '⟩ Transmitting...';

    emailjs.sendForm('service_mwg3cb6', 'template_ehhlidi', contactForm, 'ar5jn8Jbt06ip8yHY')
      .then(() => {
        showToast('Message transmitted successfully!');
        contactForm.reset();
        btn.disabled = false;
        btn.innerHTML = '⟩ Transmit Message';
      }, (error) => {
        console.error(error);
        showToast('Transmission failed. Please try again.');
        btn.disabled = false;
        btn.innerHTML = '⟩ Transmit Message';
      });
  });
}
