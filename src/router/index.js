import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Product from "../views/Product";
import Contact from "../views/Contact";
import AddProduct from "../views/AddProduct";
import ManageProduct from "../views/ManageProduct";
import EditProduct from "../views/EditProduct";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/product", name: "product", component: Product },
  { path: "/contact", name: "contact", component: Contact },
  { path: "/add-product", name: "add-product", component: AddProduct },
  { path: "/manage", name: "manage", component: ManageProduct },
  { path: "/edit-product", name: "edit-product", component: EditProduct }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
