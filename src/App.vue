<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sarabun&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Sarabun:wght@200;400&display=swap");
* {
  box-sizing: border-box;
}

body {
  font-family: Arial;
  padding: 10px;
  background: #f1f1f1;
}

.header {
  color: white;
  padding: 30px;
  text-align: center;
  background-image: url("https://demoweb.nongjan.repl.co/images/02.jpg");
  background-repeat: repeat;
  background-position: center;
  font-family: "Sarabun", sans-serif;
}

.card.add {
  width: 40%;
}

.header h1 {
  font-size: 50px;
}

.menu {
  overflow: hidden;
  background-color: #333;
  font-family: "Sarabun", sans-serif;
}

.menu a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.menu a:hover {
  background-color: #ddd;
  color: black;
}

.leftcolumn {
  float: left;
  width: 75%;
  display: flex;
  flex-wrap: wrap;
}

.rightcolumn {
  float: left;
  width: 25%;
  background-color: #f1f1f1;
}

.img {
  width: 200px;
  height: 250px;
  height: auto;
  padding: 10px;
  box-shadow: 2px black;
}

.card {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
}

.card.item {
  width: 32%;
  margin-right: 1%;
}

.img-logo {
  width: 50%;
  height: 50%;
}

.column1 {
  text-align: center;
  float: left;
  width: 100%;
  height: 20%;
}

.column2 {
  float: left;
  padding: 10px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.footer {
  padding: 20px;
  background: #ddd;
  margin-top: 20px;
  font-size: 12px;
}

@media screen and (max-width: 800px) {
  .leftcolumn,
  .rightcolumn {
    width: 100%;
    padding: 0;
  }

  .card.add {
    width: 90%;
  }

  .leftcolumn {
    display: block;
  }

  .card.item {
    width: 100%;
  }
}

@media screen and (max-width: 400px) {
  .menu a {
    float: none;
    width: 100%;
  }
}
</style>
