import Vue from "vue";
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from "./mutation-types";

export default {
  // [RECEIVE_ADDRESS]是方法名，第二个参数传递包含address的对象
  [RECEIVE_ADDRESS](state, { address }) {
    state.address = address;
  },
  [RECEIVE_CATEGORYS](state, { categorys }) {
    state.categorys = categorys;
  },
  [RECEIVE_SHOPS](state, { shops }) {
    state.shops = shops;
  },
  [RECEIVE_USER_INFO](state, { userInfo }) {
    state.userInfo = userInfo;
  },
  [RESET_USER_INFO](state) {
    state.userInfo = {};
  },
  [RECEIVE_GOODS](state, { goods }) {
    state.goods = goods;
  },
  [RECEIVE_RATINGS](state, { ratings }) {
    state.ratings = ratings;
  },
  [RECEIVE_INFO](state, { info }) {
    state.info = info;
  },
  [INCREMENT_FOOD_COUNT](state, { food }) {
    if (!food.count) {
      // Vue.set(对象，属性名，属性值) 让新增属性也有数据绑定
      Vue.set(food, "count", 1);
      // 将food添加到cartFoods中
      state.cartFoods.push(food);
      // food.count = 1;
    } else {
      food.count++;
    }
  },
  [DECREMENT_FOOD_COUNT](state, { food }) {
    if (food.count) {
      food.count--;
      if (food.count === 0) {
        // 将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1);
      }
    }
  },
  [CLEAR_CART](state) {
    // 清除food中的count
    state.cartFoods.forEach(food => (food.count = 0));
    // 移除购物车中的所有购物项
    state.cartFoods = [];
  },
  [RECEIVE_SEARCH_SHOPS](state, { searchShops }) {
    state.searchShops = searchShops;
  }
};
