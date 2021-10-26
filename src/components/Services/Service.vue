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

                <!-- innovation chart Goes Here   -->
                    <div class="relative">
                        <!-- Parent Circle Div Start -->
                        <div class=" relative bg-white w-lg h-lg sm:w-xl sm:h-xl md:w-2xl md:h-2xl  lg:w-3xl lg:h-3xl flex justify-between  items-center rounded-full transform rotate-90">
                            <h2 class="transform -rotate-90 text-2xl sm:text-3xl  leading-normal font-primary-regular  uppercase tracking-widest   -mx-24 sm:-mx-36 md:-mx-36 lg:-mx-24">Compliance</h2>
                            <!-- blue border start  -->
                            <div class=" absolute top-1/2 left-1/2  rounded-full w-0 h-0 md:w-2xl  md:h-2xl  lg:w-2xl lg:h-2xl  border-2 border-primary transform -translate-x-1/2 -translate-y-1/2  bg-white " >
                                <!-- service start -->
                                <div class="bg-spaste w-md h-md  sm:w-xl sm:h-xl rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  -rotate-90 flex flex-col justify-between items-center">
                                <h2 class=" text-sm  md:text-lg leading-none md:leading-5  text-white uppercase font-secondary-bold mt-3"> Platform </h2>
                                    <!-- white border start  -->
                                    <div class="bg-white w-0 lg:w-lg h-0 lg:h-lg rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " >
                                        <!-- our services start  -->
                                        <div class=" bg-footer   w-xs h-xs sm:w-lg sm:h-lg rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  -rotate-90 flex flex-col justify-between items-center "> 
                                            <h2 class="text-white uppercase text-sm leading-normal font-secondary-bold mt-1 " >Digital</h2>
                                        <!-- white border start  -->
                                        <div class=" bg-white lg:w-sm lg:h-sm rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <!-- main service start  -->
                                            <div class="bg-paste w-xxs h-xxs sm:w-md sm:h-md rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rotate-90 flex flex-col justify-between items-center " >
                                                <h2 class="text-white uppercase text-md md:text-xl leading-none font-secondary-bold mt-6  ">Enterprice</h2>

                                                <!-- Border  -->
                                                <div class="inline-block w-full bg-white h-4"></div>

                                                <!-- logo wrapper start  -->
                                                <div class="bg-white w-0 h-0 sm:w-xxs sm:h-xxs rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
                                                    <!-- Logo start  -->
                                                    <div class="bg-primary w-xxxxs h-xxxxs  sm:w-xxxs sm:h-xxxs rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
                                                        <!-- <img src="" alt=""> -->
                                                    </div>
                                                    <!-- Logo end  -->
                                                </div>
                                                <!-- logo wrapper end  -->
                                                <h2 class="text-white uppercase text-md md:text-xl leading-none font-secondary-bold mb-6">Marketing</h2>
                                            </div>
                                            <!-- main service end  -->
                                            </div>
                                        <!-- white border end  -->
                                         <h2 class="text-white uppercase text-sm leading-normal font-secondary-bold mt-1 ">Offline</h2>
                                        </div>
                                        <!-- our services end  -->
                                    </div>
                                    <!-- white border end  -->
                                    <h2 class=" text-sm  md:text-lg leading-none md:leading-5  text-white uppercase font-secondary-bold  mb-5" >Professional Services</h2>
                                </div>
                                <!-- service end  -->
                            </div>
                            <!-- blue border end  -->
                            <h2 class="transform -rotate-90 text-2xl sm:text-3xl  leading-normal font-primary-regular  uppercase tracking-widest -mx-24  sm:-mx-36 lg:-mx-24 ">Innovation</h2>
                        </div>
                        <!-- Parent Circle Div End  -->
                    </div>
                <!-- innovation chart Goes End   -->
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
