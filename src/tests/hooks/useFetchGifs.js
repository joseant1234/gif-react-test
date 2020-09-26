const { useFetchGifs } = require("../../hooks/useFetchGifs");
const { renderHook } = require("@testing-library/react-hooks");

describe('Test in useFetchGifs hook', () => {

    test('should return the initial state', () => {

        // crea un componente virtual y coloca el custom hook
        const { result } = renderHook(() =>  useFetchGifs(category) );
        // el valor actual del custom hook
        const { data, loading } = result.current;

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
})
