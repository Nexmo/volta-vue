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

  test('renders fine when unbordered is true and trigger is true', () => {
    wrapper.setProps({
      options: ['red', 'yellow', 'blue'],
      unbordered: true,
      trigger: true,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('when "showSelection" is true, button text is "yellow"', () => {
    wrapper.setProps({
      options: ['red', 'yellow', 'blue'],
      showSelection: true,
    });
    wrapper.find('button').trigger('click');
    wrapper.findAll('.Vlt-dropdown__link').at(1).trigger('click');

    expect(wrapper.find('.Vlt-dropdown__btn').text()).toBe('yellow');
    expect(wrapper.vm.selectedOption).toBe('yellow');
  });

  test('when has label and "showSelection" is false, button text is "Pick one"', () => {
    wrapper.setProps({
      options: ['red', 'yellow', 'blue'],
      label: 'Pick one',
    });
    wrapper.find('button').trigger('click');
    wrapper.findAll('.Vlt-dropdown__link').at(1).trigger('click');

    expect(wrapper.find('.Vlt-dropdown__btn').text()).toBe('Pick one');
    expect(wrapper.vm.selectedOption).toBe('yellow');
  });

  test('when has label, "showSelection" is true and "hideLabel" is true,  dropdown button has text "yellow"', () => {
    wrapper.setProps({
      options: ['red', 'yellow', 'blue'],
      label: 'Pick one',
      showSelection: true,
      hideLabel: true,
    });
    wrapper.find('button').trigger('click');
    wrapper.findAll('.Vlt-dropdown__link').at(1).trigger('click');

    expect(wrapper.find('.Vlt-dropdown__btn').text()).toBe('yellow');
    expect(wrapper.vm.selectedOption).toBe('yellow');
  });

  test('when has label, "showSelection" is true and "hideLabel" is false,  dropdown button has text "Pick one: yellow"', () => {
    wrapper.setProps({
      options: ['red', 'yellow', 'blue'],
      label: 'Pick one',
      showSelection: true,
    });
    wrapper.find('button').trigger('click');
    wrapper.findAll('.Vlt-dropdown__link').at(1).trigger('click');

    expect(wrapper.find('.Vlt-dropdown__btn').text().replace(/[\s]{2,}/g, ' ')).toContain('Pick one: yellow');
    expect(wrapper.vm.selectedOption).toBe('yellow');
  });
});
