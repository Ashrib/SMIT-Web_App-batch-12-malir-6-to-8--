    

gsap.from('.box',{
    opacity: 0, 
    y: '-100%', 
    duration: 1.5,
    ease: "bounce",
    // scale: ;
  });

  gsap.to('.box',{
    x: '30%', 
    duration: 1.5,
    stagger:0.5,
});

gsap.fromTo('.box4',{
    x: '50%', 
    duration: 2,
    opacity:0,
    scale: 3,
},
{
    x: '5%', 
    duration: 1,
    delay:2,
    opacity:1,
    
  }
);

// gsap.to('.box', {
//     scrollTrigger: '.box', // start animation when ".box" enters the viewport
//     y: 500,
//     duration: 2,
// });


gsap.fromTo('.img',{
    opacity:0,
    
},{
     scale: 2,
    duration: 1.5,
    x: '50%',
    opacity:1,
});