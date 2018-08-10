<template>
<section class="section empty-state is-unselectable">
  <div class="container">
    <div class="content">
      <figure class="image">
        <img src="@/assets/empty-state.svg" class="empty-state-img"/>
      </figure>
      <p class="has-text-centered is-size-5">No groups found.</p>
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
    }
  }
  /* eslint-enable no-undef */
};
</script>

<style scoped>
figure.image .empty-state-img {
  width: 33%;
}

section.section.empty-state {
  padding-bottom: 1rem;
}
</style>
