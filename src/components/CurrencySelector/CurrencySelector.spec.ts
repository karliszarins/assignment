import { describe, it, expect } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import CurrencySelector from '@/components/CurrencySelector';
import { Currency } from '@/types';

type DefaultProps = { currencies: Currency[]; selected: number[] };

describe('CurrencySelector component', () => {
  let currencies: Currency[],
    selected: number[],
    wrapper: VueWrapper,
    props: DefaultProps;

  beforeEach(() => {
    currencies = [
      { id: 1, symbol: 'EUR' },
      { id: 2, symbol: 'PLN' },
      { id: 3, symbol: 'GEL' },
      { id: 4, symbol: 'DKK' },
      { id: 5, symbol: 'CZK' },
      { id: 6, symbol: 'GBP' },
      { id: 7, symbol: 'SEK' },
      { id: 8, symbol: 'USD' },
      { id: 9, symbol: 'RUB' },
    ];

    selected = [1, 4, 6];

    wrapper = mount(CurrencySelector, {
      props: { currencies, selected },
    });

    props = wrapper.props() as DefaultProps;
  });

  it(`can receive props`, () => {
    expect(props.currencies).toEqual(currencies);
    expect(props.selected).toEqual(selected);
  });

  it('can toggle currency with a "currency" button click', async () => {
    const buttons = wrapper.findAll('.selector-available button');

    expect(wrapper.findAll('.selector-selected li').length).toBe(
      props.selected.length
    );

    let before = wrapper.findAll('.selector-selected li').length;

    await buttons[0].trigger('click');

    let after = wrapper.findAll('.selector-selected li').length;

    if (before > after) {
      expect(wrapper.findAll('.selector-selected li').length).toBe(
        props.selected.length - 1
      );
    } else {
      expect(wrapper.findAll('.selector-selected li').length).toBe(
        props.selected.length + 1
      );
    }
  });

  it('can remove currency with "x" button click', async () => {
    const buttons = wrapper.findAll('.selector-selected button.remove');

    expect(wrapper.findAll('.selector-selected li').length).toBe(
      props.selected.length
    );

    for (let i = 0; i < buttons.length; i++) {
      await buttons[i].trigger('click');
    }

    expect(wrapper.findAll('.selector-selected li').length).toBe(0);
  });
});
