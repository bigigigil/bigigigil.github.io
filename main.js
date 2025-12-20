let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #fff786"> Artista Digital y Animadora </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();


  document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.float-img');
    
    images.forEach(img => {
        
        const randomTop = Math.floor(Math.random() * 90);
        const randomLeft = Math.floor(Math.random() * 90);
        const randomDelay = Math.floor(Math.random() * 10);
        
        img.style.top = `${randomTop}%`;
        img.style.left = `${randomLeft}%`;
        img.style.animationDelay = `${randomDelay}s`;
    });
});