<script setup>
import ButtonList from './components/ButtonList.vue'
import { Links } from './helpers/links.constants'
</script>

<template>
  <div class="mainList">
    <Image src="/assets/pfp.png" width="128" class="round" />
    <ButtonList :list="Links" />
  </div>
</template>

<style>
.mainList {
  text-align: center;
  img {
    border-radius: 100%;
  }
}
</style>
