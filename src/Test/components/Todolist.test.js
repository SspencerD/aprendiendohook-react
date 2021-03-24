
import React from 'react';
import { shallow } from 'enzyme';
import { Todolist } from '../../components/08-useReducer/Todolist';
import { demoTodo } from '../Data/datatodos';
describe('Pruebas en <Todolist/>', () => {
    
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
    <Todolist

        todos={ demoTodo }
        handleDelete ={handleDelete }
        handleToggle ={ handleToggle }

        />)

    test(' Debe de mostrarse correctamente', () => {
        
    
        expect(wrapper).toMatchSnapshot();

       
    });

    test(' Debe de tener dos <TodolistItem />', () => {


    // buscamos el largo de arreglos que debe ser igual al valor que nos entrega la data ,
    // es decir TodoListItem debe tener el mismo largo que Demotodo
        expect(wrapper.find('TodoListItem').length ).toBe( demoTodo.length );
        
        // buscamos dentro de TodoListItem la propiedad handledelete y vemos si es igual  o esperamos que
        // esta sea una función al igual que handleToggle
        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function) );
       
        expect( wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual(expect.any(Function) );

    });
    
});