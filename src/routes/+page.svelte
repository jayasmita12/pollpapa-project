<script>
  import Hero from "$lib/components/Hero.svelte";
  import gsap from "gsap";
  import { onMount } from "svelte";
  import WhoWeAre from "$lib/components/WhoWeAre.svelte";
  import Scroll from "$lib/components/Scroll.svelte";
  import PollpapaToken from "$lib/components/PollpapaToken.svelte";

  onMount(() => {
    cursorfunction();
  });
  const cursorfunction = () => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.2;
    const xSet = gsap.quickSetter(".ball", "x", "px");
    const ySet = gsap.quickSetter(".ball", "y", "px");

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) 
      pos.y += (mouse.y - pos.y) 
      xSet(pos.x);
      ySet(pos.y);
    });
  };
</script>

<main>
  <Hero />
  <WhoWeAre/>
  <Scroll/>
  <PollpapaToken/>
  <div class="ball w-4 h-4 fixed top-0 left-0 rounded-full bg-[#e6b294]" />
</main>

<style>
  .ball {
    pointer-events: none;
  }
</style>
