<template lang="">
    <div class="bg-footer py-20">
        <div class="container flex justify-between flex-col xl:flex-row ">
            <!-- Left content  -->
            <div class="w-full xl:max-w-2xl mr-4 xl:mr-0">
                <!-- left Top start  -->
                <div class="border-b border-opacity-5  mb-6 md:mb-6">
                    <!-- brand logo start -->
                    <div class="mb-8">
                        <a href="#">
                            <h6 class="text-brandLogo font-logo uppercase text-white">Logo</h6>
                        </a>
                    </div>
                    <!-- brand logo end  -->
                    <!-- brief start  -->
                    <p class="text-white w-full md:w-64 mb-7 md:mb-14 text-sm capitalize ">
                        Inspiring the world through change one gig at a time
                    </p>
                    <!-- brief end -->
                </div>
                <!-- left top end  -->
                <!-- left top start  -->
                <div>
                    <!-- Privary Policy start  -->
                    <ul class="flex flex-1 flex-wrap whitespace-nowrap privacy space-x-3">
                        <li class="privacy-item"><a href="#" class="text-xs uppercase text-white font-secondary-regular" >Terms of Business</a></li>
                        <li class="privacy-item"><a href="#" class="text-xs uppercase text-white font-secondary-regular" >Data usage & privacy Policy</a></li>
                        <li class="privacy-item"><a href="#" class="text-xs uppercase text-white font-secondary-regular" > Cancellation Policy</a></li>
                        <li class="privacy-item"><a href="#" class="text-xs uppercase text-white font-secondary-regular" > Our Ethics Statement</a></li>
                        <li class="privacy-item"><a href="#" class="text-xs uppercase text-white font-secondary-regular" >sitemap</a></li>
                    </ul>
                    <!-- Privary Policy end -->
                    <!-- privacy Brif start  -->
                    <p class="text-xs capitalize text-white text-opacity-40  md:max-w-xl my-8">COMPANY REFERS TO THE GLOBAL PLATFORM, AND MAY REFER TO ONE OR MORE LICENSED COMPANIES, EACH OF WHICH IS A SEPARATE LEGAL ENTITY. COMPANY BRAND AND TECHNOLOGY IS OWNED BY COMPANY NO. 123456</p>
                    <!-- privacy Brif end  -->
                    <!-- Copy right Text  -->
                    <p class="text-xs uppercase text-white text-opacity-40 mb-10 xl:mb-0 "> company &copy; all rights reserved 2021</p>
                    <!-- Copy right Text  -->
                </div>
                <!-- left top end   -->
            </div>
            <!-- right content -->
            <div>
                <!-- right top start -->
                <div>
                    <!-- newsletter start  -->
                    <div class="flex sm:items-center justify-between flex-col sm:flex-row items-start ">
                        <!-- Text content start  -->
                        <div>
                            <h6 class=" text-3xl leading-8 capitalize text-white font-secondary-regular mb-8">Get Our Newsletter</h6>
                            <h2 class="text-4xl leading-9 uppercase text-white font-secondary-regular mb-4 md:mb-8">Join the community</h2>
                            <p class="text-white capitalize text-sm max-w-lg">Read about the latest in workplace trends, events and insights straight to your inbox</p>
                        </div>
                        <!-- Text content end  -->
                        <!-- Social Icons start  -->
                        <ul class="flex items-center space-x-7 my-6 sm:my-0">
                            <li>
                                <a href="#" class="text-2xl text-white text-opacity-50">
                                    <i class="fab fa-facebook-square"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-2xl text-white text-opacity-50">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-2xl text-white text-opacity-50">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-2xl text-white text-opacity-50">
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-2xl text-white text-opacity-50">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                        <!-- Social Icons end  -->
                    </div>
                    <!-- newsletter end  -->
                    <!-- newsletter from start  -->
                    <form action="#">
                        <div class="relative w-full lg:w-6/12 xl:w-full flex flex-col sm:flex-row items-center mt-6">
                            <input type="text" placeholder="Enter Email" class="bg-transparent border-b border-opacity-80  w-full focus:outline-none py-2 pb-4 sm:pb-0  text-white placeholder-gray-500 mb-6 sm:mb-0 text-center sm:text-left">
                            <button class="btn btn-primary sm:absolute bottom-0 right-0">Subsribe to newsletter</button>
                        </div>
                    </form>
                    <!-- newsletter from end  -->
                </div>
                <!-- right top end  -->
                <!-- right bottom start  -->
                <div class="mt-10">
                    <h2 class="text-white font-secondary-regular uppercase text-3xl leading-8 mb-6 ">Links</h2>
                    <ul class="flex items-center flex-wrap space-x-2 justify-center sm:justify-start sm:space-x-4">
                        <li><a href="#" class="text-xs uppercase text-white ">About us </a></li>
                        <li><a href="#" class="text-xs uppercase text-white ">Benefits</a></li>
                        <li><a href="#" class="text-xs uppercase text-white ">jobs</a></li>
                        <li><a href="#" class="text-xs uppercase text-white ">Profiles</a></li>
                        <li><a href="#" class="text-xs uppercase text-white ">Pricing</a></li>
                        <li><a href="#" class="text-xs uppercase text-white ">Resources</a></li>
                        <li><a href="#" class="text-xs uppercase text-white ">Contact us</a></li>
                        <li><a href="#" class="text-xs uppercase text-white ">investor relations </a></li>
                    </ul>
                </div>
                <!-- right bottom end  -->
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Footer",
    };
</script>
<style lang="scss">
.privacy { 
    &-item { 
        position: relative;
        &:nth-last-child(1) { 
            &::before { 
                display: none;
            }
        }
        &::before { 
            content: '';
            position: absolute;
            width: 1px;
            height: 50%;
            top:50%;
            right: -6px;
            transform: translateY(-50%);
            background-color: #fff;

        }


    }
}
</style>
