<template>
  <div id="home">
    <Header />
    <AddPrdCom />
    <Footer />
  </div>
</template>


<script>
import Header from "../components/Header";
import AddPrdCom from "../components/AddPrdCom";
import Footer from "../components/Footer";
export default {
  name: "Home",
  components: {
    Header,
    AddPrdCom,
    Footer,
  },
};
</script>

<style >
</style>