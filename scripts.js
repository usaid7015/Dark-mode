let toggle = document.getElementById('mode');

toggle.addEventListener('click',() =>{
    document.body.classList.toggle('dark')
});

$('.product').owlCarousel({
    loop:true,
    margin:50,
    nav: false,
    autoplay: true,
    stagePadding: 20,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
})

