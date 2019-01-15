import { shallowMount } from '@vue/test-utils';
import { VltRadio } from '..';

describe('vlt-radio', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(VltRadio, {
      propsData: {
        label: 'Do I pass?',
        name: 'pass',
        val: 'Yes',
      },
    });
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly with label "Do I pass?", name "pass" and value "Yes"', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('emits "yes" on value change', () => {
    wrapper.find('input').trigger('click');
    expect(wrapper.emitted('input')).toEqual([['Yes']]);
  });
});
