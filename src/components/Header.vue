<template>
  <div class="">
    <div class="header">
      <h1>เว็บไซต์ของฉัน</h1>
      <p>ยินดีต้อนรับ</p>
    </div>

    <div class="menu">
      <router-link to="/">หน้าหลัก</router-link>
      <router-link to="/product">ร้านค้า</router-link>
      <router-link to="/manage">จัดการสินค้า</router-link>
      <router-link to="/contact" style="float: right">ติดต่อ</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>