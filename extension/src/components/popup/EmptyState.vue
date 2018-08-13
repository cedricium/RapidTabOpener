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
  /* eslint-disable no-undef */
  methods: {
    openOptionsPage() {
      browser.runtime.openOptionsPage();
      window.close();
    }
  }
  /* eslint-enable no-undef */
};
</script>

<style scoped>
section.section.empty-state {
  padding-bottom: 1rem;
}
</style>
