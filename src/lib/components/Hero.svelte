<script>
  import Nav from "./Nav.svelte";
  import gsap from "gsap"
  import ScrollTrigger from "$lib/script/gsap/ScrollTrigger";
  import ScrollSmoother from "$lib/script/gsap/ScrollSmoother";

  import { onMount } from "svelte";
  onMount(()=>{
    gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
    scroll()
  })
  const scroll=()=>{
    let tl =  gsap.timeline({   
    
    scrollTrigger: {
      trigger: ".hero",
      scrub: 0.5,
      pin: true,
      scale:-0.5,
      start: "top top",
      end: "+=100%",
      duration:1,
      toggleActions: "play pause reverse reset",
    } 
  })
  tl.to(".hero",{
    scale:0.3,
    delay:0.1,
    borderRadius:150,
    backgrounColor:"#000",
    padding:30,
    pin:true
  })
 
let tl2 =  gsap.timeline()

  tl2.from(".likeright",{
    xPercent:100,
    
  })
  .from(".likeleft",{
    xPercent:-100,
    
  })
    ScrollTrigger.create({
      animation: tl2,
      trigger:".swipe",
      scrub: 0.5,
      pin: true,
      toggleActions: "play pause reverse reset",
    })
  

 
  }

</script>

<div>
    <section class="max-w-full bg-black/70   relative">
        <video src="https://pollpapa.com/wp-content/themes/pollpapa/assets/video/home/hero/1.mp4?1" type="video/mp4" autoplay loop muted playsinline class="hero w-full" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px);"></video>
        <Nav/>
        <div>
          <div class="swipe  bg-black  flex flex-col overflow-hidden">
            <div>
              <div class="likeright text-[20rem] w-full  self-end font-bold text-white/30">Like</div>
              <div class="likeleft text-[20rem] w-full flex justify-end   font-bold text-white/30">Like</div>
            </div>
            
          </div>
        </div>
    </section>
</div>
