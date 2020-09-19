import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Test in <GidGridItem />', () => {

    const title = 'A title';
    const url = 'https://localhost/image.jpg';

    test('should show the component correctly', () => {
        const wrapper = shallow(<GifGridItem title={title} url={url} />)
        expect(wrapper).toMatchSnapshot();

    })
})
