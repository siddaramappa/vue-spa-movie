import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        id: 1,
        baseUrl: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCL-XQsw6BYkZGaVX2HnedlgWD78XSfI3s"
    },
    mutations: {
        sub() {
            console.log("hai");
        }
    },
    actions: {
        //register actions
        signup({ commit }, authData) {
            // console.log(this.state.baseUrl);
            // let baseUrl =
            //     "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCL-XQsw6BYkZGaVX2HnedlgWD78XSfI3s";
            axios
                .post(this.state.baseUrl, authData)
                .then(res => {
                    router.push("/");
                    console.log(res);
                })
                .catch(error => {
                    console.log(error);
                });
            console.log("using vuex", authData);
            commit("sub");
        }
    },
    modules: {}
});