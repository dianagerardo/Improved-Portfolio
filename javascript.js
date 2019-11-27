window.onload = function () {
    var logo = $("#logo");
    var bar = $("#bar");
    TweenLite.to(bar, 2, { width: "100%" });
    TweenLite.to(logo, 2, { left: "95.5%", delay: 1 });

    gsap.from(".box", {
        duration: 2,
        scale: 0.5,
        opacity: 0,
        delay: 0.5,
        stagger: 0.2,
        ease: "elastic",
        force3D: true
    });

    document.querySelectorAll(".box").forEach(function (box) {
        box.addEventListener("click", function () {
            gsap.to(".box", {
                duration: 0.5,
                opacity: 0,
                y: -100,
                stagger: 0.1,
                ease: "back.in"
            });
        });
    });

    // Transition example 2

    const $button = $(".arrow");

    const $about = $(".transition-about");
    const $portfolio = $(".transition-portfolio")



    let transition = function () {
        TweenLite.fromTo($about, 2.2, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', ease: Power4.easeInOut })
        TweenLite.fromTo($portfolio, 2.2, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', ease: Power4.easeInOut }, .2)
        TweenLite.fromTo($about, 1.6, { xPercent: -100, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, ease: Power4.easeInOut }, .7)
        TweenLite.set($about, { scaleX: 0 })
        TweenLite.set($portfolio, { autoAlpha: 0 })
        TweenLite.to($about, 2.2, { scaleX: 0, transformOrigin: 'right', ease: Power4.easeInOut })
        TweenLite.to($about, .2, { autoAlpha: 0 }, '-=1.2')
}




$button.on('click', () => {
    transition(0);
});  

    
    
    
}


