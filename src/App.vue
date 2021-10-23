<template>
  <Header />
 
  <!-- footer section start  -->
  <Footer />
  <!-- footer section  end -->
</template>

<script>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
import About from './pages/About/About.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    About,
  },
};
</script>

<style></style>
