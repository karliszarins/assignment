import { ref, computed, Ref } from 'vue';

import { Currency } from '../components/CurrencySelector/types';

export function useSelector(
  currencies: Currency[] = [],
  selected: number[] = []
) {
  const filterSelected = (items: number[] = []): number[] => {
    return items.filter((value, index, self) => self.indexOf(value) === index); // remove duplicates
  };

  const selectedState: Ref<number[]> = ref(filterSelected(selected));

  const selectedCurrencies = computed<Currency[]>(
    () =>
      selectedState.value
        .map((id) => currencies.find((currency) => currency.id === id))
        .filter((currency): currency is Currency => currency !== undefined) // typeguard so that TS doesn't complain
    // .filter(Boolean) // remove undefined
  );

  const toggleItem = (id: number): Ref => {
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

  const removeItem = (id: number): Ref => {
    let i = selectedState.value.indexOf(id);
    if (i > -1) {
      selectedState.value.splice(i, 1);
    }
    return selectedState;
  };

  return { selectedCurrencies, selectedState, toggleItem, removeItem };
}
