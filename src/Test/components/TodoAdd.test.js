import { shallow } from 'enzyme';
import { TodoAdd } from '../../components/08-useReducer/TodoAdd'
import { demoTodo } from '../Data/datatodos';


describe('Pruebas en <TodoAdd/>', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(<TodoAdd

        handleAddTodo={handleAddTodo}
    />);

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });


    test('No debe de llamar a handleAddTodo', () => {

        // creamos una const llamando al la var wrapper en la cual debe buscar el form sobre la propiedad onsubmit
        const formsubmit = wrapper.find('form').prop('onSubmit');

        // llamamos la funcion formsubmit con el preventDefault
        formsubmit({ preventDefault() { } });


        // esperamos que llamada del handleAddTodo sea 0 ya que no queremos llamarlo
        expect(handleAddTodo).toHaveBeenCalledTimes(0);

    });


    test('Debe de llamar la funcíon handleAddTodo', () => {

        // creamos una variable X , para  incertarla luego en el arreglo
        const val = 'Aprender redux';

        // buscamos el input y simulamos el cambio que queremos realizarle ,
        // agregando que en el target debe haber un valor y una descripción
        wrapper.find('input').simulate('change', {
            target: {
                value: val,
                name: 'description'
            }
        });

        // creamos una constante del submit en la cual busca el formulario sobre la prop onSubmit
        const formsubmit = wrapper.find('form').prop('onSubmit');

        // llamamos la funcion formsubmit con el preventDefault
        formsubmit({ preventDefault() { } });

        // primer expresión seria llamar al componente una vez
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        // llamar al componente que esperando contenga algún objeto
        expect(handleAddTodo).toHaveBeenCalledWith( expect.any(Object) );

        // llamar al componente que contenga tal objeto según la var declarada ,
        // el done en falso y que la id contenga cualquier numero.
        expect(handleAddTodo).toHaveBeenCalledWith( {
            desc: val,
            done: false,
            id: expect.any(Number)
         });

         //llamar al componente esperando que una vez de la inseción de datos 
         //se reinicie el valor
         expect(wrapper.find('input').prop('value')).toBe('');
    });

});