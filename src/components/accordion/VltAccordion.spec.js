import { mount } from '@vue/test-utils';
import { VltAccordionItem, VltAccordion } from '.';

describe('vlt-accordion', () => {
  it('should be rendered', () => {
    const wrapper = mount(VltAccordion);
    wrapper.setProps({ id: 'accq', classNames: 'accordion' });
    expect(wrapper.element).toMatchSnapshot();
  });
});

describe('vlt-accordion-item', () => {
  it('should be without the active class', () => {
    const wrapper = mount(VltAccordionItem);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should be with the active class', () => {
    const wrapper = mount(VltAccordionItem);
    wrapper.setProps({ expanded: true });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should be with the active class after trigger is clicked', () => {
    const wrapper = mount(VltAccordionItem);
    wrapper.find('.Vlt-accordion__trigger').trigger('click');
    expect(wrapper.element).toMatchSnapshot();
  });
});
