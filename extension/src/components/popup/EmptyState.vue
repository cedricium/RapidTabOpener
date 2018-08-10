<template>
<section class="section empty-state">
  <div class="container">
    <div class="content">
      <small class="is-block">Uh-oh! Looks like you haven't added any groups yet.</small>
      <small class="is-block">Head on over to the <a class="has-text-info" @click="openOptionsPage">options page to get started</a>.</small>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  methods: {
    openOptionsPage() {
      browser.runtime.openOptionsPage();
    }
  }
};
</script>

<style scoped>
section.section.empty-state {
  padding-bottom: 1rem;
}
</style>
