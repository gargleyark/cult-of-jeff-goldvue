import { shallowMount, mount } from '@vue/test-utils';
import MiniBasket from '@/components/MiniBasket.vue';

describe('MiniBasket.vue', () => {
  it('renders nothing when passed an empty basket', () => {
    const basket = {
      items: [],
      total: 0,
      shipping: 5,
    };
    const wrapper = shallowMount(MiniBasket, {
      propsData: { basket },
    });
    expect(wrapper.text()).toMatch('');
  });

  it('renders a list of products when there are items in the basket', () => {
    const basket = {
      items: [{}, {}, {}, {}],
      total: 0,
      shipping: 5,
    };

    const wrapper = shallowMount(MiniBasket, {
      propsData: {
        basket,
      },
    });

    expect(wrapper.contains('.items')).toBe(true);
  });
});
