import { shallowMount } from '@vue/test-utils';
import { VltFlash } from '..';

describe('vlt-flash', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(VltFlash);
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is type critical', () => {
    wrapper.setProps({ type: 'critical' });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is visible', () => {
    wrapper.setProps({ visible: true });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is dismissable', async () => {
    wrapper.setProps({ dismissable: true });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('can be dismissed', async () => {
    wrapper.setProps({ dismissable: true });
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted('dismissed')).toBeTruthy();
  });

  test('is a bottom flash', async () => {
    wrapper.setProps({ bottom: true });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is a small flash', async () => {
    wrapper.setProps({ small: true });
    expect(wrapper.element).toMatchSnapshot();
  });
});
