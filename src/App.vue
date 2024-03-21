<script setup lang="ts">
import CurrencySelector from '@/components/CurrencySelector';
import CurrencyChecklist from '@/components/CurrencyChecklist';
</script>

<template>
  <div
    :style="{ paddingTop: '20px', paddingBottom: '10px', textAlign: 'center' }"
  >
    Little bit convoluted
  </div>
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
  <div :style="{ paddingTop: '20px' }"></div>
  <div
    :style="{ paddingTop: '20px', paddingBottom: '10px', textAlign: 'center' }"
  >
    Simple (using same composable, but with form inputs)
  </div>
  <CurrencyChecklist
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
