import { shallowMount } from '@vue/test-utils';
import { VltModal } from '..';

describe('vlt-modal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(VltModal, {
      propsData: {
        title: 'Title',
      },
    });
  });

  test('can be opened', () => {
    wrapper.setProps({ visible: true });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders correctly with title "Title"', () => {
    wrapper.setProps({ visible: true });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is a message modal', () => {
    wrapper.setProps({
      message: true,
      visible: true,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('has customer Ok button text "Delete"', () => {
    wrapper.setProps({
      okText: 'Delete',
      visible: true,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('can be cancelled', () => {
    wrapper.setProps({ visible: true });
    wrapper.findAll('button').at(0).trigger('click');
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  test('can be confirmed', () => {
    wrapper.setProps({ visible: true });
    wrapper.findAll('button').at(1).trigger('click');
    expect(wrapper.emitted('confirm')).toBeTruthy();
  });

  test('modal without footer', () => {
    wrapper.setProps({
      noFooter: true,
      visible: true,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('can be closed', () => {
    wrapper.setProps({ visible: true });
    wrapper.find('.Vlt-modal__dismiss').trigger('click');
    expect(wrapper.emitted('close')).toBeTruthy();
  });
});
