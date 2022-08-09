import Vue from "vue";
import Router from "vue-router";
// import Msite from "../pages/Msite/Msite.vue";
// import Search from "../pages/Search/Search.vue";
// import Order from "../pages/Order/Order.vue";
// import Profile from "../pages/Profile/Profile.vue";
import Login from "../pages/Login/Login.vue";
import Shop from "../pages/Shop/Shop.vue";
import ShopGoods from "../pages/Shop/ShopGoods/ShopGoods.vue";
import ShopRatings from "../pages/Shop/ShopRatings/ShopRatings.vue";
import ShopInfo from "../pages/Shop/ShopInfo/ShopInfo.vue";

const Msite = () => import("../pages/Msite/Msite.vue");
const Search = () => import("../pages/Search/Search.vue");
const Order = () => import("../pages/Order/Order.vue");
const Profile = () => import("../pages/Profile/Profile.vue");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/msite",
      name: "Msite",
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: "/search",
      name: "Search",
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: "/order",
      name: "Order",
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/shop",
      component: Shop,
      children: [
        {
          path: "/shop/goods",
          name: "ShopGoods",
          component: ShopGoods
        },
        {
          path: "/shop/ratings",
          name: "ShopRatings",
          component: ShopRatings
        },
        {
          path: "/shop/info",
          name: "ShopInfo",
          component: ShopInfo
        },
        {
          path: "",
          redirect: "/shop/goods"
        }
      ]
    },
    {
      path: "/",
      redirect: "/msite"
    }
  ]
});
