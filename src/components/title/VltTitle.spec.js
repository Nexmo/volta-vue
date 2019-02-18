import { shallowMount } from '@vue/test-utils';
import { VltTitle } from '..';

describe('vlt-title', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(VltTitle, {
      propsData: {
        icon: 'rocket',
        title: 'Test Title',
      },
    });
  });

  test('renders correctly with text "Test Title" and rocket icon', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('icon is red', () => {
    wrapper.setProps({ color: 'red' });
    expect(wrapper.element).toMatchSnapshot();
  });
});
