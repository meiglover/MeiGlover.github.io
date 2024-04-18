<script setup>
const props = defineProps({
  list: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="buttonList">
    <a v-for="item in props.list" :key="item.name" :href="item.link">
      <Button :class="item.class" :label="item.name"></Button>
    </a>
  </div>
</template>

<style>
:root {
  --cig-pink: #df809e;
  --cig-pink-dark: #b65b79;
  --cig-pink-extra-dark: #973f5e;
  --cig-blue: #6fa0d9;
}

.buttonList {
  text-align: center;
}

.linkButton {
  font-size: 12pt;
  display: inline;
  width: 100%;
  margin: 1vmin;
  background-color: var(--cig-pink-dark);
  border: none;
}

.priority {
  font-size: 14pt;
  height: 12vh;
  background-color: var(--cig-pink);
}

.social {
  font-size: 10pt;
  background-color: var(--cig-blue);
  width: 30%;
  margin-right: 0;
  height: 10vh;
}
</style>
