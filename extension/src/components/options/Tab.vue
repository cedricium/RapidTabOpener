<template>
  <b-field grouped>
    <b-input v-model="tab" disabled></b-input>
    <p class="control">
      <button class="button is-danger is-outlined" @click="deleteTab">Delete</button>
    </p>
  </b-field>  
</template>

<script>
export default {
  props: ['group', 'index', 'tab'],
  methods: {
    deleteTab() {
      this.$store.commit('DELETE_TAB', {group: this.group, index: this.index, tab: this.tab});
    }
  }
};
</script>

<style scoped>
</style>
