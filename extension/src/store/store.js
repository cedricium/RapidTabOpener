import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import browserStorageSync from './plugins';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    idIncrementer: 0,
    groups: []
  },
  /**
   * Source: https://vuex.vuejs.org/guide/mutations.html
   */
  mutations: {
    ADD_GROUP(state, newGroup) {
      state.idIncrementer++;
      state.groups.push(Object.assign({id: state.idIncrementer}, newGroup));
    },
    DELETE_GROUP(state, payload) {
      state.groups = state.groups.filter((group) => group.id !== payload.id);
    },
    UPDATE_GROUP(state, payload) {
      state.groups.find((group) => payload.id === group.id).tabs.push(payload.tab);
    },
    DELETE_TAB(state, payload) {
      let matchedGroup = state.groups.find((group) => payload.group.id === group.id);
      matchedGroup.tabs.splice(payload.index, 1);
    }
  },
  /**
   * Vuex `actions` call mutations but can be asynchronous - meaning they are
   * helpful for making API requests. Will need to decide if manipulating
   * our storage solution (localStorage, indexedDB, or something else) if async
   * capabilities will be needed.
   * 
   * Souce: https://vuex.vuejs.org/guide/actions.html
   */
  actions: {
    ADD_GROUP({commit}, newGroup) {
      commit('ADD_GROUP', newGroup);
    },
    DELETE_GROUP({commit}, groupId) {
      commit('DELETE_GROUP', groupId);
    },
    UPDATE_GROUP({commit}, groupId) {
      commit('UPDATE_GROUP', groupId);
    }
  },
  plugins: [
    createPersistedState(),
    browserStorageSync()
  ]
});
