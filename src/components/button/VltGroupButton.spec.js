import { mount } from '@vue/test-utils';
import { VltGroupButton } from '..';

describe('vlt-group-button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(VltGroupButton, {
      propsData: {
        options: ['red', 'yellow', 'blue'],
      },
    });
  });

  test('renders correctly with options ["red", "yellow", "blue"]', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is big', async () => {
    wrapper.setProps({ big: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  test('when single selection, "yellow" is emitted', async () => {
    wrapper.setProps({ val: undefined });
    await wrapper.vm.$nextTick();
    wrapper
      .findAll('button')
      .at(1)
      .trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('input')).toBeTruthy();
    expect(wrapper.emitted('input')).toEqual([['yellow']]);
  });

  test('when multi selection, "[ yellow, blue ]" is emitted', async () => {
    wrapper
      .findAll('button')
      .at(1)
      .trigger('click');
    await wrapper.vm.$nextTick();
    wrapper
      .findAll('button')
      .at(2)
      .trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('input')).toBeTruthy();
    expect(wrapper.emitted('input')).toEqual([[['yellow']], [['blue']]]);
  });
});
