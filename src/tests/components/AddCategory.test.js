import React from 'react';
import { shallow } from "enzyme";
import { AddCategory } from '../../components/AddCategory';

describe('Test to <AddCategory>', () => {

    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);

    test('should show correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should update input text', () => {

        const input = wrapper.find('input');

        // simular el evento change de un input
        // se debe en enviar como argumento el value del evento (e.target.value)
        const value = 'Value';
        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);

    })
})
