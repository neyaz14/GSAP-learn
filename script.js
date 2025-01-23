// gsap.to("#box", {
//     x: 500,
//     duration: 2,
//     delay: 1,
//     // rotate:360,
//     // scale:1.5
//     // *-- animation ke repeat kore-- -1 korle i-to-fianl-to-inial
//     repeat: -1,
//     // yPercent: 50,
//     // repeat hole ta initial-to-final-to-initial-to-final
//     yoyo: true

// })
// // from --> it works from the final postion to inital position 
// gsap.from("#box-2", {
//     x: 500,
//     y: 100,
//     duration: 2,
//     delay: 1,
//     backgroundColor: 'blue',
//     borderRadius: "50%"
// })

// gsap.from('h1', {
//     // scale:1.9,
//     opacity: 0,
//     duration: 2,
//     delay: 1,
//     y: 20,
//     stagger: -0.3
// })

// gsap.to("#box1", {
//     x: 750,
//     backgroundColor: "lightsalmon",
//     duration: 2,
//     delay: 1,
// })
// gsap.to("#box2", {
//     x: 750,
//     backgroundColor: "lightcyan",
//     duration: 2,
//     delay: 3,

// })
// gsap.to("#box3", {
//     x: 750,
//     backgroundColor: "lawngreen",
//     duration: 2,
//     delay: 5,

// })

// !--> gsap timeline
// var tl =gsap.timeline()
// tl.from('h2',{
//     y:-30,
//     opacity:0,
//     duration:1.2,
//     delay:.5
// })
// tl.from('h4',{
//     y:-30,
//     opacity:0,
//     duration:1.2,
//     // delay:.5
//     stagger:true
// })
// tl.from('h1',{
//     y:-30,
//     opacity:0,
//     duration:1,
//     scale:.2,
// })

// !-->  scrolltriger 
// ? -> jokhon scroll kora hobe tokhon animation hobe, 
// gsap.from("#page1 #box",{
//     scale:0,
//     duration:1.5,
//     delay:1,
//     rotate:360
// })
// gsap.from("#page2 h1",{
//     scale:0,
//     duration:1.3,
//     // delay:.8,
//     x:500,
//     // rotate:360,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 30%",
//         // scrub --> 
//         scrub:2

//     }
// })

//! --> pin to make side scrollign
// gsap.to('#page2 h1',{
//     transform:"translateX(-425%)",
//     scrollTrigger:{
//         //? pin use korle element er parrent ke trigger korte hobe 
//         trigger: "#page2",
//         scroller:"body",
//         markers:true,
//         start:"top 0%",
//         end:"top -150%",
//         scrub:4,pin:true
//     }
// })

// gsap.from("#page2 h2",{
//     scale:0,
//     duration:1.3,
//     // delay:.8,
//     x:-500,
//     // rotate:360,
//     scrollTrigger:{
//         trigger:"#page2 h2",
//         scroller:"body",
//         markers:true,
//         start:"top 30%",
//         scrub:true
//     }
// })


// gsap.from("#page3 #box",{
//     scale:0,
//     duration:1.5,
//     delay:1,
//     rotate:360
// })
var Path =`M 10 100 Q 500 100 990 100`;
var finalPath =`M 10 100 Q 500 100 990 100`;
var string =document.querySelector("#string");

// string.addEventListener("mouseenter",function(){
//     console.log("mouse entered")
// })
// string.addEventListener("mouseleave",function(){
//     console.log("mouse leave")
// })
string.addEventListener("mousemove",function(dets){
    Path=`M 10 100 Q ${dets.x} ${dets.y} 990 100`
    gsap.to("svg path",{
        // svg er under e thaka attribute ke change korte -- attr: (then oi attribute er jei value change korbo ta)
        attr:{
            d:Path,
            duration:0.3,
            ease:"power3.out"
        }
    })
})
string.addEventListener("mouseleave", function(){
    gsap.to("svg path",{
        attr:{d:finalPath,
            duration:1.5,
            ease: "bounce.out",
            // ease: "elastic.out(1,0.1)",
            y: -20}
    })
})