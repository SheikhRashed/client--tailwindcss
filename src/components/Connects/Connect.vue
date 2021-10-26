<template >
    <div class="relative  pb-12  md:py-16 lg:py-24 ">
    <!-- Connect Wrapper  -->
      <div class="container">
        <!-- top start   -->
        <div class="flex justify-between flex-col lg:flex-row mb-8 md:mb-10 xl:mb-20 ">
          <!-- left start  -->
          <div class="  ">
            <h6 class=" text-lg xl:text-[40px] leading-normal uppercase font-secondary-light  text-gray-800">Got a question on complance?</h6>
            <h2 class="  text-5xl xl:text-8xl leading-normal capitalize font-primary-medium">Let's connect!</h2>
          </div>
          <!-- left end  -->
          <!-- right start  -->
          <div class=" ">
              <p class=" text-lg xl:text-[24px] leading-normal capitalize text-gray-800 mb-6 xl:mb-10 font-secondary-regular max-w-3xl   ">Get in touch will our team who would be happy to help you get started</p>
              <a href="#" class=" flex items-center text-xl  md:text-2xl leading-6  capitalize text-gray-800 -ml-2  font-primary-medium ">
                  <span class="mt-1 mr-4">
                      <i class="far fa-arrow-alt-circle-right"></i>
                  </span>
                  book your free strategy session
              </a>
          </div>
          <!-- right end -->
        </div>
        <!-- top end   -->
        
        <!-- bottom start  -->
        <div>
            <form action="#">
                <!-- Form Input Content Start -->
                <div class="flex justify-between flex-col md:flex-row ">
                    <!-- left start  -->
                    <div class="md:w-1/2   md:mr-12   ">
                        <div class="w-full mb-11">
                            <input type="text" placeholder="Full Name *" required class="border border-gray-900 py-5 pl-6 w-full rounded">
                        </div>
                        <div class="w-full mb-11 md:mb-0">
                            <input type="text" placeholder="Company Name *" required class="border border-gray-900 py-5 pl-6 w-full rounded">
                        </div>
                    </div>
                    <!-- left end  -->
                    
                    <!-- Right start -->
                        <div class=" md:w-1/2 ">
                            <div class="w-full mb-11">
                               <input type="email" placeholder="Work email *" required class="border border-gray-900 py-5 pl-6 w-full rounded">
                            </div>
                            <div class="w-full mb-11">
                               <input type="number" placeholder="Phone Number *" required class="border border-gray-900 py-5 pl-6 w-full rounded">
                            </div>
                            <div class="w-full ">
                               <input type="text" placeholder="I am looking to hire * " required class="border border-gray-900 py-5 pl-6 w-full rounded">
                            </div>
                            <button class="btn btn-primary mt-12 md:mt-28 w-full md:w-56  ">Submit</button>
                        </div>
                    <!-- Right end -->

                <!-- Form Input Content end  -->
                </div>
            </form>
        </div>
        <!-- bottom end  -->

      </div>
    </div>
</template>

<script>
export default {
    name: 'Connect'
}
</script>

<style lang="">
    
</style>