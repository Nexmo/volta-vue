import { shallowMount } from '@vue/test-utils';
import { VltComposite } from '../../src/components';

describe('vlt-composite', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(VltComposite);
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
