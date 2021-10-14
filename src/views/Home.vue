<template>
  <div id="home">
    <Header />
    <Content />
    <Footer />
  </div>
</template>


<script>
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
export default {
  name: "Home",
  components: {
    Header,
    Content,
    Footer,
  },
};
</script>

<style >
</style>