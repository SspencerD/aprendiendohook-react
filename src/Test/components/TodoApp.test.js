
import React from 'react';
import {shallow, mount} from 'enzyme';
import { TodoApp } from '../../components/08-useReducer/TodoApp';
import { demoTodo } from '../Data/datatodos';
import { act  } from '@testing-library/react';


describe('Pruebas en <TodoApp/>', () => {
    

    const wrapper = shallow(<TodoApp/>);

    Storage.prototype.setItem = jest.fn(() => {});

    test('Debe de mostrarse correctmente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });


    test('Debe agregar un ToDo', () => {

        // mount viene de enzyme y sirve para 
        //probar toda la app en general

        const wrapper = mount( <TodoApp/>);

        act( () =>{

            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[1]);
        });

        expect( wrapper.find('h1').text().trim()).toBe('To Do APP  2');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test('Debe de eliminar un To Do', () => {

        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[0]);
        expect(wrapper.find('h1').text().trim() ).toBe('To Do APP  1');

        wrapper.find('Todolist').prop('handleDelete')(demoTodo[0].id);
        expect(wrapper.find('h1').text().trim() ).toBe('To Do APP  0');


        
    });
});