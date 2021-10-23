<template lang="">
    <header class="relative overflow-hidden bg-white mb-12 mt-6 lg:mb-24 lg:mt-8">
        <!-- Container  -->
        <div class="container flex justify-between items-center">
            <!-- left content   -->
            <div class="flex items-center">
                <!-- Brand Logo  -->
                <a href="#" class="text-brandLogo font-logo uppercase mr-14"> logo </a>
                <!-- menu -->
                <ul class="hidden xl:flex items-center space-x-12">
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
                <div class="hidden xl:flex items-center space-x-4">
                    <a href="#" class="text-menu uppercase font-primary-medium">Enterprise</a>
                    <a href="#" class="btn btn-outline">Login</a>
                    <a href="#" class="btn btn-primary">equip now</a>
                </div>
                <a href="#" class="inline-block bg-primary px-4 py-2 text-white text-2xl rounded-lg xl:hidden">
                    <i class="fas fa-bars"></i>
                </a>
            </div>
        </div>
    </header>
</template>
<script>
    export default {
        name: "Header",
    };
</script>
<style lang=""></style>
