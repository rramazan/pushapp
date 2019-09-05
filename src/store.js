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
        applicationFilterList: {},
        currentFilter: {
            platform: 0,
            rating: 0
        }
    },
    getters: {
        getApps(state) {
            return state.apps;
        },
        getCurrentAppsList(state) {
            let heroes = {applications: []};
            if (state.currentFilter.platform) {
                state.currentAppsList.applications.map((i) => {
                    if (state.currentFilter.platform < 0) {
                        i.platform === 'android'? heroes.applications.push(i): '';
                    } else {
                        i.platform !== 'android'? heroes.applications.push(i): '';
                    }
                });
            }
            if (state.currentFilter.rating) {
                state.currentAppsList.applications.map((i) => {
                    parseInt(i.rating) === parseInt(state.currentFilter.rating) ? heroes.applications.push(i): '';
                });
            }
            else {
                heroes.applications = state.currentAppsList.applications;
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
        },
        getCurrentFilter(state) {
            return state.currentFilter;
        },
        getApplicationFilterList(state) {
            return state.applicationFilterList;
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
        },
        setCurrentFilter(state, filter) {
            state.currentFilter = filter;
        },
        setApplicationFilterList(state) {
            for (let i in state.apps) {
                state.applicationFilterList[i] = {
                    platform: 0,
                    rating: 0
                };
            }
        },
        changeFilterPlatform(state, options) {
            Vue.set(state.applicationFilterList[options.name], 'platform', options.platform);
        },
        changeFilterList(state, options) {
            Vue.set(state.applicationFilterList[options.name], 'rating', options.rating);
        },
    },
    actions: {
        init(context) {
            if (!context.state.currentButton) {
                context.commit('setMapApps');
                context.commit('setButtonList');
                context.commit('setCurrentButton', context.state.buttonList[1]);
                context.commit('setCurrentAppsList', context.state.mapApps[context.state.buttonList[1]]);
                context.commit('setApplicationFilterList');
            }
        },
        changeCurrentAppsList(context, item) {
            context.commit('setCurrentButton', item);
            context.commit('setCurrentAppsList', context.state.mapApps[item]);
        },
        changeCurrentFilter(context, item) {
            context.commit('setCurrentFilter', item);
        }
    }
})
