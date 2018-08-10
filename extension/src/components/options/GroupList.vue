<template>
  <div class="section">
    <div class="container">
      <h1 class="title is-1">Options</h1>
      <button class="button is-info is-outlined is-rounded"
        @click="cardModal">
        Create Group
      </button>

      <EmptyState v-if="$store.state.groups.length === 0"></EmptyState>

      <div class="groups">
        <Group v-for="group in $store.state.groups"
          :key="group.name"
          :group="group"
        ></Group>
      </div>
    </div>
  </div>
</template>

<script>
import CreateGroup from './CreateGroup.vue';
import EmptyState from './EmptyState.vue';
import Group from './Group.vue';

export default {
  components: {
    Group,
    EmptyState
  },
  data() {
    return {
      isComponentModalActive: false
    };
  },
  methods: {
    cardModal() {
      this.$modal.open({
        parent: this,
        component: CreateGroup,
        hasModalCard: true
      });
    }
  }
};
</script>

<style>
.groups {
  margin: 2rem 0;
}
</style>
