import { mount } from '@vue/test-utils';
import { VltDropdown } from '..';

describe('vlt-dropdown', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(VltDropdown);
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders correctly with label "Pick one"', async () => {
    wrapper.setProps({
      label: 'Pick one',
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  test('can open dropdown panel with basic options', async () => {
    wrapper.setProps({
      options: ['red', 'yellow', 'blue'],
    });
    await wrapper.vm.$nextTick();
    wrapper.find('button').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders fine when unbordered is true and trigger is true', async () => {
    wrapper.setProps({
      options: ['red', 'yellow', 'blue'],
      unbordered: true,
      trigger: true,
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  test('when "showSelection" is true, button text is "yellow"', async () => {
    wrapper.setProps({
      options: ['red', 'yellow', 'blue'],
      showSelection: true,
    });
    await wrapper.vm.$nextTick();
    wrapper.find('button').trigger('click');
    wrapper.findAll('.Vlt-dropdown__link').at(1).trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.find('.Vlt-dropdown__btn').text()).toBe('yellow');
    expect(wrapper.vm.selectedOption).toBe('yellow');
  });

  test('when has label and "showSelection" is false, button text is "Pick one"', async () => {
    wrapper.setProps({
      options: ['red', 'yellow', 'blue'],
      label: 'Pick one',
    });
    await wrapper.vm.$nextTick();
    wrapper.find('button').trigger('click');
    wrapper.findAll('.Vlt-dropdown__link').at(1).trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.Vlt-dropdown__btn').text()).toBe('Pick one');
    expect(wrapper.vm.selectedOption).toBe('yellow');
  });

  test('when has label, "showSelection" is true and "hideLabel" is true,  dropdown button has text "yellow"', async () => {
    wrapper.setProps({
      options: ['red', 'yellow', 'blue'],
      label: 'Pick one',
      showSelection: true,
      hideLabel: true,
    });
    await wrapper.vm.$nextTick();
    wrapper.find('button').trigger('click');
    wrapper.findAll('.Vlt-dropdown__link').at(1).trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.find('.Vlt-dropdown__btn').text()).toBe('yellow');
    expect(wrapper.vm.selectedOption).toBe('yellow');
  });

  test('when has label, "showSelection" is true and "hideLabel" is false,  dropdown button has text "Pick one: yellow"', async () => {
    wrapper.setProps({
      options: ['red', 'yellow', 'blue'],
      label: 'Pick one',
      showSelection: true,
    });
    await wrapper.vm.$nextTick();
    wrapper.find('button').trigger('click');
    wrapper.findAll('.Vlt-dropdown__link').at(1).trigger('click');
    await wrapper.vm.$nextTick();
    expect(
      wrapper
        .find('.Vlt-dropdown__btn')
        .text()
        .replace(/[\s]{2,}/g, ' ')
    ).toContain('Pick one: yellow');
    expect(wrapper.vm.selectedOption).toBe('yellow');
  });
});
