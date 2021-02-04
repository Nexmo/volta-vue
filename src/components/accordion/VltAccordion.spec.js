import { mount } from '@vue/test-utils';
import { VltAccordionItem, VltAccordion } from '.';

describe('vlt-accordion', () => {
  it('should be rendered', async () => {
    const wrapper = mount(VltAccordion);
    wrapper.setProps({ id: 'accq', classNames: 'accordion' });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });
});

describe('vlt-accordion-item', () => {
  it('should be without the active class', () => {
    const wrapper = mount(VltAccordionItem);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should be with the active class', async () => {
    const wrapper = mount(VltAccordionItem);
    wrapper.setProps({ expanded: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should be with the active class after trigger is clicked', async () => {
    const wrapper = mount(VltAccordionItem);
    wrapper.find('.Vlt-accordion__trigger').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });
});
