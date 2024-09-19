<script setup>
import ButtonList from './components/ButtonList.vue'
import { useDialog } from 'primevue/usedialog'
import AboutUs from './components/AboutUs.vue'
import { FeatureLink } from './helpers/links.constants'
import { AboutUsIcon, FeatureIcon } from './helpers/images.constants';

const dialog = useDialog()

function aboutAction() {
  dialog.open(AboutUs, { props: { modal: true, draggable: false, dismissableMask: true } })
}
</script>

<template>
  <div class="header">
    <span class="aboutUs" @click="aboutAction">
      <Image class="imageButton" :src=AboutUsIcon height="100" />
    </span>
    <a class="feature" :href="FeatureLink">
      <Image class="imageButton" :src=FeatureIcon height="100" />
    </a>
  </div>
  <ButtonList />
  <DynamicDialog />
</template>

<style>
.header {
  margin: 1vmin;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

.aboutUs {
  img {
    border-radius: 100%;
  }
}

.feature {
  img {
    border-radius: 6px;
  }
}
</style>
