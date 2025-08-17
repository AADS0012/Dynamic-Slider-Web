document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    
    function goToSlide(index) {
      if (index < 0) {
        currentIndex = slideCount - 1;
      } else if (index >= slideCount) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
      
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    function nextSlide() {
      goToSlide(currentIndex + 1);
    }
    
    function prevSlide() {
      goToSlide(currentIndex - 1);
    }
    
    // next slide auto in 3s
    let slideInterval = setInterval(nextSlide, 3000);
    
    // when hover on slider auto stop
    slider.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });
    
    // when mouse out of the slider auto start
    slider.addEventListener('mouseleave', () => {
      slideInterval = setInterval(nextSlide, 3000);
    });
    
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

  });