$(function () {
    const hamButton = document.getElementById('hamButton');
    const hammenu = document.getElementById('hammenu');
    // artist 
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
        },
        effect: "coverflow",
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        initialSlide: 2,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                centeredSlides: true,
                coverflowEffect: {
                    rotate: 0,
                    depth: 100,
                },
            },
        },
    });
    // 使用 imagesLoaded 確保圖片加載完成後再初始化 Masonry
    var grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
    });
    // 渲染完畢後隱藏，避免跑版
    grid.imagesLoaded().progress(function () {
        grid.masonry('layout');
        setTimeout(() => {
            $('#others').addClass('hidden');
        }, 10)
    })
    // 藝術家分頁TAB
    $('.nav-link').on('click', function () {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        //獲取當前目標的data-target
        const targetId = $(this).data('target');
        //比對後切換目標
        $('.content').each(function () {
            $(this).toggleClass('hidden', $(this).attr('id') !== targetId);
        });
    });
    // 漢堡選單
    hamButton.addEventListener('click', () => {
        hammenu.classList.toggle('opacity-0');
        hammenu.classList.toggle('opacity-100');
        hammenu.classList.toggle('max-h-0');
        hammenu.classList.toggle('max-h-40');
    });
})