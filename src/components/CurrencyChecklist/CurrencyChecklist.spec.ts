import { render } from '@testing-library/vue';
import CurrencyChecklist from '@/components/CurrencyChecklist';
import { nextTick } from 'vue';

describe('CurrencyChecklist component', () => {
  it('can check and uncheck checkboxes for selected currencies', async () => {
    let props = {
      currencies: [
        { id: 1, symbol: 'EUR' },
        { id: 2, symbol: 'PLN' },
        { id: 3, symbol: 'GEL' },
      ],
      selected: [],
    };
    let result = render(CurrencyChecklist, {
      props,
    });
    const checkbox = <HTMLInputElement>(
      result.container.querySelector('#checkbox-1')
    );

    expect(checkbox.checked).toBe(false);
    checkbox.click();
    expect(checkbox.checked).toBe(true);
    checkbox.click();
    expect(checkbox.checked).toBe(false);
    checkbox.click();
    expect(checkbox.checked).toBe(true);
  });

  it('can remove currency with "x" button click', async () => {
    let props = {
      currencies: [
        { id: 1, symbol: 'EUR' },
        { id: 2, symbol: 'PLN' },
        { id: 3, symbol: 'GEL' },
        { id: 4, symbol: 'DKK' },
        { id: 5, symbol: 'CZK' },
        { id: 6, symbol: 'GBP' },
        { id: 7, symbol: 'SEK' },
        { id: 8, symbol: 'USD' },
        { id: 9, symbol: 'RUB' },
      ],
      selected: [1, 2, 3, 8, 9],
    };
    let result = render(CurrencyChecklist, {
      props,
    });

    expect(result.container.querySelectorAll('.remove').length).toBe(
      props.selected.length
    );

    const buttons = result.container.querySelectorAll('.remove');

    for (let i = 0; i < buttons.length; i++) {
      (buttons[i] as HTMLButtonElement).click();
      await nextTick();
    }

    expect(result.container.querySelectorAll('.remove').length).toBe(0);
  });
});
