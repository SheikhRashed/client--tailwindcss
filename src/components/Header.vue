<template lang="">
    <header class="relative  bg-white pt-8 pb-8 md:pb-16  z-50 " :class="{ 'scrolled-nav ': scrolledNav}">
        <!-- Container  -->
        <nav class="container flex justify-between items-center">
            <!-- left content   -->
            <div class="flex items-center">
                <!-- Brand Logo  -->
                <a href="#" class="text-brandLogo font-logo uppercase mr-14"> logo </a>
                <!-- menu -->
                <ul class="hidden xl:flex items-center space-x-12" v-show="!mobile">
                    <li>
                        <a href="#" class="text-menu uppercase font-primary-medium">About us</a>
                    </li>
                    <li>
                        <a href="#" class="text-menu uppercase font-primary-medium">Benefits</a>
                    </li>
                    <li>
                        <a href="#" class="text-menu uppercase font-primary-medium">Service</a>
                    </li>
                    <li>
                        <a href="#" class="text-menu uppercase font-primary-medium">Pricing</a>
                    </li>
                    <li>
                        <a href="#" class="text-menu uppercase font-primary-medium">Resources</a>
                    </li>
                </ul>
            </div>
            <!-- right content -->
            <div>
                <div class="hidden xl:flex items-center space-x-4" v-show="!mobile">
                    <a href="#" class="text-menu uppercase font-primary-medium">Enterprise</a>
                    <a href="#" class="btn btn-outline">Login</a>
                    <a href="#" class="btn btn-primary">equip now</a>
                </div>
                <a href="#" class="inline-block bg-primary px-4 py-2 text-white text-2xl rounded-lg xl:hidden">
                    <i @click="toggleMobileNav" v-show="mobile" class="fas fa-bars" :class="{'icon-active' : mobileNav}" ></i>
                </a>
            </div>
            <transition name="mobile-nav" class="bg-primary py-12  w-ful">
                  <ul class=" xl:flex flex-col items-center space-y-8 md:space-y-12 absolute z-10 top-28 left-0 text-center w-full" v-show="mobileNav">
                    <li>
                        <a href="#" class="text-menu uppercase font-primary-medium">About us</a>
                    </li>
                    <li>
                        <a href="#" class="text-menu uppercase font-primary-medium">Benefits</a>
                    </li>
                    <li>
                        <a href="#" class="text-menu uppercase font-primary-medium">Service</a>
                    </li>
                    <li>
                        <a href="#" class="text-menu uppercase font-primary-medium">Pricing</a>
                    </li>
                    <li>
                        <a href="#" class="text-menu uppercase font-primary-medium">Resources</a>
                    </li>
                    <li>
                        <a href="#" class="text-menu uppercase font-primary-medium">enterprice</a>
                    </li>
                    <li class="flex justify-center space-x-4">
                      <a href="#" class="btn btn-outline border-white text-black">Login</a>
                      <a href="#" class="btn btn-outline border-white text-black">equip now</a>
                    </li>
                 
                </ul>
            </transition>
        </nav>
    </header>
</template>
<script>

import Sidebar from './Sidebar.vue';

    export default {
        name: "Header",
        data() { 
          return { 
            scrolledNav: null,
            mobile: true,
            mobileNav: false,
            windowWidth: null,
          }
        },
        created() { 
          window.addEventListener('resize',this.checkScreen);
          this.checkScreen();
        },
        mounted() { 
          window.addEventListener('scroll', this.updateScroll);
        },
        methods: { 
          toggleMobileNav() {
              this.mobileNav = !this.mobileNav
          },
          checkScreen() { 
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 1280) { 
              this.mobile = true;
              return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
          },
          updateScroll() { 
              const scrollPosition = window.scrollY;
              scrollPosition > 50 ? this.scrolledNav = true : this.scrolledNav = false;
          }
        }

    };
</script>
<style lang="scss" scoped>
  .scrolled-nav { 
    position: fixed;
    top: 0;
    width: 100%;
    padding-bottom: 32px;
    box-shadow: 0px 12px 40px 0px #00223312;
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active { 
    transition: 0.3s ease all;
  }
  .mobile-nav-enter-from,
  .mobile-nav-leave-to { 
    transform: translateY(-10px);
  }
  .mobile-nav-enter-to { 
    transform: translateY(0px);
  }
</style>
