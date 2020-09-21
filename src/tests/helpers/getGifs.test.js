import { getGifs } from '../../helpers/getGifs';

describe('Tests with getGifs Fetch', () => {

    test('should get 10 elements', async() => {

        const gifs = await getGifs('Naruto');

        expect(gifs.length).toBe(10);

    })

    test('should get 10 elements', async() => {

        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);

    })
})
