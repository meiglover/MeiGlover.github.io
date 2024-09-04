<script setup>
import ButtonList from './components/ButtonList.vue'
import { useDialog } from 'primevue/usedialog'
import AboutUs from './components/AboutUs.vue'

const dialog = useDialog()
</script>

<template>
  <div class="header">
    <span class='aboutUs' @click="dialog.open(AboutUs, { props: { modal: true, draggable: false, dismissableMask: true } })">
      <Image src="/assets/about_us.png" height="100" class="round imageButton" />
    </span>
    <span class="feature">
      <Image src="/assets/feature.jpg" height="100" class="round" preview />
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
