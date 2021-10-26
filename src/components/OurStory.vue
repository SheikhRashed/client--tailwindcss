<template>
  <div>
    <div class="relative py-16 lg:py-[190px]">
      <!-- Connect Wrapper  -->
        <div class="container">
          <!-- our-story-content -->
          <div class="our-story-content">
            <!-- story-slider-wrapper -->
            <div class="story-slider-wrapper">
              <!-- story-slider-item -->
                <!-- type: "progressbar", -->

                <!-- renderCustom: function (swiper, current, total) {
                  var customPaginationHtml = `<span class="swiper-pagination-customs">${current}, ${total}</span>`;
                  return customPaginationHtml;
                } -->
                <swiper :slides-per-view="1" :pagination='{ 
                  el: ".pagination-progress",
                  clickable: true,
                  renderBullet: function (index, className) {
                    return `<div class="pagination-dot ${className}"><div class="pagination-dot-tooltip">2002-${index}</div></div>`;
                  },
                }' :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange" :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }">
                  <swiper-slide v-for="slide in slides" :key="slide">
                    <div class="flex flex-wrap md:flex-nowrap">
                      <img src="../assets/images/story-image.jpg" class="max-w-full mr-0 md:mr-8 md:w-1/3 w-full" alt="">
                      <div class="w-full md:w-auto">
                        <h3 class="text-8xl mb-8 font-primary-regular">Our Story</h3>
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
                  
                  <!-- slider-controller -->
                  <div id="current"></div>
                  <div class="h-6 w-full bg-gray-200 rounded-3xl mt-24 relative z-0">
                    <div class="pagination-progress-fill" :style="{ width: 'calc('+progress+'%'  }"></div>
                    <div class="flex justify-between pagination-progress">
                      <div class="pagination-dot">
                        <div class="pagination-dot-tooltip">2002</div>
                      </div>
                    </div>
                  </div>
                </swiper>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue';
  // import { Navigation } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import "swiper/css/pagination"

  import SwiperCore, { Navigation, Pagination } from "swiper";
  SwiperCore.use([Navigation, Pagination]);

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      let progress = ref(0)
      let dotsWidth = ref(0)
      let slides = ref([1,2,3,4,5,6,7])

      const onSwiper = (swiper) => {
        console.log(swiper);
      };

      const onSlideChange = (swiper) => {
        let total = swiper.slides.length -1;
        let current = swiper.activeIndex
        // remove total dots width
        dotsWidth.value = (current * 24);

        progress.value = (current / total) * 100;
        console.log('calc('+progress+'%' +'- 100px')
      };

      return {
        onSwiper,
        onSlideChange,
        progress,
        dotsWidth,
        slides
      };
    },
  };
</script>

<style>

</style>
