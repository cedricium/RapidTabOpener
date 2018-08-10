<template>
  <div id="app">
    <Groups></Groups>
  </div>
</template>

<script>
import Groups from '@/components/popup/Groups.vue';

export default {
  name: 'popup',
  components: {
    Groups
  }
};
</script>

<style>
html,
body {
  height: 100%;
  background: #fafafa;
  width: 450px;
}
</style>
