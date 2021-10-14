<template>
  <div class="row">
    <div class="leftcolumn">
      <div class="topic">
        <label for="text"
          >รายการสินค้า มีทั้งหมดจำนวน {{ total_product }} รายการ</label
        >
      </div>
      <div v-for="item of productData" :key="item.id" class="card item">
        <div class="row">
          <div class="column1">
            <img class="img" :src="item.image" />
          </div>
          <div class="column2">
            <h3>{{ item.name }}</h3>
            <p>รายละเอียดสินค้า</p>
            <p>ราคา : {{ item.price }} บาท</p>
            <p class="detail">&nbsp;&nbsp;&nbsp;&nbsp;{{ item.detail }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="rightcolumn">
      <Sidebar />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import { db } from "../firebase";
export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      productData: [],
      total_product: 0,
    };
  },
  mounted() {
    this.loadData();
    /*this.sizeData();*/
  },
  methods: {
    loadData() {
      const ref = db.collection("product");
      ref.onSnapshot((snapshotChange) => {
        this.productData = [];
        snapshotChange.forEach((element) => {
          this.productData.push({
            id: element.id,
            name: element.data().name,
            detail: element.data().detail,
            price: element.data().price,
            image: element.data().image,
          });
        });
      });
      ref.get().then((item) => {
        this.total_product = item.size;
      });
    },
    sizeData() {
      const ref = db.collection("product");
      ref.get().then((item) => {
        this.total_product = item.size;
      });
    },
  },
};
</script>

<style scoped>
.topic {
  width: 99%;
  background-color: rgb(197, 194, 194);
  padding: 20px;
  margin-top: 20px;
}
</style>