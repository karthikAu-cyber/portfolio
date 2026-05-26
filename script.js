// ══════════════════════════════════════
// ── HUD Operations Monitor ──
// ══════════════════════════════════════
(function initHUD() {
  const activeLabel = document.getElementById('monitor-active-sec');
  const logFeed = document.getElementById('monitor-log-feed');
  if (!activeLabel || !logFeed) return;

  let currentSection = '';

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        let formattedName = id.toUpperCase();
        if (id === 'hero') formattedName = 'ENTRY';
        if (id === 'about') formattedName = 'PROFILE';
        if (id === 'skills') formattedName = 'ARSENAL';
        if (id === 'projects') formattedName = 'PROJECTS';
        if (id === 'experience') formattedName = 'RECORDS';
        if (id === 'certifications') formattedName = 'SEALS';
        if (id === 'contact') formattedName = 'CONTACT';

        if (currentSection !== formattedName) {
          currentSection = formattedName;
          activeLabel.textContent = formattedName;
          
          // Log the event
          const time = new Date().toLocaleTimeString('en-US', { hour12: false });
          const newLog = document.createElement('div');
          newLog.textContent = `[${time}] SEC: ${formattedName}`;
          logFeed.appendChild(newLog);
          
          // Keep only last 5 logs and scroll down
          while (logFeed.children.length > 5) {
            logFeed.removeChild(logFeed.firstChild);
          }
          logFeed.scrollTop = logFeed.scrollHeight;
        }
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('section, header, footer').forEach((sec) => {
    if (sec.id) observer.observe(sec);
  });
})();


// ══════════════════════════════════════
// ── Particle Network Background ──
// ══════════════════════════════════════
(function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  const PARTICLE_COUNT = 60;
  const CONNECTION_DIST = 140;
  let mouse = { x: null, y: null };
  let animId;

  function resize() {
    const hero = canvas.parentElement;
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_DIST) {
          const opacity = (1 - dist / CONNECTION_DIST) * 0.15;
          ctx.strokeStyle = `rgba(77, 208, 225, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw particles
    for (const p of particles) {
      // Mouse interaction — gentle repulsion
      if (mouse.x !== null) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          p.vx += dx * 0.0003;
          p.vy += dy * 0.0003;
        }
      }

      p.x += p.vx;
      p.y += p.vy;

      // Bounce off edges
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      // Clamp velocity
      p.vx = Math.max(-1, Math.min(1, p.vx));
      p.vy = Math.max(-1, Math.min(1, p.vy));

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(77, 208, 225, ${p.alpha})`;
      ctx.fill();
    }

    animId = requestAnimationFrame(drawParticles);
  }

  canvas.parentElement.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.parentElement.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });

  resize();
  createParticles();
  drawParticles();
})();


// ══════════════════════════════════════
// ── Typing Effect ──
// ══════════════════════════════════════
(function initTypingEffect() {
  const el = document.getElementById('typed-text');
  if (!el) return;

  const phrases = [
    'SOC Analyst & Cybersecurity Professional',
    'Threat Detection & Incident Response',
    'Vulnerability Assessment Specialist',
    'Security Operations Center Analyst',
    'CEH Certified • ISC² CC Verified',
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const TYPE_SPEED = 60;
  const DELETE_SPEED = 35;
  const PAUSE_AFTER_TYPE = 2200;
  const PAUSE_AFTER_DELETE = 500;

  function tick() {
    const current = phrases[phraseIndex];
    if (!isDeleting) {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(tick, PAUSE_AFTER_TYPE);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    } else {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, PAUSE_AFTER_DELETE);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    }
  }

  setTimeout(tick, 800);
})();


// ══════════════════════════════════════
// ── Animated Stat Counters ──
// ══════════════════════════════════════
(function initStatCounters() {
  const statNums = document.querySelectorAll('.stat-num');
  if (!statNums.length) return;

  let counted = false;

  function animateCount(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1500;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + '+';
      }
    }

    requestAnimationFrame(step);
  }

  const statObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !counted) {
      counted = true;
      statNums.forEach(el => animateCount(el));
    }
  }, { threshold: 0.5 });

  const statsContainer = document.querySelector('.hero-stats');
  if (statsContainer) statObserver.observe(statsContainer);
})();


// ══════════════════════════════════════
// ── Navigation Scroll Handling ──
// ══════════════════════════════════════
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


// ══════════════════════════════════════
// ── Mobile Menu ──
// ══════════════════════════════════════
const mobileToggle = document.querySelector('.mobile-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileClose = document.querySelector('.mobile-close');

mobileToggle.addEventListener('click', () => mobileMenu.classList.add('open'));
mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
document.querySelectorAll('.mobile-menu a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});


// ══════════════════════════════════════
// ── Scroll Reveal Animations ──
// ══════════════════════════════════════
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '-50px' });

document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => observer.observe(el));


// ══════════════════════════════════════
// ── Toast Notification ──
// ══════════════════════════════════════
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}


// ══════════════════════════════════════
// ── Copy Email ──
// ══════════════════════════════════════
document.querySelectorAll('[data-copy]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(el.dataset.copy);
    showToast('Email copied to clipboard!');
  });
});


// ══════════════════════════════════════
// ── Contact Form with EmailJS ──
// ══════════════════════════════════════
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
