$(function() {
    console.log('ok');
    // artist 
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        initialSlide: 2,
        coverflowEffect: {
            rotate: 0, 
            stretch: 0,
            depth: 0,
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
                    rotate: 40,
                    depth: 200,
                },
            },
        },
    });
    // masonry卡片
    $('.grid').masonry({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.grid-item',
        // use element for option
        columnWidth: '.grid-sizer',
        percentPosition: true,
    });
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
    })
})