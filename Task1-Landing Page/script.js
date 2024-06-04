const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


const tl2 = gsap.timeline({scrollTrigger : {
    trigger : ".part2",
    start : '0% 70%',
    end : '100% 50%',
    scrub : true,
    // markers : true,
}});

tl2.to(".rounded-div-wrap", {
    height : 0,
    marginTop : 0,
})
tl2.to("nav", {
    backgroundColor : "rgba(0, 0, 0, 0.594)",
    opacity : 1,
    color : "white",
}, "a")



const tl4 = gsap.timeline({scrollTrigger : {
    trigger : ".part4 .p4b",
    start : '30% 50%',
    end : '80% 50%',
}});

tl4.from(".cont", {
    opacity : 0,
    scale : 0,
    duration : 0.5,
    ease : "ease-in",
})

let mm = gsap.matchMedia();

mm.add("(min-width: 501px)", () => {
    const tl = gsap.timeline({scrollTrigger : {
        trigger : ".part1",
        start : '50% 50%',
        end : '250% 50%',
        pin : true,
        scrub : true,
        // markers : true,
    }});
    
    tl.to(".rotate-div", {
        rotate : -15,
    }, "a")
    tl.to("nav", {
        backgroundColor : "transparent",
        color : "white",
    }, "a")
    tl.to(".img-div img", {
        scale : 0.95,
        borderRadius : "30px",
    }, "a")
    tl.to("#r1", {
       marginTop : "-45%",
    }, "a")
    tl.to("#r2", {
       marginTop : "-40%",
    }, "a")
    tl.to("#r3", {
       marginTop : "-30%",
    }, "a")
    tl.to("#r4", {
       marginTop : "-40%",
    }, "a")
    tl.to("#r5", {
       marginTop : "-45%",
    }, "a")
    
    tl.to(".content-div",{
        opacity : 1,
        delay : 0.2,
        ease : "ease-in-out"
    }, "a")
    tl.to(".content-div h1",{
        scale : 1,
        delay : 0.4,
    }, "a")
    tl.to(".content-div h1",{
        fontStyle : "italic",
        delay : 0.4,
        ease : "ease-in"
    }, "a")
    const tl3 = gsap.timeline({scrollTrigger : {
        trigger : ".part3",
        start : '50% 50%',
        end : '100% 50%',
        scrub : true,
        // markers : true,
    }});
    
    tl3.to(".img-box", {
        x : "-60vw",   
    })
});

mm.add("(max-width: 500px)", () => {
    const tl = gsap.timeline({scrollTrigger : {
        trigger : ".part1",
        start : '50% 50%',
        end : '150% 50%',
        pin : true,
        scrub : true,
        // markers : true,
    }});
    
    tl.to(".rotate-div", {
        rotate : -15,
    }, "a")
    tl.to("nav", {
        backgroundColor : "transparent",
        color : "white",
    }, "a")
    tl.to(".img-div img", {
        scale : 0.95,
        borderRadius : "30px",
    }, "a")
    tl.to("#r1", {
       marginTop : "-45%",
    }, "a")
    tl.to("#r2", {
       marginTop : "-40%",
    }, "a")
    tl.to("#r3", {
       marginTop : "-30%",
    }, "a")
    tl.to("#r4", {
       marginTop : "-40%",
    }, "a")
    tl.to("#r5", {
       marginTop : "-45%",
    }, "a")
    
    tl.to(".content-div",{
        opacity : 1,
        delay : 0.2,
        ease : "ease-in-out"
    }, "a")
    tl.to(".content-div h1",{
        scale : 1.5,
        delay : 0.4,
    }, "a")
    tl.to(".content-div h1",{
        fontStyle : "italic",
        delay : 0.4,
        ease : "ease-in"
    }, "a")
    const tl3 = gsap.timeline({scrollTrigger : {
        trigger : ".part3",
        start : '35% 50%',
        end : '85% 50%',
        scrub : true,
        // pin:true,
        // markers : true,
    }});
    
    tl3.to(".img-box", {
        x : "-200vw",   
    })
});