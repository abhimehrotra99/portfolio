    (() => {
      const toggleButton = document.querySelector('.nav-mobile-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
      if (toggleButton && mobileMenu) {
        toggleButton.addEventListener('click', () => {
          const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
          toggleButton.setAttribute('aria-expanded', String(!isExpanded));
          mobileMenu.classList.toggle('is-open');
        });
        mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
          toggleButton.setAttribute('aria-expanded', 'false');
          mobileMenu.classList.remove('is-open');
        }));
      }

      const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
          }
        });
      }, { root: null, rootMargin: '0px', threshold: 0.15 });
      document.querySelectorAll('.reveal-item').forEach(element => observer.observe(element));

      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
          card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 150);
      });
    })();
