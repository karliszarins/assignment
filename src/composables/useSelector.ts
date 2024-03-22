import { ref, computed, Ref, ComputedRef } from 'vue';

import { Currency } from '@/types';

interface Selector {
  selectedCurrencies: ComputedRef<Currency[]>;
  selectedState: Ref<number[]>;
  toggleItem: (id: number) => Ref<number[]>;
  removeItem: (id: number) => Ref<number[]>;
}

export function useSelector(
  currencies: Currency[] = [],
  selected: number[] = []
): Selector {
  const selectedState = ref(Array.from(new Set(selected)));

  const selectedCurrencies = computed(
    () =>
      selectedState.value
        .map((id) => currencies.find((currency) => currency.id === id))
        .filter((currency): currency is Currency => currency !== undefined) // typeguard so that TS doesn't complain
    // .filter(Boolean) // remove undefined
  );

  const toggleItem = (id: number) => {
    if (selectedState.value.includes(id)) {
      let i = selectedState.value.indexOf(id);
      if (i > -1) {
        selectedState.value.splice(i, 1);
      }
    } else {
      selectedState.value.push(id);
    }
    return selectedState;
  };

  const removeItem = (id: number) => {
    let i = selectedState.value.indexOf(id);
    if (i > -1) {
      selectedState.value.splice(i, 1);
    }
    return selectedState;
  };

  return { selectedCurrencies, selectedState, toggleItem, removeItem };
}
