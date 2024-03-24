<script setup lang="ts">
import type Currency from '@/types/Currency';

import { useSelector } from '@/composables/useSelector';

const { currencies, selected } = defineProps<{
  currencies?: Currency[];
  selected?: number[];
}>();

const { selectedCurrencies, selectedState, removeItem } = useSelector(
  currencies,
  selected
);
</script>

<template>
  <div class="currency-selector">
    <div class="selector-selected">
      <TransitionGroup tag="ul" name="list">
        <li v-for="currency in selectedCurrencies" :key="currency.id">
          <span>{{ currency.symbol }}</span>
          <button class="remove" @click="removeItem(currency.id)">x</button>
        </li>
      </TransitionGroup>
    </div>
    <div class="selector-available" v-if="currencies && currencies.length">
      <ul>
        <li v-for="currency in currencies" :key="currency.id">
          <input
            type="checkbox"
            :id="`checkbox-${currency.id}`"
            :value="currency.id"
            name="currencies"
            v-model="selectedState"
          />
          <label :for="`checkbox-${currency.id}`">
            <span>{{ currency.symbol }}</span>
          </label>
        </li>
      </ul>
    </div>
    <div class="selector-empty" v-else>No currencies available.</div>
  </div>
</template>
