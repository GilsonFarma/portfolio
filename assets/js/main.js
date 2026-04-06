document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    target.scrollIntoView({
      behavior: 'smooth'
    });
    });
});
// Adiciona animação de fade-in aos projetos
const projectItems = document.querySelectorAll('.project-item');
projectItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('fade-in');
  });
    item.addEventListener('mouseleave', () => {
    item.classList.remove('fade-in');
    });
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});