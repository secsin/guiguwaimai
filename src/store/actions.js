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
import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings,
  reqSearchShop
} from "../api";

export default {
  // 异步获取地址
  async getAddress({ commit, state }) {
    const geohash = state.latitude + "," + state.longitude;
    const result = await reqAddress(geohash);
    if (result.code === 0) {
      const address = result.data;
      commit(RECEIVE_ADDRESS, { address });
    }
  },
  // 异步获取轮播数据
  async getCategorys({ commit }) {
    const result = await reqCategorys();
    if (result.code === 0) {
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS, { categorys });
    }
  },
  // 异步获取附近商家
  async getShops({ commit, state }) {
    const { longitude, latitude } = state;
    const result = await reqShops({ latitude, longitude });
    if (result.code === 0) {
      const shops = result.data;
      commit(RECEIVE_SHOPS, { shops });
    }
  },
  // 同步获取用户信息
  recordUser({ commit }, userInfo) {
    commit(RECEIVE_USER_INFO, { userInfo });
  },
  // 异步获取用户信息
  async getUserInfo({ commit }) {
    const result = await reqUserInfo();
    if (result.code === 0) {
      const userInfo = result.data;
      commit(RECEIVE_USER_INFO, { userInfo });
    }
  },
  // 异步登出
  async logout({ commit }) {
    const result = await reqLogout();
    if (result.code === 0) {
      commit(RESET_USER_INFO);
    }
  },
  // 异步获取商家商品信息
  async getShopGoods({ commit }, callback) {
    const result = await reqShopGoods();
    if (result.code === 0) {
      const goods = result.data;
      commit(RECEIVE_GOODS, { goods });
      // 回调
      callback && callback();
    }
  },
  // 异步获取商家信息
  async getShopInfo({ commit }) {
    const result = await reqShopInfo();
    if (result.code === 0) {
      const info = result.data;
      commit(RECEIVE_INFO, { info });
    }
  },
  // 异步获取商家商品信息
  async getShopRatings({ commit }) {
    const result = await reqShopRatings();
    if (result.code === 0) {
      const ratings = result.data;
      commit(RECEIVE_RATINGS, { ratings });
    }
  },
  // 同步获取商家商品信息
  updateFoodCount({ commit }, { isAdd, food }) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, { food });
    } else {
      commit(DECREMENT_FOOD_COUNT, { food });
    }
  },
  // 同步获取商家商品信息
  clearCart({ commit }) {
    commit(CLEAR_CART);
  },
  // 异步获取搜索商家信息
  async searchShops({ commit, state }, keyword) {
    const geohash = state.latitude + "," + state.longitude;
    const result = await reqSearchShop(geohash, keyword);
    if (result.code === 0) {
      const searchShops = result.data;
      commit(RECEIVE_SEARCH_SHOPS, { searchShops });
    }
  }
};
