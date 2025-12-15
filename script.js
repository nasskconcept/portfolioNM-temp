document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carrousel-liste');
    const items = Array.from(document.querySelectorAll('.carrousel-item'));
    const gap = 16;
    const itemWidth = items[0].offsetWidth + gap;
  
    let index = 0;
  
    
    items.forEach(item => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });
  
    const totalItems = track.children.length;
  
    const slide = () => {
      index++;
      track.style.transition = 'transform 0.5s ease';
      track.style.transform = `translateX(-${index * itemWidth}px)`;
  
     
      if (index >= items.length) {
        setTimeout(() => {
          track.style.transition = 'none';
          index = 0;
          track.style.transform = `translateX(0px)`;
        }, 500); 
      }
    }
  
    let interval = setInterval(slide, 3000);
  
    
    track.parentElement.addEventListener('mouseenter', () => clearInterval(interval));
    track.parentElement.addEventListener('mouseleave', () => interval = setInterval(slide, 3000));
  });
  