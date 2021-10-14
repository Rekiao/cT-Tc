<template>
  <div id="home">
    <Header />
    <EditProduct />
    <Footer />
  </div>
</template>


<script>
import Header from "../components/Header";
import EditProduct from "../components/EditProduct";
import Footer from "../components/Footer";
export default {
  name: "Home",
  components: {
    Header,
    EditProduct,
    Footer,
  },
};
</script>

<style >
</style>