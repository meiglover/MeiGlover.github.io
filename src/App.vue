<script setup>
import ButtonList from './components/ButtonList.vue'
import { useDialog } from 'primevue/usedialog'
import AboutUs from './components/AboutUs.vue'

const dialog = useDialog()

function aboutAction() {
  dialog.open(AboutUs, { props: { modal: true, draggable: false, dismissableMask: true } })
}

function featureAction() {
  window.location.href = 'https://www.loyalfans.com/coupleinglove'
}
</script>

<template>
  <div class="header">
    <span class="aboutUs" @click="aboutAction">
      <Image src="/assets/about_us.png" height="100" class="round imageButton" />
    </span>
    <span class="feature" @click="featureAction">
      <Image src="/assets/feature.jpg" height="100" class="round imageButton" />
    </span>
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

.imageButton:hover {
  cursor: pointer;
  filter: brightness(90%);
}
</style>
