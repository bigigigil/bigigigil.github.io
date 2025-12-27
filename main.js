let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 if (document.documentElement.lang === "en") {
  typewriter
    .pauseFor(2500)
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #fff786"> Digital Artist and Animator </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();

 } else {
  typewriter
 .pauseFor(2500)
  .typeString('<span style="color: #fff786"> Artista Digital y Animadora </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();

 }
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

document.getElementById('idioma').addEventListener('change', function() {
    const selectedPage = this.value;
    if (selectedPage) {
        window.location.href = selectedPage;
    }
});