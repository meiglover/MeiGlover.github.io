<script setup>
import ButtonList from './components/ButtonList.vue'
import { Links } from './helpers/links.constants'
</script>

<template>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-JLPRHL43KM"></script>
  <script>
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', 'G-JLPRHL43KM')
  </script>
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
