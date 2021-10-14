<template>
  <div style="text-align: center: width: 100%">
    <div class="card add">
      <h3>ฟอร์มเพิ่มข้อมูล</h3>
      <form @submit.prevent="saveProductData()">
        <p>
          ชื่อ :
          <input type="text" style="width: 100%" v-model="product.name" />
        </p>
        <p>
          ราคา :
          <input type="text" style="width: 100%" v-model="product.price" />
        </p>
        <p>
          รูป :
          <input
            type="file"
            @change="previewImage"
            style="width: 100%"
            accept="image/*"
          />
        </p>
        <p v-if="uploadValue > 0 && uploadValue < 100">
          กำลังอัปโหลด {{ uploadValue }}%
        </p>
        <p v-if="product.image">
          <img :src="product.image" width="120" height="150" alt="" />
        </p>

        <p>
          <input
            type="radio"
            v-model="product.isRecommand"
            :value="true"
          /><label for="text">แนะนำสินค้า</label>
        </p>
        <p>
          <input
            type="radio"
            v-model="product.isRecommand"
            :value="false"
            checked
          /><label for="text">ไม่แนะนำสินค้า</label>
        </p>
        <p>
          รายละเอียด :
          <textarea
            style="width: 100%; height: 70px"
            v-model="product.detail"
          ></textarea>
        </p>
        <p>
          <input
            type="submit"
            style="width: 100%; height: 40px"
            value="เพิ่มข้อมูล"
          />
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { db, storage } from "../firebase";
export default {
  data() {
    return {
      product: {
        id: 0,
        name: "",
        price: 0,
        detail: "",
        image: false,
        isRecommand: false,
      },
      saveProduct: [],
      uploadValue: 0,
      ImageData: null,
    };
  },
  mounted() {
    /* this.loadData();*/
  },
  methods: {
    saveProductData() {
      const ref = db.collection("product");
      ref
        .add(this.product)
        .then(() => {
          alert("Save Success !!!");
        })
        .catch((err) => {
          console.log(err);
          alert("Can't Save !!!");
        });

      this.product.name = "";
      this.product.price = "";
      this.product.image = "";
      this.product.detail = "";
      this.$router.push({ name: "manage" }).catch(() => {});
      /*this.$router.push("/manage");*/
    },
    previewImage(event) {
      this.ImageData = event.target.files[0];
      const sref = storage.ref(this.ImageData.name).put(this.ImageData);
      sref.on(
        "state_changed",
        (snapshot) => {
          /*this.uploadValue = parseInt(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
            10*/
          this.uploadValue = (
            (snapshot.bytesTransferred / snapshot.totalBytes) *
            100
          ).toFixed(0);
        },
        (err) => {},
        () => {
          sref.snapshot.ref.getDownloadURL().then((url) => {
            this.product.image = url;
          });
        }
      );
    },
  },
};
</script>

<style  scoped>
</style>