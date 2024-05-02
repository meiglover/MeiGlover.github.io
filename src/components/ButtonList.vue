<script setup>
import { SubscriptionLinks, PPVLinks, PurchaseLinks, SocialLinks } from '@/helpers/links.constants'
</script>

<template>
  <div class="buttonList">
    <a v-for="item in SubscriptionLinks" :key="item.name" :href="item.link">
      <Button class="subscriptionButton" :label="item.name"></Button>
    </a>
    <a v-for="item in PPVLinks" :key="item.name" :href="item.link">
      <Button class="ppvButton" :label="item.name"></Button>
    </a>
    <a v-for="item in PurchaseLinks" :key="item.name" :href="item.link">
      <Button class="purchaseButton" :label="item.name"></Button>
    </a>
    <a v-for="item in SocialLinks" :key="item.name" :href="item.link">
      <Button class="socialButton" :label="item.name" rounded></Button>
    </a>
  </div>
</template>

<style>
.buttonList {
  text-align: center;
}

.subscriptionButton {
  display: inline;
  width: 100%;
  margin: 1vmin;
  border: none;

  font-size: 14pt;
  height: 10vh;
  background-color: var(--cig-pink);
}

.ppvButton {
  display: inline;
  width: 100%;
  margin: 1vmin;
  border: none;

  font-size: 14pt;
  height: 10vh;
  background-color: var(--cig-pink);
}

.purchaseButton {
  font-size: 12pt;
  display: inline;
  width: 100%;
  margin: 1vmin;
  height: 6vh;
  background-color: var(--cig-pink-dark);
  border: none;
}

.socialButton {
  display: inline;
  margin: 1vmin;
  border: none;

  font-size: 10pt;
  background-color: var(--cig-blue);
  width: 30%;
  margin-right: 0;
  height: 10vh;
}
</style>
