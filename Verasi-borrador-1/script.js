// Menú móvil
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
navToggle?.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

// Fecha en footer
document.getElementById('year').textContent = new Date().getFullYear();

// Carrusel sencillo de testimonios
(function(){
  const list = document.getElementById('testimonial-list');
  if(!list) return;
  const items = Array.from(list.querySelectorAll('.testimonial'));
  let idx = items.findIndex(i => i.classList.contains('active'));
  if(idx < 0) idx = 0;
  const show = (n) => {
    items.forEach((it, i) => {
      it.classList.toggle('active', i === n);
    });
  };
  show(idx);
  const prevBtn = document.querySelector('.testimonials .prev');
  const nextBtn = document.querySelector('.testimonials .next');
  prevBtn?.addEventListener('click', ()=> { idx = (idx - 1 + items.length) % items.length; show(idx); });
  nextBtn?.addEventListener('click', ()=> { idx = (idx + 1) % items.length; show(idx); });

  // autoplay opcional
  let autoplay = setInterval(()=> { idx = (idx + 1) % items.length; show(idx); }, 6000);
  // pausa al hover
  list.addEventListener('mouseenter', ()=> clearInterval(autoplay));
  list.addEventListener('mouseleave', ()=> autoplay = setInterval(()=> { idx = (idx + 1) % items.length; show(idx); }, 6000));
})();