import Vue from 'vue'
import Vuex from 'vuex'
import dJson from './assets/apps'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        apps: dJson,
        currentButton: '',
        currentAppsList: [],
        buttonList: [],
        mapApps: {},
        currentFilter:{
            platform: null,
            rating: null,
        },

    },
    getters: {
        getApps(state) {
            return state.apps;
        },
        getCurrentAppsList(state) {
            let heroes = state.currentAppsList;
            if (state.platform) {
                heroes.applications = heroes.applications.filter((i) => {
                    return i.platform === state.platform;
                });
            }
            if (state.rating) {
                heroes.applications = heroes.applications.filter((i) => {
                    return i.rating === state.rating;
                });
            }
            return heroes;
        },
        getButtonList(state) {
            return state.buttonList;
        },
        getCurrentButton(state) {
            return state.currentButton;
        },
        getMapApps(state) {
            return state.mapApps;
        }
    },
    mutations: {
        setCurrentButton(state, current) {
            state.currentButton = current;
        },
        setButtonList(state) {
            for (let i in state.apps) {
                state.buttonList.push(state.apps[i].name);
            }
        },
        setCurrentAppsList(state, name) {
            state.currentAppsList = state.apps[name];
        },
        setMapApps(state) {
            for (let i in state.apps) {
                state.mapApps[state.apps[i].name] = i;
            }
        }
    },
    actions: {
        init(context) {
            if(!context.state.currentButton) {
                context.commit('setMapApps');
                context.commit('setButtonList');
                context.commit('setCurrentButton', context.state.buttonList[1]);
                context.commit('setCurrentAppsList', context.state.mapApps[context.state.buttonList[1]]);
            }
        },
        changeCurrentAppsList(context, item) {
            context.commit('setCurrentButton', item);
            context.commit('setCurrentAppsList', context.state.mapApps[item]);
        }
    }
})
