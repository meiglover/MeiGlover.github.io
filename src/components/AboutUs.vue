<script setup>
import { AboutUsDescription } from '@/helpers/text.constants'
import { AboutUsImages } from '@/helpers/images.constants'
</script>

<template>
  <div class="aboutUsDialog">
    <Galleria class="imageGallery" :value="AboutUsImages" :numVisible="5">
      <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" style="width: 100%" />
      </template>
      <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" style="width: 100%" />
      </template>
    </Galleria>
    <div class="aboutUsDescription">
      {{ AboutUsDescription }}
    </div>
  </div>
</template>

<style>
.aboutUsDialog {
  display: grid;
  align-items: center;
  max-width: 640px;

  .aboutUsDescription {
    text-align: center;
  }
}
</style>
