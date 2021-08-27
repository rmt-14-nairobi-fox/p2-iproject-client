import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index"
import travelAxios from "../apis/travel"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        messages: [],
        isLoggedIn: false,
        travels: [],
        wishlists: [],
        travel: {},
        wishlist: {},
        user: {},
        categories: []
    },
    mutations: {
        PUSH_MESSAGE(state, payload) {
            state.messages.push(payload)
        },
        FETCHING_ALL_TRAVELS(state, data) {
            state.travels = data;
        },
        FETCHING_ALL_WISHLISTS(state, data) {
            state.wishlists = data;
        },
        FETCHING_ONE_WISHLIST_BY_PK(state, data) {
            state.wishlist = data;
        },
        FETCHING_ONE_TRAVEL_BY_PK(state, data) {
            state.travel = data;
        },
        CHANGE_IS_LOGGED_IN(state, data) {
            state.isLoggedIn = data;
        },
        USER_LOGGED_IN(state, data) {
            state.user = data
        },
        ADDING_WISHLIST_BY_DESTINATION_ID(state, data) {
            state.travel = data
        },
        BRING_DATA_TO_FORM_EDIT(state, data) {
            state.travel = data
        },
        FETCHING_ALL_CATEGORIES(state, data) {
            state.categories = data
        }
    },
    actions: {
        async handleLogin(context, payload) {
            // console.log(payload, "ini store");
            try {
                // const result = productAxios.post("/customers/login")
                const result = await travelAxios({
                    method: "POST",
                    url: "/login",
                    data: {
                        email: payload.email,
                        password: payload.password
                    }
                })
                localStorage.setItem("access_token", result.data.access_token)
                context.commit("CHANGE_IS_LOGGED_IN", true)
                Vue.$toast.success(`Login Success... Hello ${result.data.email}`);
                if (localStorage.getItem("access_token")) {
                    router.push("/")
                    Vue.$toast.open({
                        message: `Loading Data... please wait`,
                        type: "info",
                    })
                }
            } catch (err) {
                Vue.$toast.open({
                    message: `${err.message}`,
                    type: 'error',
                });
            }
        },
        async handleRegister(context, payload) {
            try {
                const result = await travelAxios({
                    method: "POST",
                    url: "/register",
                    data: {
                        email: payload.email,
                        password: payload.password
                    }
                })
                // console.log(result);
                localStorage.setItem("access_token", result.data.access_token)
                context.commit("CHANGE_IS_LOGGED_IN", true)
                context.commit("USER_LOGGED_IN", result.data)
                Vue.$toast.success(`Login Success... Hello ${result.data.email}`);
                router.push("/")
                Vue.$toast.open({
                    message: `Loading Data... please wait`,
                    type: "info",
                });
            } catch (err) {
                Vue.$toast.open({
                    message: `${err.message}`,
                    type: 'error',
                });
            }
        },
        async handleGoogleLogin(context, payload) {
            // console.log(payload.access_token, "ini store"); 
            try {
                const result = await travelAxios({
                    method: "POST",
                    url: "/auth/google",
                    data: {
                        access_token: payload.access_token
                    }
                })
                localStorage.setItem("access_token", result.data.access_token);
                context.commit("CHANGE_IS_LOGGED_IN", true)
                Vue.$toast.success(`Login Success... Hello ${result.data.email}`);
                router.push("/")
                Vue.$toast.open({
                    message: `Loading Data... please wait`,
                    type: "info",
                });
            } catch (err) {
                Vue.$toast.open({
                    message: `${err.message}`,
                    type: 'error',
                });
            }
        },

        async findUserLoginned(context) {
            try {
                const result = await travelAxios({
                    method: "GET",
                    url: "/users",
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    }
                })
                context.commit("USER_LOGGED_IN", result.data)
            } catch (err) {
                console.log(err.message);
            }
        },
        async findAllDestinations(context) {
            try {
                const result = await travelAxios({
                    method: "GET",
                    url: "/destinations",
                })
                context.commit("FETCHING_ALL_TRAVELS", result.data)
                Vue.$toast.open({
                    message: `Loading Data... please wait`,
                    type: "info",
                })
            } catch (err) {
                Vue.$toast.open({
                    message: 'Something went wrong!',
                    type: 'error',
                });
            }
        },
        async fetchAllWishlists(context) {
            try {
                const result = await travelAxios({
                    method: "GET",
                    url: "/wishlists",
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    }
                })
                Vue.$toast.open({
                    message: `Loading Data... please wait`,
                    type: "info",
                })
                context.commit("FETCHING_ALL_WISHLISTS", result.data)
            } catch (err) {
                Vue.$toast.open({
                    message: 'Something went wrong!',
                    type: 'error',
                });
            }
        },
        async deleteTravel(context, travelId) {
            // console.log(travelId, "store");
            try {
                Vue.$toast.open({
                    message: `Deleting product... please wait`,
                    type: "info",
                });
                await travelAxios({
                    method: "DELETE",
                    url: `/destinations/${travelId}`,
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    }
                })
                context.dispatch("findAllDestinations")
            } catch (err) {
                Vue.$toast.open({
                    message: `Canceled!`,
                    type: "info",
                });
            }
        },
        async addDestinationToWishlist(context, travelId) {
            try {
                const result = await travelAxios({
                    method: "POST",
                    url: `/destinations/${travelId}`,
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    }
                })
                context.commit("ADDING_WISHLIST_BY_DESTINATION_ID", result.data)
                Vue.$toast.success(`Added to your Wish Lists`);
                router.push('/wishlists')
            } catch (err) {
                Vue.$toast.open({
                    message: `${err.message}`,
                    type: 'error',
                });
            }
        },
        async fetchTravel(context, travelId) {
            try {
                const result = await travelAxios({
                    method: "GET",
                    url: `/destinations/${travelId}`,
                })
                Vue.$toast.open({
                    message: `Loading Data... please wait`,
                    type: "info",
                })
                router.push(`/destinations/${travelId}`)
                context.commit("FETCHING_ONE_TRAVEL_BY_PK", result.data)
            } catch (err) {
                Vue.$toast.open({
                    message: 'Something went wrong!',
                    type: 'error',
                });
            }
        },
        async formEdit(context, travelId) {
            try {
                const result = await travelAxios({
                    method: "GET",
                    url: `destinations/${travelId}`,
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    }
                })
                context.commit("BRING_DATA_TO_FORM_EDIT", result.data)
                Vue.$toast.open({
                    message: `Loading Data... please wait`,
                    type: "info",
                })
                router.push(`/formEdit/${travelId}`)
            } catch (err) {
                Vue.$toast.open({
                    message: 'Something went wrong!',
                    type: 'error',
                });
            }
        },
        async clickEditButton(context, payload) {
            Vue.$toast.open({
                message: `Editing data... please wait`,
                type: "info",
            });
            try {
                await travelAxios({
                    method: "PUT",
                    url: `/destinations/${payload.id}`,
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    },
                    data: payload.form
                })
                context.dispatch("findAllDestinations")
                router.push('/')
                Vue.$toast.success(`Destination has been updated!`);
            } catch (err) {
                Vue.$toast.open({
                    message: `${err.message}`,
                    type: 'error',
                });
            }
        },
        async clickCreateButton(context, payload) {
            try {
                await travelAxios({
                    method: "POST",
                    url: '/destinations',
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    },
                    data: payload
                })
                Vue.$toast.open({
                    message: `Creating data... please wait`,
                    type: "info",
                });
                context.dispatch("findAllDestinations")
                router.push('/')
                Vue.$toast.success(`New Destination Added!`);
            } catch (err) {
                Vue.$toast.open({
                    message: `${err.message}`,
                    type: 'error',
                });
            }
        },
        async fetchCategories(context) {
            try {
                const result = await travelAxios({
                    method: "GET",
                    url: "/categories",
                })
                context.commit("FETCHING_ALL_CATEGORIES", result.data)
                Vue.$toast.open({
                    message: `Loading Form... please wait`,
                    type: "info",
                })
            } catch (err) {
                Vue.$toast.open({
                    message: 'Something went wrong!',
                    type: 'error',
                });
            }
        },
        async checkOutPackage(context, payload) {
            // console.log(payload);
            try {
                Vue.$toast.open({
                    message: `Sending Email... please wait`,
                    type: "info",
                })
                await travelAxios({
                    method: "POST",
                    url: '/wishlists/nodemailer',
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    },
                    data: payload
                })
                // console.log("berhasil axios");
                context.dispatch("fetchAllWishlists")
                Vue.$toast.success("Email Sent!, Please check your email inbox");
            } catch (err) {
                Vue.$toast.open({
                    message: 'Something went wrong!',
                    type: 'error',
                });
            }
        },
        signOut(context) {
            localStorage.clear()
            context.commit("CHANGE_IS_LOGGED_IN", false)
            Vue.$toast.success(`Sign out success`);
            router.push("/login")
        },
    },
    modules: {},
});
