<script setup>
import { SubscriptionLinks, PPVLinks, PurchaseLinks, SocialLinks } from '@/helpers/links.constants'
import { SubscriptionNotice, RequestNotice } from '@/helpers/text.constants'
import { onBeforeMount, ref } from 'vue'

const publicConstants = ref(null)
onBeforeMount(async () => {
  publicConstants.value = await fetch('/publicConstants.json').then((response) => response.json())
})
</script>

<template>
  <div class="buttonList">
    <a v-for="item in SubscriptionLinks" :key="item.name" :href="item.link">
      <Button
        class="subscriptionButton"
        :label="item.name"
        :badge="publicConstants?.promo"
      ></Button>
    </a>
    <strong class="subscriptionNotice">
      {{ SubscriptionNotice }}
    </strong>
    <a v-for="item in PPVLinks" :key="item.name" :href="item.link">
      <Button class="ppvButton" :label="item.name"></Button>
    </a>
    <strong class="requestNotice">
      {{ RequestNotice }}
    </strong>
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
    var(--color-custom-secondary) 0%,
    var(--color-custom-primary) 20% 80%,
    var(--color-custom-secondary) 100%
  );

  .p-button-label {
    font-weight: 600;
  }
}

.subscriptionNotice {
  font-weight: bold;
  color: var(--color-custom-primary);
}

.requestNotice {
  font-weight: bold;
  color: var(--color-custom-secondary);
}

.ppvButton {
  display: inline;
  width: 100%;
  margin: 1vmin;
  border: none;

  font-size: 14pt;
  height: 10vh;
  background-color: var(--color-custom-primary);
}

.purchaseButton {
  font-size: 12pt;
  display: inline;
  width: 100%;
  margin: 1vmin;
  height: 8vh;
  background-color: var(--color-custom-primary-dark);
  border: none;
}

.socialButton {
  display: inline;
  margin: 1vmin;
  border: none;

  font-size: 10pt;
  background-color: var(--color-custom-secondary);
  width: 30%;
  margin-right: 0;
  height: 10vh;
}
</style>
