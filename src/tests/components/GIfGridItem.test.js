import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Test in <GidGridItem />', () => {

    const title = 'A title';
    const url = 'https://localhost/image.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('should show the component correctly', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('should have a p tag with the title property', () => {

        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);
    })

    test('should get a image equal to url and alt of the props', () => {

        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('should have animate__fadeIn class', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('animate__fadeIn')).toBe(true);
    })
})
