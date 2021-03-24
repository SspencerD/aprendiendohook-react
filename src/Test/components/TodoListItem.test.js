
import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../components/08-useReducer/TodoListItem';
import { demoTodo } from '../Data/datatodos';


describe('Pruebas en <TodoListItem/>', () => {

    // llamamos las acciones de los botones con jest
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    // incluimos al wapper el componente todolist
    const wrapper = shallow(<TodoListItem
    // incrustamos las propiedades del todolist a la data fake que tenemos
        todo ={ demoTodo[0] }
        index = { 0 }
        handleDelete = { handleDelete }
        handleToggle = { handleToggle }
        />)


    test('debe mostrarse correctamente', () => {
        // hacemos un snap de nuestro codigo

        expect( wrapper).toMatchSnapshot();

        
    });

    test('Debe de llamar la funcion borrar', () => {

        // encontramos la propiedad boton y simulamos el click
        wrapper.find('button').simulate('click');

        // hacemos prueba con la propiedad handledelete y que se encaje
        //con lo que estamos llamando  en este caso a la data fake + id
        expect(handleDelete).toHaveBeenCalledWith(demoTodo[0].id);


        
    });

    test('Debe llamar la función toggle', () => {

        // buscamos el parrafo donde se esta ejerciendo el cambio y simulamos el click
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodo[0].id);
        // estamos llamando  la simulación del click a la data fake + id
        
    });

    test('debe de mostrar el texto correctamente', () => {

        // creamos una variable donde buscamos el parrafo 
        const p = wrapper.find('p');

        //  y esperamos que arroje el valor correctamente al cual estamos llamando
        // en la cual es un texto , borramos los espacio y esperamos que sea igual a data fake
        expect(p.text().trim()).toBe(`1.${demoTodo[0].desc}`);

        //contenido del parrafo
        
    });

    test('debe de tener la clase complete si el todo esta correcto = true', () => {
    

        // hacemos una constante de la data que inicialice en el primer dato
        const todo = demoTodo[0];
        todo.done = true;
        // declaramos que la propiedad done sea true


        //llamamos al wrapper y a la propiedad que requerimos
        const wrapper = shallow(<TodoListItem
                todo ={ todo }
                
                />
                );

                // dentro del obj wrapper llamamos a  propiedad p e indicamos
                // que buscamos tal clase en este caso complete y si este es true.
                expect(wrapper.find('p').hasClass('complete')).toBe(true);
        
    });
    
});