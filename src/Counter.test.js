// Компонент Counter - простой счётчик
// Напишите для него тесты.
// Убедитесь, что вы протестировали всю функциональнось.
// Также проверьте что компонент рендерится верно, используя Snapshot тест.

// * Задание со звёздочкой - выполнять не обязательно

// Вынесите логику в хук и протестируйте его

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Counter } from './Counter';

describe('Counter', () => {
  describe('Component render correctly', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<Counter />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  })

  describe('Counter correctly', () => {
    const wrapper = shallow(<Counter />);
    const incrementBtn = wrapper.find('.t-btn-increment');
    const descrementBtn = wrapper.find('.t-btn-descrement')

    it('increment correctly', () => {
      expect(wrapper.find('.t-text').text()).toEqual('0');
      incrementBtn.simulate('click');
      expect(wrapper.find('.t-text').text()).toEqual('1');
    
      incrementBtn.simulate('click');
      expect(wrapper.find('.t-text').text()).toEqual('2');
    })

    it('descrement correctly', () => {
      expect(wrapper.find('.t-text').text()).toEqual('2');
      descrementBtn.simulate('click');
      expect(wrapper.find('.t-text').text()).toEqual('1');
    
      descrementBtn.simulate('click');
      expect(wrapper.find('.t-text').text()).toEqual('0');
    })
  })
})