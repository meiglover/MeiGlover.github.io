<script setup>
const frameWidth = Math.min(640, window.innerWidth - 64)
const frameHeight = 2800 - window.innerHeight
</script>

<template>
  <div class="contentRequestFormDialog">
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSd5-F4x7wzlhwJ9WcJUlepaAU8seIHr31AAU4P9AamK5hYxrQ/viewform?embedded=true"
      :width="frameWidth"
      :height="frameHeight"
      scrolling="no"
      frameborder="0"
      >Loading…</iframe
    >
  </div>
</template>

<style>
.contentRequestFormDialog {
  display: grid;
  align-items: center;
}
</style>
