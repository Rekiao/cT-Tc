<template>
  <div class="leftcolumn">
    <div class="topic">
      <label for="">สินค้าแนะนำ</label>
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
</template>

<script>
import { db } from "../firebase";
export default {
  data() {
    return {
      productData: [],
      sort_price: "asc",
    };
  },
  mounted() {
    this.loadData();
    console.log(this.productData);
  },
  methods: {
    loadData() {
      const ref = db
        .collection("product")
        .where("isRecommand", "==", true)
        .orderBy("price", this.sort_price);
      ref.onSnapshot((snapshotChange) => {
        snapshotChange.forEach((element) => {
          this.productData.push({
            id: element.id,
            name: element.data().name,
            detail: element.data().detail,
            price: element.data().price,
            image: element.data().image,
            isRecommand: element.data().isRecommand,
          });
        });
      });
    },
  },
};
</script>

<style scoped>
.homecom {
  padding: 20px 20px 20px 0;
}
.topic {
  background-color: rgb(197, 194, 194);
  padding: 20px;
  margin-top: 20px;
  width: 99%;
}
</style>