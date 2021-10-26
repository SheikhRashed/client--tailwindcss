<template lang="">
<!-- profile Card  -->
    <div class="relative overflow-hidden ">
        <!-- Img start -->
        <div class=" w-full h-80 relative overflow-hidden mb-6 ">
            <img :src="`/src/assets/images/${profile.img}`" class="w-full h-full object-cover ">
        </div>
        <!-- Img end  -->
        <!-- About start  -->
        <div class="text-center">
        <!-- name start  -->
        <h6 class="text-primary text-3xl leading-7 capitalize mb-4" >{{profile.name}}</h6>
        <!-- name end  -->
        <!-- Designation start  -->
        <p class="text-2xl  leading-9 text-gray-800">{{profile.designation}} </p>
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
