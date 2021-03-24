import { todoReducer } from "../../components/08-useReducer/todoReducer";
import { demoTodo } from '../Data/datatodos';

describe(' Pruebas en el reducer Todo', () => {


    test('debe de retornar el estado por defecto', () => {

        const state = todoReducer(demoTodo, {});

        expect(state).toEqual(demoTodo);


    });

    test('debe de agregar un todo', () => {

        const newTodo = {
            id: 3,
            desc: 'aprender tailwind',
            done: 'false'
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        const state = todoReducer(demoTodo, action);

        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodo, newTodo]);


    });

    test(' debe der borrar un todo', () => {


        const action = {
            type: 'delete',
            payload: 1
        }

        const state = todoReducer(demoTodo, action);



        expect(state.length).toBe(1);
        expect(state.find((demoTodo) => { return demoTodo.id === 1})).toBe(undefined);
        console.log(demoTodo);
    });

    test(' debe de cambiar el valor del todo', () => {

        const action = {
            type: 'toggle',
            payload: 1
        }

        const state = todoReducer(demoTodo, action);

        expect( state[0].done ).toBe(true);
        expect( state[1] ).toEqual( demoTodo[1] );
    });

});