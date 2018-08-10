<template>
  <div class="box" @click="openGroup(group)">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <div class="top-row is-clearfix">  
            <strong class="">{{ group.name }}</strong>
            <div class="category is-inline-flex is-pulled-right" :style="{borderColor: group.color}"></div>
          </div>
          <small>{{ group.tabs.length }} {{ group.tabs.length === 1 ? 'site' : 'sites'}}</small>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: ['group'],
  data() {
    return {
      colors: [
        'red',
        'orange',
        'yellow',
        'green',
        'teal',
        'blue',
        'purple',
        'pink',
      ]
    }
  },
  /* eslint-disable no-undef */
  methods: {
    openGroup(group) {
      browser.runtime.sendMessage({open: group});
      window.close();
    }
  },
  /* eslint-enable no-undef */
  computed: {
    randomColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    }
  }
};
</script>

<style>
:root {
  --red-category: rgb(255, 59, 48);
  --orange-category: rgb(255, 149, 0);
  --yellow-category: rgb(255, 204, 0);
  --green-category: rgb(76, 217, 100);
  --teal-category: rgb(90, 200, 250);
  --blue-category: rgb(0, 122, 255);
  --purple-category: rgb(88, 86, 214);
  --pink-category: rgb(255, 45, 85);
}

.box:not(body) {
  cursor: pointer;
  border-radius: 12px;
}

div.category {
  border-radius: 50%;
  height: 1rem;
  width: 1rem;
  border: solid 0.25rem;
  background: white;
}

div.category.red { border-color: var(--red-category); }
div.category.orange { border-color: var(--orange-category); }
div.category.yellow { border-color: var(--yellow-category); }
div.category.green { border-color:  var(--green-category); }
div.category.teal { border-color:   var(--teal-category); }
div.category.blue { border-color:   var(--blue-category); }
div.category.purple { border-color: var(--purple-category); }
div.category.pink { border-color:   var(--pink-category); }
</style>
