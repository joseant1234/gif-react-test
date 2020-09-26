const { useFetchGifs } = require("../../hooks/useFetchGifs");
const { renderHook } = require("@testing-library/react-hooks");

describe('Test in useFetchGifs hook', () => {

    test('should return the initial state', async() => {

        // crea un componente virtual y coloca el custom hook
        const { result, waitForNextUpdate } = renderHook(() =>  useFetchGifs(category) );
        // el valor actual del custom hook
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('should return array of images', async() => {
        // waitForNextUpdate espera una actualizacion en el estado
        // la promesa indica cuando sucedió una actualización en el estado del custom hook
        const { result, waitForNextUpdate } = renderHook(() =>  useFetchGifs(category) );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
})
