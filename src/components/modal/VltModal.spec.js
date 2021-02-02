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

  test('can be opened', async () => {
    wrapper.setProps({ visible: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders correctly with title "Title"', async () => {
    wrapper.setProps({ visible: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is a message modal', async () => {
    wrapper.setProps({
      message: true,
      visible: true,
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  test('has customer Ok button text "Delete"', async () => {
    wrapper.setProps({
      okText: 'Delete',
      visible: true,
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  test('can be cancelled', async () => {
    wrapper.setProps({ visible: true });
    await wrapper.vm.$nextTick();
    wrapper.findAll('button').at(0).trigger('click');
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  test('can be confirmed', async () => {
    wrapper.setProps({ visible: true });
    await wrapper.vm.$nextTick();
    wrapper.findAll('button').at(1).trigger('click');
    expect(wrapper.emitted('confirm')).toBeTruthy();
  });

  test('modal without footer', async () => {
    wrapper.setProps({
      noFooter: true,
      visible: true,
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  test('can be closed', async () => {
    wrapper.setProps({ visible: true });
    await wrapper.vm.$nextTick();
    wrapper.find('.Vlt-modal__dismiss').trigger('click');
    expect(wrapper.emitted('close')).toBeTruthy();
  });
});
