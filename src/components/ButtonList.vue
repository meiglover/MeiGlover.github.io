<script setup>
const props = defineProps({
  list: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <ul v-for="item in props.list" :key="item.name" class="buttonList">
    <a :href="item.link">
      <Button class="w-full" :label="item.name"></Button>
    </a>
  </ul>
</template>

<style>
.buttonList {
  padding: 8px;
}

.w-full {
  width: 100%;
}
</style>
