window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Анимация при загрузке
document.addEventListener("DOMContentLoaded", function () {
  // Анимация элементов при прокрутке
  const animateElements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  animateElements.forEach((el) => {
    observer.observe(el);
  });

  // FAQ аккордеон
  const faqCards = document.querySelectorAll(".faq-card");

  faqCards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const rings = document.querySelectorAll('.ring');
    const container = document.querySelector('.rings-container');
    let isPaused = false;
    let isReversed = false;
    
    // Кнопка паузы
    document.getElementById('pauseBtn').addEventListener('click', function() {
        if (!isPaused) {
            rings.forEach(ring => {
                ring.style.animationPlayState = 'paused';
            });
            container.style.animationPlayState = 'paused';
            isPaused = true;
        } 
    })})
   

  const toggle = document.getElementById("billingToggle");
  const labels = document.querySelectorAll(".billing-label");
  const section = document.getElementById("pricing");

  toggle.addEventListener("click", () => {
    section.classList.toggle("toggle-yearly");
    const yearly = section.classList.contains("toggle-yearly");

    document.querySelectorAll(".price .monthly").forEach(el => {
      el.style.display = yearly ? "none" : "block";
    });
    document.querySelectorAll(".price .yearly").forEach(el => {
      el.style.display = yearly ? "block" : "none";
    });

    labels.forEach(label => label.classList.remove("active"));
    labels[yearly ? 1 : 0].classList.add("active");
  });

 document.addEventListener("DOMContentLoaded", function () {
    const orbs = document.querySelectorAll(".optimized-orb");
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    let angle = 0;
    let lastTime = 0;
    let speed = 0.3;
    let lastScrollY = window.scrollY;
    let scrollSpeed = 0;

    // Отключаем стандартные CSS-анимации
    orbs.forEach((orb) => {
      orb.style.animation = "none";
    });

    // Адаптивное вращение
    function animate(currentTime) {
      if (document.hidden) {
        requestAnimationFrame(animate);
        return;
      }

      if (!lastTime) lastTime = currentTime;
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      angle += speed * (deltaTime / 16);

      orbs.forEach((orb, index) => {
        const rotationSpeed = index === 1 ? -1 : 1;
        orb.style.transform = `translate(-50%, -50%) rotate(${
          angle * rotationSpeed * (0.5 + index * 0.3)
        }deg)`;
      });

      requestAnimationFrame(animate);
    }

    // Скролл-ускорение
    function updateSpeed() {
      if (document.hidden) {
        requestAnimationFrame(updateSpeed);
        return;
      }

      const baseSpeed = 0.3;
      const additionalSpeed = Math.min(scrollSpeed * 0.1, 2);
      speed = baseSpeed + additionalSpeed;

      scrollSpeed *= 0.9; // затухание
      if (scrollSpeed < 0.01) scrollSpeed = 0;

      requestAnimationFrame(updateSpeed);
    }

    // Обработка скролла
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;
      scrollSpeed = Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;
    });

    // Запуск
    requestAnimationFrame(animate);
    requestAnimationFrame(updateSpeed);
  });

    const form = document.getElementById('contact-form');
    const thankYou = document.getElementById('thank-you-message');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // предотвратить перезагрузку
  
      const formData = new FormData(form);
      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        form.style.display = 'none';
        thankYou.style.display = 'block';
      })
      .catch(error => {
        alert("Произошла ошибка. Попробуйте ещё раз.");
      });
    });


