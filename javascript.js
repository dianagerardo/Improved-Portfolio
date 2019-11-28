window.onload = function () {

    var logo = $("#logo");
    var bar = $("#bar");
    function smalllogo() {
        TweenLite.to(bar, 2, { width: "100%" });
        TweenLite.to(logo, 2, { left: "90%", delay: 1 });
    }

    function bigScreenLogo() {
        TweenLite.to(bar, 2, { width: "100%" });
        TweenLite.to(logo, 2, { left: "95.5%", delay: 1 });
    }
    function screenSize() {
        var w = parseInt(window.innerWidth);
        console.log(window.innerWidth)

        if (w <= 500) {
            //max-width 500px
            // actions here...
            smalllogo();
        } else {
            //max-width 850px
            // actions here...
            bigScreenLogo();
        }
    }

    screenSize();

    $(window).resize(function () {
        screenSize();
    });


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
            console.log("clicked")
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

    const $buttonLeft = $(".arrow-left");
    const $buttonRight = $(".arrow-right");

    const $about = $(".transition-about");
    const $portfolio = $(".transition-portfolio");
    const $link = $(".link")

    $link.on('click', () => {
        var textnode = document.createTextNode("Water");
        var link = document.getElementById("trivia").childNodes;
        link.replaceChild(textnode, link.childNodes)
    })




    let transitionLeft = function () {
        TweenLite.fromTo($portfolio, { opacity: 0 }, { opacity: 0 })
        TweenLite.fromTo($about, { opacity: 0 }, { opacity: 1 }, 2.2, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', ease: Power4.easeInOut })
    };

    let transitionRight = function () {
        TweenLite.fromTo($about, { opacity: 1 }, { opacity: 0 })
        TweenLite.fromTo($portfolio, { opacity: 0 }, { opacity: 1 })
    }

    $buttonLeft.on('click', () => {
        transitionLeft();
    });
    $buttonRight.on('click', () => {
        transitionRight();
    });

    // 
  
};




