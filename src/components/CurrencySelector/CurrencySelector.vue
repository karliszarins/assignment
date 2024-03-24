<script setup lang="ts">
import type Currency from '@/types/Currency';

import { useSelector } from '@/composables/useSelector';
import { List, SelectedList } from '@/components/CurrencySelector';

const { currencies, selected } = defineProps<{
  currencies?: Currency[];
  selected?: number[];
}>();

const { selectedCurrencies, selectedState, toggleItem, removeItem } =
  useSelector(currencies, selected);
</script>

<template>
  <div class="currency-selector">
    <SelectedList :currencies="selectedCurrencies" @remove="removeItem" />
    <List
      :currencies="currencies"
      :selected="selectedState"
      @toggle="toggleItem"
    />
  </div>
</template>
