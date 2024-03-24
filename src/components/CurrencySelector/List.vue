<script setup lang="ts">
import type Currency from '@/types/Currency';

const { currencies, selected } = defineProps<{
  currencies?: Currency[];
  selected?: number[];
}>();

const emit = defineEmits<{
  toggle: [id: number];
}>();
</script>

<template>
  <div class="selector-available" v-if="currencies && currencies.length">
    <ul>
      <li v-for="currency in currencies" :key="currency.id">
        <button
          :class="{ active: selected?.includes(currency.id) }"
          @click="emit('toggle', currency.id)"
        >
          <span>{{ currency.symbol }}</span>
        </button>
      </li>
    </ul>
  </div>
  <div class="selector-empty" v-else>No currencies available.</div>
</template>
