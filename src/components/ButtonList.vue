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
.buttonList {
  text-align: center;
}

.linkButton {
  font-size: 12pt;
  display: inline;
  width: 100%;
  margin: 1vmin;
  height: 6vh;
  background-color: var(--cig-pink-dark);
  border: none;
}
.linkButton:hover {
  filter: brightness(90%);
}

.priority {
  font-size: 14pt;
  height: 10vh;
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
