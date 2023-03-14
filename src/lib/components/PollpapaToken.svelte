<script>
  import BuildingPartners from "./BuildingPartners.svelte";
import Features from "./Features.svelte";
  import Footer from "./Footer.svelte";
  import Subscribe from "./Subscribe.svelte";
import VoiceCount from "./VoiceCount.svelte";
import gsap from "gsap"
import ScrollSmoother from "$lib/script/gsap/ScrollSmoother";
  import { onMount } from "svelte";
  onMount(() => {
    gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
    scrollSmooth();
  });
  const scrollSmooth=()=>{
    let smoother = ScrollSmoother.create({
  smooth: 2,   
  effects: true
});
  }; 

</script>



<div class="max-w-full  space-y-10 rounded-b-[5rem] bg-black/70 pt-44">
    <div class="max-w-screen-xl mx-auto  rounded-[5rem] px-20 flex  justify-center items-center  bg-white ">
        <div class="w-full space-y-6 ">
          <h2 class="text-7xl font-bold text-black/80">
            Pollpapa Token
          </h2>
          <p class="font-semibold text-2xl text-black/50">
            Get rewarded for participating in our platform with the PollPapa Token and being a part of the community! We have serval fun ways to earn rewards and cash them in for tokens and other prizes!
          </p>
        </div>
        <div class="w-full flex justify-center relative bottom-20">
            <img
              src="https://pollpapa.com/wp-content/uploads/2023/01/pollpapa.wp2.cubdev.com-homepage-1.png"
              class="w-[32rem]"
              alt=""
            />
          </div>
    </div>

      <div>
        <VoiceCount/>
      </div>

      <div>
        <Features/>
      </div>

      <div>
        <Subscribe/>
      </div>
</div>

<div>
    <BuildingPartners/>
</div>

<!-- <div>
    <Footer/>
</div> -->