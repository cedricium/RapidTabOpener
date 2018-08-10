<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <h3 class="title is-3">
            <span>{{ group.name }}</span>
          </h3>
          <div class="subtitle">
          <button class="button is-small is-danger"
            @click="deleteGroup">
            Delete Group
          </button>
          </div>
          <b-field grouped type="">
            <b-input v-model="tab" placeholder="e.g. https://example.com/" isValid></b-input>
            <p class="control">
              <button @click="updateGroup" class="button is-text has-text-dark">Add new link</button>
            </p>
          </b-field>
          <Tab v-for="(tab, index) in group.tabs" :key="index" :tab="tab" :index="index" :group="group" />
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import Tab from '@/components/options/Tab.vue';

export default {
  props: ['group'],
  components: {
    Tab
  },
  data() {
    return {
      tab: null,
    }
},
  methods: {
    updateGroup() {
      if (this.tab) {
        this.tab = this.tab.trim();
        if (!this.tab.startsWith('http')) {
          this.tab = `http://${this.tab}`;
        }
        this.$store.commit('UPDATE_GROUP', {id: this.group.id, tab: this.tab});
        this.tab = null;
      }
    },
    deleteGroup() {
      this.$store.commit('DELETE_GROUP', {id: this.group.id});
    }
  }
};
</script>

<style>

</style>
