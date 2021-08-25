import Vue from "vue";
import Vuex from "vuex";
import serverAPI from "../apis/server";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentRole: null,
    isLoggedIn: false,
    availableItemsData: [],
    pages: 1,
    currentPages: 1,
    filtered: false,
    currentSearch: null,
    sellerItems: [],
    wishlistItems: [],
  },
  mutations: {
    CHANGE_LOGIN(state, data) {
      state.isLoggedIn = data;
    },
    ASSIGN_ROLE(state, data) {
      state.currentRole = data;
    },
    PUSH_DATA(state, data) {
      state.availableItemsData = data;
    },
    PUSH_WISHLIST(state, data) {
      state.wishlistItems = data;
    },
    PUSH_SELLER_DATA(state, data) {
      state.sellerItems = data;
    },
    STATE_PAGES(state, data) {
      state.pages = data;
    },
    CHANGE_PAGES(state, data) {
      state.currentPages = data;
    },
    FILTERED_STATUS(state, data) {
      state.filtered = data;
    },
    FILTERED_SEARCH(state, data) {
      state.currentSearch = data;
    },
  },
  actions: {
    async register(context, data) {
      try {
        await serverAPI.post("/register", data);
        Vue.$toast.success("Registered!");
      } catch (error) {
        Vue.$toast.error(error.message);
      }
    },

    async login(context, data) {
      try {
        const response = await serverAPI.post("/login", data);
        localStorage.setItem("access_token", response.data.access_token);
        context.commit("CHANGE_LOGIN", true);
        console.log(response.data.role);
        context.commit("ASSIGN_ROLE", response.data.role);
        Vue.$toast.success("Logged In!");
      } catch (error) {
        Vue.$toast.error(error.message);
      }
    },

    async logout(context) {
      try {
        localStorage.removeItem("access_token");
        context.commit("CHANGE_LOGIN", false);
        context.commit("ASSIGN_ROLE", null);
        Vue.$toast.success("Logged out!");
      } catch (error) {
        Vue.$toast.error(error.message);
      }
    },

    async fetchItems(context, page) {
      let pagequery = "";
      try {
        if (!page) {
          pagequery = `page=0`;
        } else {
          let destination = page - 1;
          pagequery = `page=${destination}`;
        }
        const response = await serverAPI.get(
          `/buyer/items/active?${pagequery}`
        );
        context.commit("PUSH_DATA", response.data.data.rows);
        const totalPage = Math.ceil(response.data.data.count / 6);
        context.commit("STATE_PAGES", totalPage);
        context.commit("CHANGE_PAGES", page || 1);
        context.commit("FILTERED_STATUS", false);
      } catch (error) {
        Vue.$toast.error(error.message);
      }
    },

    async fetchPendingItems(context, page) {
      let pagequery = "";
      try {
        if (!page) {
          pagequery = `page=0`;
        } else {
          let destination = page - 1;
          pagequery = `page=${destination}`;
        }
        const response = await serverAPI.get(
          `/buyer/items/pending?${pagequery}`
        );
        context.commit("PUSH_DATA", response.data.data.rows);
        const totalPage = Math.ceil(response.data.data.count / 6);
        context.commit("STATE_PAGES", totalPage);
        context.commit("CHANGE_PAGES", page || 1);
        context.commit("FILTERED_STATUS", false);
      } catch (error) {
        Vue.$toast.error(error.message);
      }
    },

    async fetchWishlist(context, page) {
      let pagequery = "";
      try {
        if (!page) {
          pagequery = `page=0`;
        } else {
          let destination = page - 1;
          pagequery = `page=${destination}`;
        }
        const response = await serverAPI.get(`/buyer/wishlist?${pagequery}`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        context.commit("PUSH_WISHLIST", response.data.data.rows);
        const totalPage = Math.ceil(response.data.data.count / 6);
        context.commit("STATE_PAGES", totalPage);
        context.commit("CHANGE_PAGES", page || 1);
        context.commit("FILTERED_STATUS", false);
      } catch (error) {
        Vue.$toast.error(error.message);
      }
    },

    async getFilter(context, data) {
      const { searchInput, page } = data;
      try {
        let keyword = "";
        let pagequery = "";

        if (!page) {
          pagequery = `page=0`;
        } else {
          let destination = page - 1;
          pagequery = `page=${destination}`;
        }

        if (searchInput) {
          keyword = `search=${searchInput}`;
          context.commit("FILTERED_SEARCH", searchInput);
        }

        const result = await serverAPI.get(
          `/buyer/active/items?${keyword}&${pagequery}`
        );
        const totalPage = Math.ceil(result.data.data.count / 6);
        context.commit("STATE_PAGES", totalPage);
        context.commit("PUSH_DATA", result.data.data.rows);
        context.commit("FILTERED_STATUS", true);
        context.commit("CHANGE_PAGES", page || 1);
      } catch (error) {
        Vue.$toast.error(error.message);
      }
    },

    async createInvoice(context, data) {
      try {
        console.log("fetching");
        const invoiceUrl = await serverAPI.post("/buyer/createInvoice", data, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        console.log(invoiceUrl);
        Vue.$toast.success("Please check your email for payment!")
      } catch (error) {
        Vue.$toast.error(error.message);
      }
    },

    async fetchSellerItem(context) {
      try {
        const response = await serverAPI.get("/seller/items", {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        console.log(response.data);
        context.commit("PUSH_SELLER_DATA", response.data);
      } catch (error) {
        Vue.$toast.error(error.message);
      }
    },

    async addItem(context, data) {
      try {
        const fd = new FormData();
        fd.append("name", data.name);
        fd.append("imageUrl", data.imgUrl);
        fd.append("price", data.price);
        await serverAPI.post("/seller/items", fd, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
      } catch (error) {
        Vue.$toast.error(error.message);
      }
    },

    async deleteItem(context, id) {
      try {
        await serverAPI.delete(`/seller/items/${id}`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
      } catch (error) {
        Vue.$toast.error(error.message);
      }
    },

    async addToWishlist(context, id) {
      try {
        await serverAPI.get(`/buyer/wishlist/${id}`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        Vue.$toast.success("Added to Wishlist!");
      } catch (error) {
        Vue.$toast.error(error.message);
      }
    },

    async deleteWishlist(context, id) {
      try {
        await serverAPI.delete(`/buyer/wishlist/${id}`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        Vue.$toast.success("Cancelled!");
      } catch (error) {
        Vue.$toast.error(error.message);
      }
    },
  },
  modules: {},
});
