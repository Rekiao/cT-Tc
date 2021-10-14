<template>
  <div id="home">
    <Header />
    <Contact />
    <Footer />
  </div>
</template>


<script>
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
export default {
  name: "Home",
  components: {
    Header,
    Contact,
    Footer,
  },
};
</script>

<style >
</style>