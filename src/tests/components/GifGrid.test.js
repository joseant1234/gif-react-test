import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Test in <GifGrid />', () => {

    const category = 'Naruto';

    test('should show correctly', () => {
        // cuando se llame useFetchGifs dentro del componente va enviar el valor puesto como parametro del metodo mockReturn()
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();

    });

    test('should show items when images are loading using useFetchGifs', () => {
        const gifs = [{
            id: 'Example',
            url: 'https://localhost/something.jpg',
            title: 'Title',
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();


    })
})
