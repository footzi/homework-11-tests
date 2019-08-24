// Компонент List - список
// Напишите для него тесты.
// Компонент позволяет добавлять элементы в список.
// При добавлении нового элемента тексовое поле очищается.

// При клике на элементы списка они удаляются.

// Убедитесь, что вы протестировали всю функциональнось.

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { List } from './List';

describe('List', () => {
  describe('Component render correctly', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<List />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  })

  describe('Item work correctlly', () => {
    const wrapper = shallow(<List />);
    const item = 'Hello test';

    it('add item', () => {
      const input = wrapper.find('.t-input');

      input.simulate('change', { target: { value: item } });
      wrapper.find('.t-btn-add').simulate('click');
      expect(wrapper.find('.t-list').contains(item)).toEqual(true);
    });

    it('input after add item is clear', () => {
      const input = wrapper.find('.t-input');
      const value = input.prop('value');

      expect(value).toEqual('');
    });

    it('remove item', () => {
      wrapper.find('.t-list__item').first().simulate('click');
      expect(wrapper.find('.t-list__item').length).toEqual(0);
    })
  })
})