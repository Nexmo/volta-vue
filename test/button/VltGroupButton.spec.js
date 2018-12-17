import { shallowMount } from '@vue/test-utils';
import { VltGroupButton } from '../../src/components';

describe('vlt-group-button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(VltGroupButton, {
      propsData: {
        options: ['red', 'yellow', 'blue'],
      },
    });
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly with options ["red", "yellow", "blue"]', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is big', () => {
    wrapper.setProps({ big: true });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('when single selection, "yellow" is emitted', () => {
    wrapper.setProps({ val: undefined });
    wrapper.findAll('button').at(1).trigger('click');
    expect(wrapper.emitted('input')).toBeTruthy();
    expect(wrapper.emitted('input')).toEqual([['yellow']]);
  });

  test('when multi selection, "[ yellow, blue ]" is emitted', () => {
    wrapper.findAll('button').at(1).trigger('click');
    wrapper.findAll('button').at(2).trigger('click');
    expect(wrapper.emitted('input')).toBeTruthy();
    expect(wrapper.emitted('input')).toEqual([[['yellow']], [['blue']]]);
  });
});
