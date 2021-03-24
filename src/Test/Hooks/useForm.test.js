import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from '../../Hooks/useForm';


describe('Pruebas de use Form', () => {

    const initialForm = {
        name: 'sspencer',
        email: 'sspencer@corc.cl'
    };

    test('Debe de regresar un form por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm));

        const [valform, handleInputChange, reset] = result.current;

        // Básicamente lo que estamos haciendo es obtener los valores que tiene 
        //result.current y setearlos a una variable

        expect(valform).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    });

    test('debe de cambiar el valor del form  (cambia name) ', () => {


        const { result } =renderHook( ()  => useForm(initialForm) );

        const [ , handleInputChange] = result.current;


        act( () =>{


            handleInputChange({

                target: {

                    name:'name',
                    value:'Lorenzo'
                }
                
            });


        });

        const [ valform ] = result.current;
        expect( valform).toEqual({...initialForm, name:'Lorenzo'});

        

        
    });

        test('Debe de re-establecer el form con reset', () => {


            const { result } =renderHook( ()  => useForm(initialForm) );

            const [ , handleInputChange, reset] = result.current;
    
    
            act( () =>{
    
    
                handleInputChange({
    
                    target: {
    
                        name:'name',
                        value:'Lorenzo'
                    }
                    
                });

                reset();
    
    
            });
    
            const [ valform ] = result.current;
            expect( valform).toEqual( initialForm);

        });


    })