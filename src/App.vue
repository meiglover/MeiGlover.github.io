<script setup>
import ButtonList from './components/ButtonList.vue'
import { useDialog } from 'primevue/usedialog'
import AboutUs from './components/AboutUs.vue'
import { FeatureLink } from './constants/links.constants'
import { AboutUsIcon, FeatureIcon } from './constants/images.constants'

const dialog = useDialog()

function aboutAction() {
  dialog.open(AboutUs, { props: { modal: true, draggable: false, dismissableMask: true } })
}
</script>

<template>
  <div class="header">
    <span class="aboutUs" @click="aboutAction">
      <Image class="imageButton" :src="AboutUsIcon" height="100" />
    </span>
    <span>
      <a class="feature" :href="FeatureLink">
        <Image class="imageButton" :src="FeatureIcon" height="100" />
      </a>
    </span>
  </div>
  <ButtonList />
  <DynamicDialog />
</template>

<style>
.header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;

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
}
</style>
