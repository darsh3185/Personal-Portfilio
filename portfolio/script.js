const navItems = document.querySelectorAll('nav ul li');
const slides = document.querySelectorAll('.slide');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    const idx = +item.getAttribute('data-slide');
    document.querySelector('nav ul li.active').classList.remove('active');
    item.classList.add('active');
    document.querySelector('.slide.active').classList.remove('active');
    slides[idx].classList.add('active');
    // Optional: VFX on slider
    if (slides[idx].querySelector('.vfx-circle')) {
      const el = slides[idx].querySelector('.vfx-circle');
      el.classList.remove('burst');
      setTimeout(() => el.classList.add('burst'), 50);
    }
  });
});

// Simple contact form handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for reaching out, Darshan will contact you soon!');
    contactForm.reset();
  });
}
