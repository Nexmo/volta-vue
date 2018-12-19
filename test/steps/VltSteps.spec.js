import { shallowMount } from '@vue/test-utils';
import { VltSteps } from '../../src/components';

describe('vlt-steps', () => {
  let wrapper;

  describe('with count', () => {
    beforeEach(() => {
      wrapper = shallowMount(VltSteps, {
        propsData: {
          count: 3,
        },
      });
    });

    test('is a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    test('renders correctly with 3 steps', () => {
      expect(wrapper.element).toMatchSnapshot();
    });

    test('selected index is 1', () => {
      wrapper.findAll('.Vlt-steps__item').at(1).trigger('click');
      expect(wrapper.emitted('update')).toEqual([[1]]);
    });
  });

  describe('with step objects', () => {
    beforeEach(() => {
      wrapper = shallowMount(VltSteps, {
        propsData: {
          steps: [{
            title: 'One',
            complete: true,
          },
          {
            title: 'Two',
            disabled: true,
          }, {
            title: 'Three',
          }],
        },
      });
    });

    test('is a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    test('renders correctly with 3 steps', () => {
      expect(wrapper.element).toMatchSnapshot();
    });

    test('selected index is 2', () => {
      wrapper.findAll('.Vlt-steps__item').at(2).trigger('click');
      expect(wrapper.emitted('update')).toEqual([[2]]);
    });

    test('cannot select disabled step at index 1', () => {
      wrapper.findAll('.Vlt-steps__item').at(1).trigger('click');
      expect(wrapper.emitted('update')).toBeFalsy();
    });
  });
});
