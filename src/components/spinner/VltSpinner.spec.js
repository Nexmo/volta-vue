import { mount } from '@vue/test-utils';
import { VltSpinner } from '..';

describe('vlt-spinner', () => {
    
    test('renders correctly with no props', () => {
        const wrapper = mount(VltSpinner)
        expect(wrapper.element).toMatchSnapshot();
    });

    test('renders correctly with if small', () => {
        const wrapper = mount(VltSpinner, {
            propsData: {
                small: true
            }
        })
        expect(wrapper.element).toMatchSnapshot();
    });

    test('renders correctly if smaller', () => {
        const wrapper = mount(VltSpinner, {
            propsData: {
                smaller: true
            }
        })
        expect(wrapper.element).toMatchSnapshot();
    });

    test('renders correctly if white', () => {
        const wrapper = mount(VltSpinner, {
            propsData: {
                white: true
            }
        })
        expect(wrapper.element).toMatchSnapshot();
    });
})
