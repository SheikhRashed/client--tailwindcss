<template lang="">
    <div class="relative py-24">
        <!-- Service Wrapper Start  -->
        <div class="container">
            <!-- left start  -->
            <div>
                <!-- Service Info start  -->
                <h6 class="text-2xl lg:text-5xl leading-none lg:leading-10 mb-5 font-secondary-regular capitalize">You need transparency</h6>
                <h2 class=" text-4xl lg:text-6xl leading-none mb-3 font-primary-regular uppercase ">We've got you covered</h2>
                <p class="font-primary-regular text-lg lg:text-xl leading-none lg:leading-7 capitalize mb-8 lg:mb-16 " >in publishing and grapich design, lorem ipsum is a placeholder text commonly used to demonstrate</p>
                <!-- Service Info End  -->

                <!-- Accordion start  -->
                <vue-collapsible-panel-group>
                    <vue-collapsible-panel>
                        <template #title >
                            Why We Exist ?
                        </template>
                        <template #content>
                          <p class="pb-32">
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a
                        placeholder before final copy is available.
                          </p>
                        </template>
                    </vue-collapsible-panel>
                    <vue-collapsible-panel :expanded="false">
                        <template #title>
                            Our Governance Practice
                        </template>
                        <template #content>
                          <p class="pb-32">
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a
                        placeholder before final copy is available.
                          </p>
                        </template>
                    </vue-collapsible-panel>
                    <vue-collapsible-panel :expanded="false">
                        <template #title>
                            Serving The Community
                        </template>
                        <template #content>
                        <p class="pb-32">
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a
                        placeholder before final copy is available.
                          </p>
                        </template>
                    </vue-collapsible-panel>
                    <vue-collapsible-panel :expanded="false">
                        <template #title>
                            Our Values
                        </template>
                        <template #content>
                          <p class="pb-32">
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a
                            placeholder before final copy is available.
                          </p>
                        </template>
                    </vue-collapsible-panel>
                </vue-collapsible-panel-group>
                <!-- Accordion end  -->
            </div>
            <!-- left end  -->

            <!-- right start  -->
            <div></div>
            <!-- right end  -->
        </div>
        <!-- Service Wrapper End  -->
    </div>
</template>
<script>
    export default {
        name: "Service",
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
