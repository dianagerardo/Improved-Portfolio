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

    const $img2 = document.querySelector('.image2');
    const $logo = document.querySelector('.transition__logo');
    const $frameBlack = document.querySelector('.page-transition__black');
    const $frameRed = document.querySelector('.page-transition__red');
    const $button = document.querySelector('#button');

   
    
    let tltransition = new TimelineMax({paused:true})
      .fromTo($frameRed , 2.2, {scaleX: 0},{scaleX: 1, transformOrigin:'left', ease: Power4.easeInOut},)
      .fromTo($frameBlack , 2.2, {scaleX: 0},{scaleX: 1, transformOrigin:'left', ease: Power4.easeInOut},.2)
      .fromTo($logo , 1.6, {xPercent: -100, autoAlpha:0 },{xPercent: 0, autoAlpha:1, ease: Power4.easeInOut},.7)
      .set($frameRed, {scaleX:0})
      .set($img2, {autoAlpha:0})
      .to($frameBlack , 2.2, {scaleX: 0, transformOrigin:'right', ease: Power4.easeInOut})
      .to($logo , .2, {autoAlpha:0 },'-=1.2')
      
    
    
    $button.addEventListener('click', () => {
      tltransition.play(0);
    });  

    
    
    
}


