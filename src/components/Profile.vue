<template lang="">
<!-- profile Card  -->
    <div class="relative overflow-hidden ">
        <!-- Img start -->
        <div class=" w-full h-80 relative overflow-hidden mb-6 ">
            <!-- <img src="../../assets/images/user-1.png" class="w-full h-full object-cover "> -->
           <!-- <img :src="`../../src/assets/images/${profile.img}`" class="w-full h-full object-cover "> -->
            <img :src="profile.img" class="w-full h-full object-cover ">
        </div>
        <!-- Img end  -->
        <!-- About start  -->
        <div class="text-center">
        <!-- name start  -->
        <h6 class="text-primary text-3xl  lg:text-[40px] leading-normal capitalize lg:mb-4 font-primary-regular " >{{profile.name}}</h6>
        <!-- name end  -->
        <!-- Designation start  -->
        <p class=" text-xl lg:text-[32px]  lg:leading-normal text-gray-800  font-secondary-ebold ] ">{{profile.designation}} </p>
        <!-- Designation end  -->
        </div>
        <!-- About end  -->
    </div>
</template>
<script>
export default {
    name: 'Profile',
    props: { 
        profile: Object
    }
}
</script>
<style lang="">
    
</style>
