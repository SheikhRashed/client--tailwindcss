<template>
  <!-- Header Section Start  -->
    <Header />
  <!-- Header Section End -->

  <!-- Banner Section Start  -->
      <Banner/>
  <!-- Banner Section End  -->

 
  <!-- Team Section Start  -->
  <Team/>
  <!-- Team Section End  -->

  <!-- Connect Section start  -->
  <Connect/>
  <!-- Connect Section end -->

  <!-- footer section start  -->
  <Footer />
  <!-- footer section  end -->
</template>

<script>
import Header from './components/Header/Header.vue';
import Banner from './components/Banner/Banner.vue';
import About from './pages/About/About.vue';
import Connect from './components/Connects/Connect.vue';
import Team from './components/Teams/Team.vue';
import Footer from './components/Footer/Footer.vue';
export default {
  name: 'App',
  components: {
    Header,
    Banner,
    Footer,
    About,
    Team,
    Connect,
  },
};
</script>

<style></style>
