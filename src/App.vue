<template>
  <!-- Header Section Start  -->
  <Header />

  <!-- Banner Section Start  -->
  <Banner/>

  <!-- Our Story  -->
  <our-story />

  <!-- Service Section Start  -->
  <Service/>
 
  <!-- Team Section Start  -->
  <Team/>

  <!-- Blue Border start  -->
  <div class=" py-2 lg:py-8 my-14 lg:my-28 bg-primary">
  </div>

  <!-- Connect Section start  -->
  <Connect/>

  <!-- footer section start  -->
  <Footer />
</template>

<script>
  import Header from './components/Header.vue';
  import Banner from './components/Banner.vue';
  import Service from './components/Service.vue';
  import Connect from './components/Connect.vue';
  import Team from './components/Team.vue';
  import Footer from './components/Footer.vue';
  import OurStory from './components/OurStory.vue';
  
  export default {
    name: 'App',
    components: {
      Header,
      Banner,
      Service,
      Footer,
      Team,
      Connect,
      OurStory,
    },
  };
</script>

<style></style>
