<script setup>
import { SubscriptionLinks, PPVLinks, PurchaseLinks, SocialLinks } from '@/helpers/links.constants'
import staticVariables from '/static/staticVariables.json'

// Set to empty string when no current promo is active.
const currentPromo = staticVariables.promo
</script>

<template>
  <div class="buttonList">
    <a v-for="item in SubscriptionLinks" :key="item.name" :href="item.link">
      <Button class="subscriptionButton" :label="item.name" :badge="currentPromo"></Button>
    </a>
    <strong class="subscriptionNotice">
      Subscribers will ALWAYS be first priority and get the best prices on all PPV content.
    </strong>
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
  background: linear-gradient(
    0.25turn,
    var(--cig-blue) 0%,
    var(--cig-pink) 20% 80%,
    var(--cig-blue) 100%
  );

  .p-button-label {
    font-weight: 600;
  }
}

.subscriptionNotice {
  font-weight: bold;
  color: var(--cig-pink);
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
  height: 8vh;
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
