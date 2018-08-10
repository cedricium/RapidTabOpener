<template>
  <section class="section">
    <h3 class="title is-3">Your Groups</h3>
    <EmptyState v-if="groups.length === 0" />
    <div class="columns is-mobile is-variable is-2">
      <div class="column">
        <Group v-for="(group, index) in evenGroups" :key="index" :group="group"></Group>
      </div>
      <div class="column">
        <Group v-for="(group, index) in oddGroups" :key="index" :group="group"></Group>
      </div>
    </div>
  </section>
</template>

<script>
import Group from '@/components/popup/Group.vue';
import EmptyState from '@/components/popup/EmptyState.vue';
import {mapState} from 'vuex';

export default {
  data() {
    return {
    }
  },
  components: {
    Group,
    EmptyState
  },
  computed: {
    ...mapState(['groups']),
    evenGroups() {
      return this.groups.filter((group, index) => index % 2 === 0);
    },
    oddGroups() {
      return this.groups.filter((group, index) => index % 2 !== 0);
    }
  },
};
</script>

<style scoped>
section.section {
  padding-top: 1rem;
}
</style>
