import { renderHook , act }from '@testing-library/react-hooks'
import {useCounter} from '../../Hooks/useCounter';

describe('Pruebas en useCounter', () => {

    test('Debe de retornar val por defectos', () => {
        
        const { result } = renderHook( ()=> useCounter() );


        expect(result.current.counter).toBe(1);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');



    });

    test('Debe tener el counter en 100', () => {
        
        const { result } = renderHook( ()=> useCounter(100) );

        expect(result.current.counter).toBe(100);

    });

    test('debe incrementar el count en 1', () => {

        const{ result } = renderHook( () => useCounter(100) );
        const { increment } = result.current;

        act( () => {

            increment();
        });


        const { counter } = result.current;
        expect( counter).toBe(101);
        
    });

    test('debe de decrementar el count en 99 ', () => {

        const{ result } = renderHook( () => useCounter(100) );
        const { decrement } = result.current;

        act( () => {

            decrement();
        });


        const { counter } = result.current;
        expect( counter).toBe(99);
        
    });

    test('Debe incrementar el valor a 100 y luego resetearlo', () => {

        const{ result } = renderHook( () => useCounter() );
        const { reset } = result.current;
        const { increment } = result.current;

        act( () => {

            increment();
             reset();
        });


        const { counter } = result.current;
        expect( counter).toBe(1);
        
    });
    
    
});