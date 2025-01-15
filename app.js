
const sections = document.querySelectorAll('.fade-section');

const handleScroll = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.8;

    if (sectionTop < triggerPoint) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
};


window.addEventListener('scroll', handleScroll);


handleScroll();
