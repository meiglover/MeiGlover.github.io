<script setup>
import ButtonList from './components/ButtonList.vue'
import { useDialog } from 'primevue/usedialog'
import ContentRequestForm from './components/ContentRequestForm.vue'
import { FeatureLink, FixedLink } from './constants/links.constants'
import { ProfileIcon, FeatureIcon, FixedIcon } from './constants/images.constants'

const dialog = useDialog()

function contentRequestAction() {
  dialog.open(ContentRequestForm, { props: { modal: true, draggable: false } })
}
</script>

<template>
  <a class="feature" @click="contentRequestAction">
    <Image class="imageButton fixed" :src="FixedIcon" height="100" />
  </a>
  <div class="header">
    <span>
      <Image :src="ProfileIcon" height="100" />
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

  .feature {
    img {
      border-radius: 6px;
    }
  }
}

.fixed {
  position: fixed;
  z-index: 100;
  bottom: 1rem;
  right: 2rem;
  opacity: 0.95;
}
</style>
