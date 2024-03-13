<script setup lang="ts">
import { Currency } from './types';
import { useSelector } from '../../composables/useSelector';
import { List, SelectedList } from './';

const { currencies, selected } = defineProps<{
  currencies?: Currency[];
  selected?: number[];
}>();

const { selectedCurrencies, selectedState, toggleItem, removeItem } =
  useSelector(currencies, selected);
</script>

<template>
  <div class="currency-selector">
    <SelectedList :currencies="selectedCurrencies" :removeItem="removeItem" />
    <List
      :currencies="currencies"
      :selected="selectedState"
      :toggleItem="toggleItem"
    />
  </div>
</template>
