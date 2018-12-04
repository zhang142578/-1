import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
let store = new Vuex.Store({
    // 1. state
    state:{
        goods:[],
        num:0
    },

    // // 2. getters
    getters:{
        // 参数列表state指的是state数据
        getgoods(state){
            return state.goods;
        },
        getNum(state){
            return state.num;
        }
    },
    // 3. actions
    // 通常跟api接口打交道
    actions:{
        // 设置城市信息
        // 参数列表：{commit, state}
        // state指的是state数据
        // commit调用mutations的方法 
        // name就是调用此方法时要传的参数
        // setCityName({commit,state}, name){
        //     // 跟后台打交道
        //     // 调用mutaions里面的方法
        //     commit("setCity", name);
        // }
    },
    // 4. mutations
    mutations:{
        // state指的是state的数据
        // name传递过来的数据
        setgoods(state, name){
            state.goods.push(name)  ;//将传参设置给state的city
        },
        changegoods(state,name){
           // console.log(name.index);
            state.goods[name.index].num+=name.num;
        },
        setNum(state,name){
            state.num=name;
        }
    }
});

export default store;