

import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../Hooks/useFetch';


describe('Pruebas en usefetch', () => {

    test(' debe  retornar la información por defecto', () => {
        

        const { result } = renderHook( () => useFetch(`https://www.breakingbadapi.com/api/quotes/1`))

        const { data , loading , error } = result.current;

        expect( data ).toBe(null);
        expect( loading ).toBe(true);
        expect( error).toBe(null);
    });


    test('debe  de tener la info deseada ', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetch(`https://www.breakingbadapi.com/api/quotes/1`))
        await waitForNextUpdate({timeout: 2000});

        const { data , loading , error } = result.current;

        expect(data.length).toBe(1);
        expect(loading).toBe( false );
        expect(error).toBe( null );




        
    });

    test('debe  de  arrojar error ', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetch(`https://reqres.in/apid/users/23`))
        await waitForNextUpdate({timeout: 2000});

        const { data , loading , error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe( false );
        expect(error).toBe( ' no se pudo cargar la data' );




        
    });
    
});