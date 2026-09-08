    let lastScrollTop = 0;
    const header = document.getElementById('main-header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            header.classList.add('hide');
        } else {
            header.classList.remove('hide');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Safari
    });

    /* Swiper */

    var swiper = new Swiper('.mySwiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });

    /* Modal */
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const close = document.querySelector(".close");

    document.querySelectorAll(".image-popup").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const image = this.querySelector("img");

            modalImage.src = image.src;
            modalImage.alt = image.alt;

            modal.style.display = "flex";

            document.body.style.overflow = "hidden";
        });
    });

    close.addEventListener("click", function() {
        modal.style.display = "none";

        document.body.style.overflow = "";
    });

    modal.addEventListener("click", function(e) {
        if (e.target === modal) {
            modal.style.display = "none";

            document.body.style.overflow = "";
        }
    });