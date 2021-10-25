<template>
  <div>
    <div class="relative py-[190px]">
      <!-- Connect Wrapper  -->
        <div class="container">
          <!-- our-story-content -->
          <div class="our-story-content">
            <!-- story-slider-wrapper -->
            <div class="story-slider-wrapper">
              <!-- story-slider-item -->
              <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange" :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }">
                <swiper-slide>
                  <div class="flex">
                    <img src="../assets/images/story-image.jpg" class="w-1/3 max-w-full mr-8" alt="">
                    <div>
                      <h3 class="text-8xl mb-8 font-primary-regular">Our Story</h3>
                      <p class="text-3xl leading-10 font-primary-medium tracking-wider">In publishing and graphic design, Lorem ipsum is a <br/> placeholder text commonly used to demonstrate the visual.</p>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="flex">
                    <img src="../assets/images/story-image.jpg" class="w-1/3 max-w-full mr-8" alt="">
                    <div>
                      <h3 class="text-8xl mb-8 font-primary-regular">Our Story 2</h3>
                      <p class="text-3xl leading-10 font-primary-medium tracking-wider">In publishing and graphic design, Lorem ipsum is a <br/> placeholder text commonly used to demonstrate the visual.</p>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="flex">
                    <img src="../assets/images/story-image.jpg" class="w-1/3 max-w-full mr-8" alt="">
                    <div>
                      <h3 class="text-8xl mb-8 font-primary-regular">Our Story 3 </h3>
                      <p class="text-3xl leading-10 font-primary-medium tracking-wider">In publishing and graphic design, Lorem ipsum is a <br/> placeholder text commonly used to demonstrate the visual.</p>
                    </div>
                  </div>
                </swiper-slide>
                <ul class="m-0 flex justify-end mt-9">
                  <li>
                    <button type="button" class="w-10 h-10 flex items-center justify-center border text-gray-600 border-gray-600 mr-2 swiper-button-prev">
                      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button> 
                  </li>
                  <li>
                    <button type="button" class="w-10 h-10 flex items-center justify-center border text-gray-600 border-gray-600 swiper-button-next">
                      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                  </li>
                </ul>
              </swiper>
            </div>
            <!-- story-slider-arrow -->
            
            <!-- slider-controller -->
            <div class="h-6 w-full bg-gray-200 rounded-3xl mt-24 flex justify-between relative z-0">
              <div class="absolute rounded-3xl left-0 top-0 h-6 z-[-1] bg-indigo-400 w-[15.5%]"></div>
              <div class="h-6 w-6 rounded-full bg-indigo-400 relative">
                <div class="tooltip rotate-[-90deg] absolute bottom-12 -left-2">2002</div>
              </div>
              <div class="h-6 w-6 rounded-full bg-gray-400 relative">
                <div class="tooltip rotate-[-90deg] absolute bottom-12 -left-2">2002</div>
              </div>
              <div class="h-6 w-6 rounded-full bg-gray-400 relative">
                <div class="tooltip rotate-[-90deg] absolute bottom-12 -left-2">2002</div>
              </div>
              <div class="h-6 w-6 rounded-full bg-gray-400 relative">
                <div class="tooltip rotate-[-90deg] absolute bottom-12 -left-2">2002</div>
              </div>
              <div class="h-6 w-6 rounded-full bg-gray-400 relative">
                <div class="tooltip rotate-[-90deg] absolute bottom-12 -left-2">2002</div>
              </div>
              <div class="h-6 w-6 rounded-full bg-gray-400 relative">
                <div class="tooltip rotate-[-90deg] absolute bottom-12 -left-2">2002</div>
              </div>
              <div class="h-6 w-6 rounded-full bg-gray-400 relative">
                <div class="tooltip rotate-[-90deg] absolute bottom-12 -left-2">2002</div>
              </div>
              <div class="h-6 w-6 rounded-full bg-gray-400 relative">
                <div class="tooltip rotate-[-90deg] absolute bottom-12 -left-2">2002</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  // import { Navigation } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';

  import SwiperCore, { Navigation } from "swiper";
  SwiperCore.use([Navigation]);

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };

      const onSlideChange = () => {
        console.log('slide change');
      };

      return {
        onSwiper,
        onSlideChange
      };
    },
  };
</script>

<style>

</style>
