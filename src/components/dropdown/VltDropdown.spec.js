import { shallowMount } from '@vue/test-utils';
import { VltDropdown } from '..';

describe('vlt-dropdown', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(VltDropdown);
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders correctly with label "Pick one"', () => {
    wrapper.setProps({
      label: 'Pick one',
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('can open dropdown panel with basic options', () => {
    wrapper.setProps({
      options: ['red', 'yellow', 'blue'],
    });
    wrapper.find('button').trigger('click');
    expect(wrapper.element).toMatchSnapshot();
  });

  test('second option is selected and selection is shown', () => {
    wrapper.setProps({
      options: ['red', 'yellow', 'blue'],
      showSelection: true,
    });
    wrapper.find('button').trigger('click');
    wrapper.findAll('.Vlt-dropdown__link').at(1).trigger('click');
    expect(wrapper.element).toMatchSnapshot();
  });

  test('has label, second option is selected, selection not shown', () => {
    wrapper.setProps({
      options: ['red', 'yellow', 'blue'],
      label: 'Pick one',
    });
    wrapper.find('button').trigger('click');
    wrapper.findAll('.Vlt-dropdown__link').at(1).trigger('click');
    expect(wrapper.element).toMatchSnapshot();
  });

  test('has label, second option is selected, selection shown', () => {
    wrapper.setProps({
      options: ['red', 'yellow', 'blue'],
      label: 'Pick one',
      showSelection: true,
      hideLabel: true,
    });
    wrapper.find('button').trigger('click');
    wrapper.findAll('.Vlt-dropdown__link').at(1).trigger('click');
    expect(wrapper.element).toMatchSnapshot();
  });

  test('has label, second option is selected, selection and label shown', () => {
    wrapper.setProps({
      options: ['red', 'yellow', 'blue'],
      label: 'Pick one',
      showSelection: true,
    });
    wrapper.find('button').trigger('click');
    wrapper.findAll('.Vlt-dropdown__link').at(1).trigger('click');
    expect(wrapper.element).toMatchSnapshot();
  });
});
