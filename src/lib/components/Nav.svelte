<script>
    import Hero from "$lib/components/Hero.svelte";
  import gsap from "gsap";
  import { onMount } from "svelte";

  onMount(() => {
    cursorfunction();
  });
  const cursorfunction = () => {
    gsap.set(".text", { xPercent: -50, yPercent: -50 });

    const btn = document.querySelector(".btn")
    const pos = { x: btn.innerWidth / 2, y: btn.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.2;
    const xSet = gsap.quickSetter(".text", "x", "px");
    const ySet = gsap.quickSetter(".text", "y", "px");

    btn.addEventListener("mousemove", (e) => {
        console.log(e)
      mouse.x = e.x;
      mouse.y = e.y;
    });

    gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
    //   const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) 
      pos.y += (mouse.y - pos.y) 
      xSet(pos.x);
      ySet(pos.y);
    });
  };
</script>

<nav class="absolute  top-12 w-full  mx-auto px-[4.5rem]">
    <div class="flex justify-between">   
        <div>
            <a href="https://pollpapa.com" class="self-center " aria-label="Home">
                <img src="https://pollpapa.com/wp-content/themes/pollpapa/assets/img/logo.svg" class="w-[10rem] h-full" alt="">
            </a>
        </div>
        <div>
            <ul class="flex space-x-14">
                <a href="/" class="navlink" ><li >About</li></a>
                <a href="/" class="navlink" ><li >Blog</li></a>
                <a href="/" class="navlink" ><li >ContactUs</li></a>
                <a href="/" class="navlink" ><li >WhitePaper</li></a>
                <button class="btn bg-[#e6b294] text-black rounded-full text-xl font-bold px-14 py-5 hover:bg-[#ffd49c]">
                    <i class="text not-italic">Sign In</i>
                </button>
            </ul>
        </div>
    </div>

    <div class=" flex flex-col mt-32 justify-center items-center w-full ">
        <div class="text-center  max-w-[45rem]  space-y-8">
            <p class="text-xl font-semibold text-white/60">WE ARE POLLPAPA</p>
            <h1 class="font-semibold text-[7rem]   text-white" style="line-height: 0.9;">Where the world votes</h1>
            <button class=" bg-[#e6b294]  text-black rounded-full text-xl font-semibold px-14 py-5">Subscribe</button>
        </div>
    </div>
    </nav>