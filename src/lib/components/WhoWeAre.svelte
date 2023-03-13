<script>
    import gsap from "gsap"
    import ScrollTrigger from "$lib/script/gsap/ScrollTrigger";
    import SplitText from "$lib/script/gsap/SplitText";
    import { onMount } from "svelte";
    onMount(()=>{
        gsap.registerPlugin(ScrollTrigger,SplitText)
        scroll()
    })
    const scroll=()=>{
        const quotes = document.querySelectorAll(".para");
  	quotes.forEach(quote => {
    // Reset if needed
    if(quote.anim) {
      quote.anim.progress(1).kill();
      quote.split.revert();
    }
    quote.split = new SplitText(quote, { 
      type: "lines,words,chars",
      linesClass: "split-line"
    });
    // Set up the anim
    quote.anim = gsap.from(quote.split.words, {
      scrollTrigger: {
        trigger: quote, 
        toggleActions: "play pause reverse reset",
        start: "top 80%",
      },
			opacity: 0.15,
			ease: 'none',
			stagger: 0.2
    });
  });



  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".fake-man",
      scrub: 0.5,
      pin: true,
      scale:-1.5,
      start: "top top",
      end: "+=100%",
      duration:1,
      toggleActions: "play pause reverse reset",
    } 
  })
  tl.to(".fake-man",{
    scale:0.6,
    delay:0.1,
    pin:true
  })

  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".original-man",
      scrub: 0.5,
      pin: ".fake-man",
      scale:0.5,
      start: "bottom bottom",
      end: "+=100%",
      duration:1,
      toggleActions: "play pause reverse reset",
    } 
  })
  tl3.from(".original-man",{
    scale:0.5,
    pin:true
  })
  



  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".opinion",
      pin: true,
      scrub:0.5,
      scale:-1.5,
      start: "top top",
      end : "+=100%",
      toggleActions: "play pause reverse reset",
    } 
  })
  tl2.to(".opinion",{
    scale:3,
    opacity:1,
    delay:0.2,
    backgroundColor:"#f0d1af",
    pin:true
  })




const animateLines = new SplitText(".inner-text", {type: "lines"});
gsap.set(animateLines.lines, {opacity: 0});

ScrollTrigger.batch(animateLines.lines, {
  onEnter: batch => {
    gsap.set(batch, {opacity: 1, yPercent: 100});
    gsap.to(batch, {
      yPercent: 0,
      duration: 0.5,
      stagger: 2.4
    });
  },
  onLeaveBack: batch => gsap.to(batch, {opacity: 0, yPercent: 100}),
  start: "top 60%",
});
        
}
</script>


<section class="section max-w-full relative flex-col  rounded-t-[1000px] mx-auto flex justify-center items-center bg-transparent">       
        <div class="paradiv  w-[50rem] text-center relative z-20 -bottom-[26rem]  space-y-20 ">
            <h2 class=" font-outline-2 text-[14rem] relative z-20 text-center font-bold text-[#f0d1af;]" style="line-height: 0.8;">Who we Are</h2>
            <p class="para text-4xl relative z-20 font-bold text-white px-32">PollPapa is a social media polling platform that was created to promotes freedom of speech and expression,and to let people vote on important social,pollitical,environmental, other issues.</p>
        </div>
        <div class="w-full flex justify-center relative top-0  fake-man ">
            <img src="https://pollpapa.com/wp-content/themes/pollpapa/assets/img/home/advanced/1.svg" class="w-[100rem] img" alt="">
        </div>
        <div class="w-full flex justify-center relative -top-32  original-man ">
            <img src="https://pollpapa.com/wp-content/themes/pollpapa/assets/img/home/advanced/7@2x.webp"  alt="">
        </div>
    </section>
    <div class="opinion  flex-col h-[100vh] max-w-full bg-black/70 mx-auto flex justify-center items-center">
        <div class="max-w-[60%] text-center opinion-text">
            <h1 class="text-[11rem] font-thin uppercase text-[#f0d1af]" style="line-height: 0.9;">Your Opinion matters</h1>
        </div>
    </div>
    <div class="inner-div  h-screen  max-w-[55rem] mx-[20%] flex justify-center items-center absolute z-20 overflow-hidden">
        <div class="w-full h-full flex justify-center items-center">
            <h2 class="inner-text text-8xl font-bold text-black/70">Stop guessing what people want. Just ask them.</h2>
        </div>
    </div>