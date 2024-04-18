<script setup>
import ButtonList from 'src/components/ButtonList.vue'
import { Links } from 'src/helpers/links.constants.js'
</script>

<template>
  <div>
    <ButtonList :list="Links" />
  </div>
</template>
