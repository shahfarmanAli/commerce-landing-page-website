

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted successfully!');
  });

  
$('.btn').click(function(){
  if($(this).hasClass('active')){
      $(this).removeClass('active')
  } else {
      $(this).addClass('active')
  }
});




const slider = document.querySelector('.testimonial-slider');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

// Auto-slide every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % dots.length;
    updateSlider();
}, 5000);