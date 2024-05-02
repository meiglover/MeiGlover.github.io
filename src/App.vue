<script setup>
import ButtonList from './components/ButtonList.vue'
import { useDialog } from 'primevue/usedialog'
import AboutUs from './components/AboutUs.vue'

const dialog = useDialog()
</script>

<template>
  <div class="mainList">
    <span @click="dialog.open(AboutUs, { props: { modal: true, draggable: false } })">
      <Image src="/assets/about_us.png" width="100" class="round imageButton" />
    </span>
    <ButtonList />
  </div>
  <DynamicDialog />
</template>

<style>
.mainList {
  text-align: center;
  img {
    border-radius: 100%;
  }
}

.imageButton:hover {
  cursor: pointer;
  filter: brightness(90%);
}
</style>
