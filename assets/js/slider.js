// Projects Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.projects-slider');
    const slides = document.querySelectorAll('.project-slide');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const dotsContainer = document.querySelector('.slider-dots');

    // Check if slider elements exist
    if (!slider || !slides.length || !prevBtn || !nextBtn || !dotsContainer) {
        console.warn('Slider elements not found:', {
            slider: !!slider,
            slides: slides.length,
            prevBtn: !!prevBtn,
            nextBtn: !!nextBtn,
            dotsContainer: !!dotsContainer
        });
        return;
    }

    let currentIndex = 0;
    let slideCount = slides.length;
    const visibleSlides = 3;

    // Create dots
    const maxDots = Math.ceil(slideCount / visibleSlides);
    for (let i = 0; i < maxDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * (100 / visibleSlides)}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % maxDots;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + maxDots) % maxDots;
        updateSlider();
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    console.log('Slider initialized with', slideCount, 'slides and', maxDots, 'dot groups');

    // Auto-advance slides every 5 seconds (optional)
    // setInterval(nextSlide, 5000);
});
