<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <GroupList/>
  </div>
</template>

<script>
import GroupList from '@/components/options/GroupList.vue';

export default {
  name: 'app',
  components: {
    GroupList
  }
};
</script>

<style>
html,
body {
  height: 100%;
  background: #fafafa;
}
</style>
