<template>
  <div class="contact">
    <div class="card logo">
      <h2>{{ profile.company }}</h2>
      <div style="text-align: center">
        <img class="img-logo" :src="profile.logo" />
      </div>
      <p>ประวัติร้าน</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ profile.detail }}</p>
      <p>ติดต่อ</p>
      <p>เบอร์โทร {{ profile.phone }}</p>
      <p>ที่อยู่ {{ profile.social }}</p>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";
export default {
  data() {
    return {
      profile: {
        company: "",
        logo: "",
        detail: "",
        phone: "",
        social: "",
      },
    };
  },
  mounted() {
    const refs = db.collection("contact").doc("profile");
    refs.onSnapshot((doc) => {
      this.profile = doc.data();
    });
  },
};
</script>

<style scoped>
</style>