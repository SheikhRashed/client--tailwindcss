<template lang="">
    <div class="relative py-24">
        <!-- Service Wrapper Start  -->
        <div class="container ">

            <!-- left start  -->
            <div>
                <!-- Service Info start  -->
                <h6>YOu need transparency</h6>
                <h2>We've got you covered</h2>
                <p>in publishing and grapich design, lorem ipsum is a placeholder text commonly used to demonstrate</p>
                <!-- Service Info End  -->

                <!-- Accordion start  -->
                <vue-collapsible-panel-group>
    <vue-collapsible-panel>
        <template #title>
            Panel A Title
        </template>
        <template #content>
            Panel A Content
        </template>
    </vue-collapsible-panel>
    <vue-collapsible-panel>
        <template #title>
            Panel B Title
        </template>
        <template #content>
            Panel B Content
        </template>
    </vue-collapsible-panel>
    ...
</vue-collapsible-panel-group>
                <!-- Accordion end  -->

            </div>
            <!-- left end  -->

            <!-- right start  -->
            <div>

            </div>
            <!-- right end  -->
        </div>
        <!-- Service Wrapper End  -->
    </div>
</template>
<script>
export default {
    name: 'Service'
}
</script>
<style lang="">
    
</style>