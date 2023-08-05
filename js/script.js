	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
            
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
           
        }
    }
//     gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });




// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

//    <-----------------gaso----------------->
    gsap.from(".a",
        {
            y:-100,
            duration: 1,
            opacity:0,
            stagger:.2
            
        }

    )
    // gsap.from(".home > .social",
    //     {
    //         // x:-500,
    //         duration: 1,
    //         opacity:0,
    //         // delay:1,
    //         stagger:3
            
    //     }

    // )
    gsap.from(".home-text,.home > .social",
        {
            x:-500,
            duration: 1,
            opacity:0,
            delay:1,
            
            
        }

    )
    gsap.from(".home-img",
        {
            x:400,
            duration: 1,
            opacity:0,
            delay:1,
            
            
        }
       
    )
   
    gsap.to(".btn",
    {
        y:10,
        repeat:-1,
        yoyo:true
        
    }

)
    gsap.from("#about > .heading ",{
    opacity:0,
    scale:.5,
    duration:1,
    scrollTrigger:{
        trigger:"#about > .heading",
        scroller:"body",
        // markers:true,
        start:"top 96%",
        end:"top 30%",
        scrub:true
    }

    }
    )
    gsap.from(".about-img ",{
        // x:-500,
        // y:200,
    opacity:0,
    scale:.5,
    duration:1,
    scrollTrigger:{
        trigger:".about-img",
        scroller:"body",
        // markers:true,
        start:"top 96%",
        end:"top 30%",
        scrub:true
    }

    }
    )
     gsap.from(".about-text ",{
        // x:500,
        // y:300,
    opacity:0,
    scale:.5,
    duration:1,
    scrollTrigger:{
        trigger:".about-img",
        scroller:"body",
        // markers:true,
        start:"top 96%",
        end:"top 30%",
        scrub:true
    }

    }
    )
     gsap.from(".skills > .heading ",{
        // x:500,
        // y:300,
    opacity:0,
    scale:.8,
    duration:1,
    scrollTrigger:{
        trigger:".skills > .heading",
        scroller:"body",
        // markers:true,
        start:"top 96%",
        end:"top 30%",
        scrub:true
    }

    }
    )
    gsap.from(".bars-box ",{
        //  x:500,
        // y:300,
    opacity:0,
    scale:.5,
    duration:1,
    stagger:.5,
    scrollTrigger:{
        trigger:".bars-box",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 20%",
        scrub:true
    }

    }
    )
    gsap.from(".skills-img ",{
        // x:500,
       // y:300,
   opacity:0,
   scale:.6,
   duration:1,
   stagger:.5,
   scrollTrigger:{
       trigger:".skills-img",
       scroller:"body",
    //    markers:true,
       start:"top 90%",
       end:"top 30%",
       scrub:true
   }

   }
   )
   gsap.from(".services > .heading ",{
    // x:500,
    // y:300,
opacity:0,
scale:.8,
duration:1,
scrollTrigger:{
    trigger:".services > .heading",
    scroller:"body",
    // markers:true,
    start:"top 96%",
    end:"top 30%",
    scrub:true
}

}
)
gsap.from(".services-box ",{
    // x:500,
    // y:300,
opacity:0,
scale:.5,
duration:1,
stagger:.5,
scrollTrigger:{
    trigger:".services-box",
    scroller:"body",
    // markers:true,
    start:"top 96%",
    end:"top 60%",
    scrub:true
}

}
)
gsap.from(".youtube > .heading ",{
    // x:500,
    // y:300,
opacity:0,
scale:.8,
duration:1,
scrollTrigger:{
    trigger:".youtube > .heading",
    scroller:"body",
    // markers:true,
    start:"top 96%",
    end:"top 30%",
    scrub:true
}

}
)
gsap.from(".yt-thumbnail ",{
    // x:500,
    // y:300,
opacity:0,
scale:.5,
duration:1,
stagger:.5,
scrollTrigger:{
    trigger:".yt-thumbnail",
    scroller:"body",
    // markers:true,
    start:"top 96%",
    end:"top 60%",
    scrub:true
}

}
)
gsap.from(".contact > .heading ",{
    // x:500,
    // y:300,
opacity:0,
scale:.8,
duration:1,
scrollTrigger:{
    trigger:".contact > .heading",
    scroller:"body",
    // markers:true,
    start:"top 96%",
    end:"top 30%",
    scrub:true
}

}
)
gsap.from(".contact-form ",{
    // x:500,
    // y:300,
opacity:0,
scale:.5,
duration:1,
stagger:.5,
scrollTrigger:{
    trigger:".contact-form",
    scroller:"body",
    // markers:true,
    start:"top 96%",
    end:"top 60%",
    scrub:true
}

}
)
gsap.from(".footer ",{
    // x:500,
    // y:300,
opacity:0,
scale:.5,
duration:1,
stagger:.5,
scrollTrigger:{
    trigger:".footer",
    scroller:"body",
    // markers:true,
    start:"top 96%",
    end:"top 90%",
    scrub:true
}

}
)