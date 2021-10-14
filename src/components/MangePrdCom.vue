<template>
  <div class="">
    <div class="topic">
      <p>
        รายการสินค้า ทั้งหมด {{ total_product }} รายการ
        <input type="button" value="เพิ่มสินค้า" @click="goto()" />
        <input type="button" value="มากไปน้อย" @click="sort('desc')" />
        <input type="button" value="น้อยไปมาก" @click="sort('asc')" />
      </p>
    </div>
    <div class="search">
      <p>
        ค้นหา :
        <input type="text" v-model="search_text" />
        <input
          style="margin-left: 5px"
          type="button"
          value="ค้นหาสินค้า"
          @click="search()"
        />
        <input
          style="margin-left: 5px"
          type="button"
          value="ดูทั้งหมด"
          @click="loadData()"
        />
      </p>
    </div>
    <table class="foodmenu">
      <tr>
        <!-- <th>รายการ</th>-->
        <th style="width: 10%">รูป</th>
        <th style="width: 10%">ชื่อ</th>
        <th style="width: 10%">ราคา</th>
        <th style="width: 60%">รายละเอียด</th>
        <th style="width: 10%">จัดการ</th>
      </tr>
      <tr v-for="(data, index) in productData" :key="index">
        <!--<td>
          <p
            style="display: flex; justify-content: center; align-items: center"
          >
            {{ index + 1 }}
          </p>
        </td>-->
        <td><img :src="data.image" alt="" /></td>
        <td>{{ data.name }}</td>
        <td>{{ data.price }}</td>
        <td>{{ data.detail }}</td>
        <td>
          <input type="button" value="แก้ไข" @click="gotoEdit(data)" />
          <input type="button" value="ลบ" @click="deleteProduct(data.id)" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { db } from "../firebase";
export default {
  data() {
    return {
      productData: [],
      total_product: 0,
      search_text: "",
      sort_price: "asc",
    };
  },
  mounted() {
    this.loadData();
    /*this.sizeData();*/
  },
  methods: {
    loadData() {
      const ref = db.collection("product").orderBy("price", this.sort_price);
      ref.onSnapshot((snapshotChange) => {
        this.productData = [];
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
      ref.get().then((item) => {
        this.total_product = item.size;
      });
    },
    sort(sort) {
      this.sort_price = sort;
      this.loadData();
    },
    search() {
      const ref = db
        .collection("product")
        .where("name", "==", this.search_text)
        .orderBy("price", "desc");
      /* .where("name", ">=", this.search_text)
        .where("name", "<=", this.search_text + "~");*/
      ref.onSnapshot((snapshotChange) => {
        this.productData = [];
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
    sizeData() {
      const ref = db.collection("product");
      ref.get().then((item) => {
        this.total_product = item.size;
      });
    },
    goto() {
      this.$router.push({ name: "add-product" }).catch(() => {});
      /* this.$router.push("/add-product");*/
    },
    gotoEdit(data) {
      this.$router
        .push({ name: "edit-product", params: { product: data } })
        .catch(() => {});
    },
    deleteProduct(id) {
      const ref = db.collection("product").doc(id);
      ref
        .delete()
        .then(() => {
          alert("Deletet Success !!!!");
        })
        .cath((err) => {
          console.log(err);
          alert("Can't deletet !!! ");
        });
    },
  },
};
</script>

<style scoped>
.topic {
  background-color: rgb(197, 194, 194);
  padding: 20px;
  margin-top: 20px;
  width: 80%;
}
.foodmenu {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 80%;
  margin-top: 5px;
}

.foodmenu td,
.foodmenu th {
  border: 1px solid #ddd;
  padding: 8px;
}

.foodmenu tr:nth-child(even) {
  background-color: #f2f2f2;
}
.foodmenu tr:hover {
  background-color: #ddd;
}

td img {
  width: 120px;
  height: auto;
}
.foodmenu th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
@media only screen and (max-width: 800px) {
  .topic,
  .foodmenu {
    width: 100%;
  }
}
</style>