<script>
  import gsap from "gsap";
  import ScrollTrigger from "$lib/script/gsap/ScrollTrigger";
  import { onMount } from "svelte";
  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    scroll();
  });
  const scroll = () => {
    let sections = gsap.utils.toArray(".slide");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".slide",
        pin: ".main",
        pinSpacing: true,
        scrub: 1,
        end: "+=3000",
      },
    });
  };
</script>

<div
  class="main relative pl-20 pr-56 bg-[#f0d1af]  overflow-x-hidden  flex space-x-10    h-[100vh] max-w-full  right-0"
>
  {#each Array(4) as _}
    <div
      class="slide w-full    h-full flex-shrink-0   flex flex-nowrap  self-end  justify-center items-center"
    >
      <div
        class=" w-full h-[90%] space-x-10 rounded-[5rem] px-20 flex  justify-center items-center  bg-white "
      >
        <div class="w-[50%]">
          <img
            src="https://pollpapa.com/wp-content/uploads/2023/01/pollpapa.wp2.cubdev.com-homepage-1-1.jpeg"
            class="w-full h-full rounded-t-full rounded-r-full rounded-bl-3xl"
            alt=""
          />
        </div>
        <div class="w-[70%] space-y-6">
          <h2 class="text-7xl font-bold text-black/80">
            Blockchain-driven results.
          </h2>
          <p class="font-semibold text-2xl text-black/50">
            With today's media propaganda, finding honest opinions and
            information is nearly impossible. Poll results are often skewed, and
            information tends to be gathered through manipulation and biased
            platforms. Our polls are user-generated, recorded on the blockchain,
            so it is fully transparent, uncensored, and decentralized.
          </p>
        </div>
      </div>
    </div>
  {/each}
</div>
