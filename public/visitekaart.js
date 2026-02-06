// 1. Selecteer de elementen 
let buttons = document.querySelectorAll('.hobby-btn');
let mainImage = document.querySelector('#mainImage');

// 2. Wacht tot iemand op een hobby button klikt
buttons.forEach(function(button) {
  button.addEventListener('click', function() {

    //  veranderd de afbeelding
    mainImage.src = button.dataset.img;

    // laat zien welke button actief is 
    buttons.forEach(function(btn) {
      btn.classList.remove('hobby-active');
    });

    button.classList.add('hobby-active');
  });
});