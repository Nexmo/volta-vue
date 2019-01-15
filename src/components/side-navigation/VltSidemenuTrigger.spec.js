import { shallowMount } from '@vue/test-utils';
import VltSidemenuTrigger from './VltSidemenuTrigger';

describe('vlt-sidemenu-trigger', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(VltSidemenuTrigger, {
      propsData: {
        icon: 'rocket',
      },
    });
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly with a rocket icon', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
