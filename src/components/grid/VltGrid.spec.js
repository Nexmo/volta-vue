import { h } from 'vue';
import { mount } from '@vue/test-utils';
import { VltCol, VltGrid } from '..';

describe('vlt-grid', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount({
      render() {
        return h(VltGrid, {}, [h(VltCol), h(VltCol), h(VltCol)]);
      },
    });
  });

  test('renders correctly with three columns', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
