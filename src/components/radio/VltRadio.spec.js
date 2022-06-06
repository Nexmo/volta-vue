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

  test('renders correctly with label "Do I pass?", name "pass" and value "Yes"', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('emits "yes" on value change', async () => {
    await wrapper.find('input').trigger('change');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('update:modelValue')).toEqual([['Yes']]);
  });
});
