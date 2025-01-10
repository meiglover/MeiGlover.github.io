<script setup>
const frameWidth = Math.min(640, window.innerWidth - 64)
const frameHeight = 2800 - window.innerHeight
</script>

<template>
  <div class="contentRequestFormDialog">
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSf5YpqvyQNhXrQ-fx9eQTAuSj8NrQnnLT9H_nvhizoTn5r_Ag/viewform?embedded=true"
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
