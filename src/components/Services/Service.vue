<template lang="">
    <div class="relative py-2 lg:py-16 lg:py-24">
        <div class="container ">
        <!-- Service Wrapper Start  -->
            <div class="flex flex-col  xl:flex-row items-center" >
            <!-- left start  -->
            <div class=" mb-20 lg:mb-0  xl:mr-12 " >
                <!-- Service Info start  -->
                <h6 class="text-2xl lg:text-[60px] leading-none lg:leading-normal font-secondary-regular lowercase ">You need transparency</h6>
                <h2 class=" text-4xl lg:text-[80px] leading-normal mb-3 font-primary-regular uppercase  ">We've got you covered</h2>
                <p class="font-secondary-regular text-lg lg:text-[26px] leading-none lg:leading-normal capitalize mb-8 lg:mb-8 " >in publishing and grapich design, lorem ipsum is a placeholder text commonly used to demonstrate</p>
                <!-- Service Info End  -->

                <!-- Accordion start  -->
                <div>
                    <!-- Accordion Pannel Start  -->
                    <div class="relative overflow-hidden" v-for="item in accordionList" :key="item.id">
                        <!-- Accordion Header Start  -->
                        <div class="flex items-center justify-between py-6 lg:py-10 pr-6 border-t border-b cursor-pointer" @click.prevent="toggleAccordion(item.id)">
                            <!-- Accordion Title  -->
                            <h6 class=" text-xl leading-normal md:text-[38px] md:leading-none text-primary uppercase font-primary-regular ">{{ item.title }} </h6>
                            <!-- Accordion Icon  -->
                            <div class="text-primary text-2xl">
                              <svg v-if="activeAccordion == item.id" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="18 15 12 9 6 15"></polyline></svg>
                              <svg v-else viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </div>
                        </div>
                        <!-- Accordion Header End  -->
                        <!-- Accordion Body Start  -->
                        <div class="pb-12 border-b" :class="activeAccordion == item.id ? 'block' : 'hidden'">
                            <!-- body content  -->
                            <p class=" text-lg md:text-[24px] leading-normal capitalize mt-4 font-secondary-regular ">
                              {{ item.details }}
                            </p>
                        </div>
                        <!-- Accordion Body End  -->
                    </div>
                </div>
                <!-- Accordion end  -->
            </div>
            <!-- left end  -->

            <!-- right start  -->
            <div class="mt-2 lg:mt-28 xl:mt-0" >

              <!-- Innovation chart start  -->
              <div class="relative" >
                <!-- parent chart   -->
                <div class="bg-parent-chart w-sm h-sm   lg:w-3xl  lg:h-3xl  bg-contain  bg-center bg-no-repeat  duration-3000 ">

                <div class="bg-child-chart w-sm h-sm   lg:w-3xl  lg:h-3xl  bg-contain  bg-center bg-no-repeat  ">

                  <div class="bg-child-chart-1 w-sm h-sm   lg:w-3xl  lg:h-3xl  bg-contain  bg-center bg-no-repeat animate-spin animation-duration  ">
                </div>

                </div>

                </div>

              </div>
              <!-- Innovation chart end  -->


               
            </div>
            <!-- right end  -->
            </div>
        <!-- Service Wrapper End  -->
        <div class=" mt-16 md:mt-24" >
        <a href="#" class="flex justify-center  items-center text-xl md:text-[32px] leading-none capitalize text-gray-800 font-primary-medium">
          <span class="mt-1 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          </span> See full list of activities and top skills </a>
        </div>
        </div>
    </div>
</template>

<script>
  import { ref } from 'vue';
  export default {
    name: "Service",
    setup() {
      let accordionList = ref([
        {
          id: 1,
          title: 'Why We Exist ? ',
          details: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ',
        },
        {
          id: 2,
          title: 'Our Governance Practice',
          details: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ',
        },
        {
          id: 3,
          title: 'Serving the community',
          details: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ',
        },
        {
          id: 4,
          title: 'Our Values',
          details: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ',
        },
      ]);
      let activeAccordion = ref(1)

      const toggleAccordion = (accordionId) => {
        activeAccordion.value = accordionId;
      }

      return {
        accordionList,
        toggleAccordion,
        activeAccordion
      };
    },
  };
</script>
<style lang="scss" >

.vcpg { 
    border: 0px !important;
}
.vcp { 

    &__header { 
    @apply  text-xl lg:text-3xl leading-8  lg:leading-10 capitalize font-primary-regular;
    padding: 40px 0px !important;
    background-color: transparent !important;
    border-bottom: 0px !important;
    }

    &__body { 
        border-top: 0px !important;

        &-content { 
            padding: 0px !important;
        }
    }
}

</style>
