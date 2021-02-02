import { shallowMount } from '@vue/test-utils';
import { VltIcon } from '..';

describe('vlt-icon', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(VltIcon, {
      propsData: {
        icon: 'bin',
      },
    });
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is red', async () => {
    wrapper.setProps({ color: 'red' });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });
});
