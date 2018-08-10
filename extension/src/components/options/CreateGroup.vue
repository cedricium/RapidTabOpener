<template>
  <div class="card">
    <div class="card-content">
      <h3 class="title is-3">Create a new group</h3>
      <h6 class="subtitle has-text-grey is-6">Group URLs into specific categories for more granular control of your tabs.</h6>
      <b-field label="Choose a group name">
        <b-input
          v-model="group.name"
          required
          expanded
          placeholder="e.g. Work">
        </b-input>
      </b-field>

      <b-field label="Choose a color for this group">
        <swatches v-model="group.color" :colors="colors" inline />
      </b-field>

      <b-field
        :message="whichMsg('location')"
        label="Select the window location">
        <b-select
          v-model="group.windowSettings.location"
          expanded
          placeholder="Select location…">
          <option value="current">Current window</option>
          <option value="new">New window</option>
        </b-select>
      </b-field>

      <b-field
        :message="whichMsg('type')"
        label="Select the window type">
        <b-select
          v-model="group.windowSettings.type"
          expanded
          placeholder="Select type…">
          <option value="normal">Normal window</option>
          <option value="private">Private window</option>
        </b-select>
      </b-field>

      <div class="content">
        <small>
          <strong>Note:</strong>
          If a group is selected in a window with any of the window settings mismatched
          (i.e. private window set but group selected in a normal window),
          then a new window will be opened regardless of the settings set.
        </small>
      </div>

      <div class="">
        <div class="field is-grouped">
          <p class="control">
            <button class="button is-outlined"
              @click="$parent.close()">
              Cancel
            </button>
          </p>
          <p class="control">
            <button class="button is-info"
              @click="create()">
              Create new group
            </button>
          </p>
        </div>
      </div>
      <div v-if="error" class="error has-text-danger">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import Swatches from 'vue-swatches';
import 'vue-swatches/dist/vue-swatches.min.css';

export default {
  data() {
    return {
      colors: [
        'rgb(255, 59, 48)',
        'rgb(255, 149, 0)',
        'rgb(255, 204, 0)',
        'rgb(76, 217, 100)',
        'rgb(90, 200, 250)',
        'rgb(0, 122, 255)',
        'rgb(88, 86, 214)',
        'rgb(255, 45, 85)',
      ],
      error: null,
      group: {
        // id: '',
        color: 'rgb(255, 59, 48)',
        name: null,
        tabs: [],
        windowSettings: {
          location: 'current',
          type: 'normal',
        }
      }
    };
  },
  components: { Swatches },
  computed: {
  },
  methods: {
    whichMsg(selectType) {
      switch (selectType) {
        case 'location':
          return this.group.windowSettings.location === 'current'
            ? 'This group will be opened in the currently open / visible window.'
            : 'A new window will be opened for this specific group.';
        case 'type':
          return this.group.windowSettings.type === 'normal'
            ? 'Window type of normal will be opened for this group.'
            : 'Window type of incognito (Chrome) / private (Firefox) will be opened for this group.';
      }
    },
    create() {
      this.error = null;
      this.group.name = this.group.name.trim();
      // ensure all values of group are filled in
      const allFieldsFilledIn = Object
        .keys(this.group)
        .every(key => !!this.group[key]);

      // if not all filled in, specify `this.error` and return early
      if (!allFieldsFilledIn) {
        this.error = 'Make sure all of the above fields are filled out!';
        return;
      }

      // else, make request with service to create this group
      this.$store.commit('ADD_GROUP', this.group);

      // after request is made, close the modal
      this.$parent.close();
    }
  }
};
</script>

<style>
div.animation-content {
  width: 50%
}

div.card {
  padding: 0 2rem 1rem 2rem;
}

div.error {
  margin: 1rem 0 0 0;
}

.vue-swatches__container.vue-swatches--inline,
.vue-swatches__wrapper {
  padding: 0 !important;
}

.vue-swatches__swatch {
  margin-bottom: 0 !important;
}
</style>
