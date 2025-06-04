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
    // Уменьшаем количество кадров анимации на мобильных
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    const orbs = document.querySelectorAll(".orb");

    if (isMobile) {
      orbs.forEach((orb) => {
        const currentAnim = orb.style.animation;
        orb.style.animation = currentAnim.replace("15s", "20s");
      });

      // Отключаем анимацию при скролле для производительности
      let lastScrollY = 0;
      let ticking = false;

      window.addEventListener("scroll", function () {
        lastScrollY = window.scrollY;

        if (!ticking) {
          window.requestAnimationFrame(function () {
            orbs.forEach((orb) => {
              orb.style.animationPlayState = "paused";
            });
            ticking = false;
          });

          ticking = true;
        }

        // Возобновляем анимацию через 1 сек после остановки скролла
        clearTimeout(window.scrollTimeout);
        window.scrollTimeout = setTimeout(function () {
          orbs.forEach((orb) => {
            orb.style.animationPlayState = "running";
          });
        }, 1000);
      });
    }
  }); 
