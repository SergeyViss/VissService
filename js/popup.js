jQuery(function($){
    $('.btn1 .button').on('click', function(){
        $('.popup').addClass('active');
        const block = $('.btn');
    console.log(block);
});
$('.btn1 .close').on('click', function(){
    $('.popup').removeClass('active');
    const block = $('.btn');
    console.log(block);
});
});
jQuery(function($){
    $('.footer-middle .button1').on('click', function(){
        $('.popup-call').addClass('active');
            const block = $('.btn');
        console.log(block);
    });
    $('.footer-middle .close').on('click', function(){
        $('.popup-call').removeClass('active');
        const block = $('.btn');
        console.log(block);
    });
});

jQuery(function($){
    $('.cnopka .button').on('click', function(){
        $('.popup-lk').addClass('active');
            const block = $('.btn');
        console.log(block);
    });
    $('.cnopka .close').on('click', function(){
        $('.popup-lk').removeClass('active');
        const block = $('.btn');
        console.log(block);
    });
});

jQuery(function($){
    $('.nav .nav-item_services').on('click', function(){
        $('.popup-services').addClass('active');
            const block = $('.btn');
        console.log(block);
    });
    $('.nav .close').on('click', function(){
        $('.popup-services').removeClass('active');
        const block = $('.btn');
        console.log(block);
    });
});

jQuery(function($){
    $('.application .application-btn').on('click', function(){
        $('.popup-call').addClass('active');
            const block = $('.btn');
        console.log(block);
    });
    $('.footer-middle .close').on('click', function(){
        $('.popup-call').removeClass('active');
        const block = $('.btn');
        console.log(block);
    });
});

jQuery(function($){
    $('.footer .lk-info').on('click', function(){
        $('.popup-lk').addClass('active');
            const block = $('.btn');
        console.log(block);
    });
    $('.cnopka .close').on('click', function(){
        $('.popup-lk').removeClass('active');
        const block = $('.btn');
        console.log(block);
    });
});