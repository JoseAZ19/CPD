document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const texts = document.querySelectorAll('.text-animate');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    const textObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    texts.forEach(text => {
        textObserver.observe(text);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Configuración del primer carrusel
    const slider1 = document.querySelector('.image-slider .slides');
    const images1 = slider1.querySelectorAll('img');
    const prevButton1 = document.querySelector('.image-slider .prev');
    const nextButton1 = document.querySelector('.image-slider .next');

    let index1 = 0;
    const totalImages1 = images1.length;
    const intervalTime1 = 3000;
    let slideInterval1;

    function showSlide1(n) {
        index1 = (n + totalImages1) % totalImages1;
        slider1.style.transform = `translateX(-${index1 * 100}%)`;
    }

    function nextSlide1() {
        showSlide1(index1 + 1);
    }

    function prevSlide1() {
        showSlide1(index1 - 1);
    }

    function startSlideInterval1() {
        slideInterval1 = setInterval(nextSlide1, intervalTime1);
    }

    function stopSlideInterval1() {
        clearInterval(slideInterval1);
    }

    nextButton1.addEventListener('click', () => {
        nextSlide1();
        stopSlideInterval1();
        startSlideInterval1();
    });

    prevButton1.addEventListener('click', () => {
        prevSlide1();
        stopSlideInterval1();
        startSlideInterval1();
    });

    startSlideInterval1();

    // Configuración del segundo carrusel (About Us)
    const slider2 = document.querySelector('.image-slider-about .slides-about');
    const images2 = slider2.querySelectorAll('img');
    const prevButton2 = document.querySelector('.image-slider-about .prev');
    const nextButton2 = document.querySelector('.image-slider-about .next');

    let index2 = 0;
    const totalImages2 = images2.length;
    const intervalTime2 = 3000;
    let slideInterval2;

    function showSlide2(n) {
        index2 = (n + totalImages2) % totalImages2;
        slider2.style.transform = `translateX(-${index2 * 100}%)`;
    }

    function nextSlide2() {
        showSlide2(index2 + 1);
    }

    function prevSlide2() {
        showSlide2(index2 - 1);
    }

    function startSlideInterval2() {
        slideInterval2 = setInterval(nextSlide2, intervalTime2);
    }

    function stopSlideInterval2() {
        clearInterval(slideInterval2);
    }

    nextButton2.addEventListener('click', () => {
        nextSlide2();
        stopSlideInterval2();
        startSlideInterval2();
    });

    prevButton2.addEventListener('click', () => {
        prevSlide2();
        stopSlideInterval2();
        startSlideInterval2();
    });

    startSlideInterval2();
});

   // About us cuadros
   document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los cuadros del carrusel
    const slides = document.querySelectorAll('.carousel-track .course-info-about');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;
    let autoSlideInterval;

    // Muestra el primer cuadro al cargar la página
    slides[currentIndex].classList.add('active');

    function showSlide(index) {
        // Oculta todos los cuadros
        slides.forEach(slide => slide.classList.remove('active'));
        // Muestra el cuadro en el nuevo índice
        slides[index].classList.add('active');
        currentIndex = index;
    }

    function showNextSlide() {
        // Calcula el siguiente índice
        const nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
    }

    function showPrevSlide() {
        // Calcula el índice anterior
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }

    // Manejadores de eventos para los botones
    nextButton.addEventListener('click', () => {
        showNextSlide();
        resetAutoSlide();
    });

    prevButton.addEventListener('click', () => {
        showPrevSlide();
        resetAutoSlide();
    });

    // Función para iniciar el carrusel automático
    function startAutoSlide() {
        autoSlideInterval = setInterval(showNextSlide, 20000); // 20 segundos
    }

    // Función para reiniciar el carrusel automático
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Inicia el carrusel automático
    startAutoSlide();
});

//Script para cerrar el menú al hacer clic en un enlace -->

    document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            var navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
