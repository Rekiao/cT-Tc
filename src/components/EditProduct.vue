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
        <p>รูป : <input type="file" @change="uploadImg" /></p>
        <p v-if="uploadValue > 0 && uploadValue < 100">
          กำลังอัปโหลด {{ uploadValue }}%
        </p>
        <p><img :src="product.image" width="120" height="150" alt="" /></p>
        <p>
          <input
            type="radio"
            id="isRecommandTrue"
            v-model="product.isRecommand"
            :value="true"
          />เป็นสินค้าแนะนำ
        </p>

        <p>
          <input
            type="radio"
            id="isRecommandFalse"
            v-model="product.isRecommand"
            :value="false"
          />ไม่เป็นสินค้าแนะนำ
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
            value="แก้ไขข้อมูล"
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
        id: "",
        name: "",
        price: 0,
        detail: "",
        image: "",
        isRecommand: false,
      },
      saveProduct: [],
      uploadValue: 0,
      ImageData: null,
    };
  },
  mounted() {
    this.loadData();
    console.log(this.$route.params.product.isRecommand);
    this.product.isRecommand
      ? (document.getElementById("isRecommandTrue").cheked = true)
      : (document.getElementById("isRecommandFalse").cheked = true);
  },
  methods: {
    loadData() {
      this.product = this.$route.params.product;
    },
    saveProductData() {
      const ref = db.collection("product").doc(this.product.id);
      ref
        .update({
          name: this.product.name,
          detail: this.product.detail,
          price: this.product.price,
          image: this.product.image,
          isRecommand: this.product.isRecommand,
        })
        .then(() => {
          alert("Edit Success !!!");
          this.$router.push({ name: "manage" }).catch(() => {});
        })
        .catch((err) => {
          console.log(err);
          alert("Cant Edit !!!");
        });
    },
    uploadImg(even) {
      this.ImageData = even.target.files[0];
      const sref = storage.ref(this.ImageData.name).put(this.ImageData);
      sref.on(
        "state_changed",
        (snapshot) => {
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