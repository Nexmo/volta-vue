import { mount } from '@vue/test-utils';
import Vue from 'vue';
import { VltTabs, VltTab } from '..';

const tabClass = 'Vlt-tabs__link';
const activeTabClass = `${tabClass} Vlt-tabs__link_active`;

describe('vlt-tabs', () => {
  let wrapper;

  beforeEach(() => {
    const App = Vue.extend({
      render(createElement) {
        return createElement(VltTabs, {}, [
          createElement(VltTab, { props: { label: 'One' } }),
          createElement(VltTab, { props: { label: 'Two' } }),
          createElement(VltTab, { props: { label: 'Three' } }),
        ]);
      },
    });
    wrapper = mount(App);
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('second tab can be selected', async () => {
    const secondTab = wrapper.findAll('li').at(1);
    secondTab.trigger('click');
    await wrapper.vm.$nextTick();
    expect(secondTab.attributes('class')).toBe(activeTabClass);
  });

  test('second tab can be selected, then third tab', async () => {
    const secondTab = wrapper.findAll('li').at(1);
    secondTab.trigger('click');
    await wrapper.vm.$nextTick();
    expect(secondTab.attributes('class')).toBe(activeTabClass);

    const thirdTab = wrapper.findAll('li').at(2);
    thirdTab.trigger('click');
    await wrapper.vm.$nextTick();
    expect(secondTab.attributes('class')).toBe(tabClass);
    expect(thirdTab.attributes('class')).toBe(activeTabClass);
  });
});
