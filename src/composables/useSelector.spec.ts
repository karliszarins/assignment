import { describe, it, expect } from 'vitest';
import { useSelector } from '@/composables/useSelector';
import { Currency } from '@/types';

describe('useSelector composable', () => {
  const currencies: Currency[] = [
    { id: 1, symbol: 'EUR' },
    { id: 2, symbol: 'USD' },
    { id: 3, symbol: 'GBP' },
  ];
  const selected: number[] = [1];

  it('initializes selectedCurrencies based on passed props', () => {
    const { selectedCurrencies } = useSelector(currencies, selected);
    expect(selectedCurrencies.value.length).toBe(1);
    expect(selectedCurrencies.value[0].symbol).toBe('EUR');
  });

  it('toggles currency', () => {
    const { toggleItem, selectedState } = useSelector(currencies, selected);
    toggleItem(2);
    expect(selectedState.value.includes(2)).toBe(true);
    expect(selectedState.value.length).toBe(2);

    toggleItem(1);
    expect(selectedState.value.includes(1)).toBe(false);
    expect(selectedState.value.length).toBe(1);
  });

  it('removes currency', () => {
    const { removeItem, selectedState } = useSelector(currencies, selected);
    removeItem(1);
    expect(selectedState.value.includes(1)).toBe(false);
    expect(selectedState.value.length).toBe(0);
  });
});
