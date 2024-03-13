<script setup lang="ts">
import CurrencySelector from './components/CurrencySelector';
</script>

<template>
  <CurrencySelector
    :currencies="[
      { id: 1, symbol: 'EUR' },
      { id: 2, symbol: 'PLN' },
      { id: 3, symbol: 'GEL' },
      { id: 4, symbol: 'DKK' },
      { id: 5, symbol: 'CZK' },
      { id: 6, symbol: 'GBP' },
      { id: 7, symbol: 'SEK' },
      { id: 8, symbol: 'USD' },
      { id: 9, symbol: 'RUB' },
    ]"
    :selected="[1, 6]"
  />
</template>
