<template>
  <div id="home">
    <Header />
    <ProductList />
    <Footer />
  </div>
</template>


<script>
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
export default {
  name: "Home",
  components: {
    Header,
    ProductList,
    Footer,
  },
};
</script>

<style >
</style>