import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { AddCategory } from '../../components/AddCategory';

describe('Test to <AddCategory>', () => {

    // const setCategories = () => {};
    const setCategories = jest.fn();
    let wrapper;

    test('should show correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    beforeEach(() => {

        // en caso de que exista algún mock o simulación, lo limpia
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('should update input text', () => {

        const input = wrapper.find('input');

        // simular el evento change de un input
        // se debe en enviar como argumento el value del evento (e.target.value)
        const value = 'Value';
        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);

    })

    test('should not submit', () => {
        // wrapper.find('form').simulate('submit', { preventDefault: () => {} })
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // como no hay ningun valor (inputValue), la funcion no debio llamarse
        expect(setCategories).not.toHaveBeenCalled();

    })
})
