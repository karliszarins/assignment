<script setup lang="ts">
import { Currency } from '@/types';

const { currencies, selected, toggleItem } = defineProps<{
  currencies?: Currency[];
  selected?: number[];
  toggleItem: Function;
}>();
</script>

<template>
  <div class="selector-available" v-if="currencies && currencies.length">
    <ul>
      <li v-for="currency in currencies" :key="currency.id">
        <button
          :class="{ active: selected?.includes(currency.id) }"
          @click="toggleItem(currency.id)"
        >
          <span>{{ currency.symbol }}</span>
        </button>
      </li>
    </ul>
  </div>
  <div class="selector-empty" v-else>No currencies available.</div>
</template>
