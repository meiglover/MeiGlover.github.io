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
    <div class="subscriptionWrapper">
      <a v-for="item in SubscriptionLinks" :key="item.name" :href="item.link">
        <Button
          class="subscriptionButton"
          :label="item.name"
          :badge="publicConstants?.promo"
        ></Button>
      </a>
    </div>
    <div class="subscriptionNotice">
      {{ SubscriptionNotice }}
    </div>
    <div class="ppvWrapper">
      <a v-for="item in PPVLinks" :key="item.name" :href="item.link">
        <Button class="ppvButton" :label="item.name"></Button>
      </a>
    </div>
    <div class="requestNotice">
      {{ RequestNotice }}
    </div>
    <div class="purchaseWrapper">
      <a v-for="item in PurchaseLinks" :key="item.name" :href="item.link">
        <Button class="purchaseButton" :label="item.name"></Button>
      </a>
    </div>
    <div class="socialWrapper">
      <a v-for="item in SocialLinks" :key="item.name" :href="item.link">
        <Button class="socialButton" :label="item.name" rounded></Button>
      </a>
    </div>
  </div>
</template>

<style>
.buttonList {
  text-align: center;
}

.subscriptionWrapper {
  display: grid;
  grid-template-columns: 1fr;

  .subscriptionButton {
    font-size: 14pt;
    background: linear-gradient(
      0.25turn,
      var(--color-custom-secondary) 0%,
      var(--color-custom-primary) 20% 80%,
      var(--color-custom-secondary) 100%
    );
    height: 10vh;
    border: none;
    width: 100%;

    .p-button-label {
      font-weight: 600;
    }
  }
}

.subscriptionNotice {
  font-weight: bold;
  color: var(--color-custom-primary);
  width: 100%;
}

.ppvWrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;

  .ppvButton {
    font-size: 14pt;
    background-color: var(--color-custom-primary);
    height: 10vh;
    border: none;
    width: 100%;
  }
}

.requestNotice {
  font-weight: bold;
  color: var(--color-custom-secondary);
  width: 100%;
}

.purchaseWrapper {
  display: grid;
  grid-template-columns: 1fr;

  .purchaseButton {
    font-size: 12pt;
    background-color: var(--color-custom-primary-dark);
    height: 8vh;
    border: none;
    width: 100%;
  }
}

.socialWrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  .socialButton {
    font-size: 10pt;
    background-color: var(--color-custom-secondary);
    height: 10vh;
    border: none;
    width: 100%;
  }
}
</style>
