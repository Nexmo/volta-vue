
import Vue from 'vue';
import { mount } from '@vue/test-utils';
import { VltCol, VltGrid } from '../../src/components';

describe('vlt-grid', () => {
  let wrapper;

  beforeEach(() => {
    const App = Vue.extend({
      render(createElement) {
        return createElement(VltGrid, {}, [
          createElement(VltCol),
          createElement(VltCol),
          createElement(VltCol),
        ]);
      },
    });
    wrapper = mount(App);
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly with three columns', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
