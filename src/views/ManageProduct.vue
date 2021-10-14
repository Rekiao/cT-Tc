<template>
  <div id="manage">
    <Header />
    <MangePrdCom />
    <Footer />
  </div>
</template>


<script>
import Header from "../components/Header";
import MangePrdCom from "../components/MangePrdCom";
import Footer from "../components/Footer";
export default {
  name: "manage",
  components: {
    Header,
    MangePrdCom,
    Footer,
  },
};
</script>

<style >
</style>