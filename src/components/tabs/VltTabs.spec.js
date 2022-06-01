import { mount } from '@vue/test-utils';
import { h } from 'vue';
import { VltTabs, VltTab } from '..';

const tabClass = 'Vlt-tabs__link';
const activeTabClass = `Vlt-tabs__link_active ${tabClass}`;

describe('vlt-tabs', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount({
      render() {
        return h(VltTabs, {}, [
          h(VltTab, { label: 'One' }),
          h(VltTab, { label: 'Two' }),
          h(VltTab, { label: 'Three' }),
        ]);
      },
    });
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
