<script setup lang="ts">
import { Currency } from '@/types';

const { currencies, removeItem } = defineProps<{
  currencies?: Currency[];
  removeItem: Function;
}>();
</script>

<template>
  <div class="selector-selected">
    <TransitionGroup tag="ul" name="list">
      <li v-for="currency in currencies" :key="currency.id">
        <span>{{ currency.symbol }}</span>
        <button class="remove" @click="removeItem(currency.id)">x</button>
      </li>
    </TransitionGroup>
  </div>
</template>
