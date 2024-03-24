<script setup lang="ts">
import type Currency from '@/types/Currency';

const { currencies } = defineProps<{
  currencies?: Currency[];
}>();

const emit = defineEmits<{
  remove: [id: number];
}>();
</script>

<template>
  <div class="selector-selected">
    <TransitionGroup tag="ul" name="list">
      <li v-for="currency in currencies" :key="currency.id">
        <span>{{ currency.symbol }}</span>
        <button class="remove" @click="emit('remove', currency.id)">x</button>
      </li>
    </TransitionGroup>
  </div>
</template>
