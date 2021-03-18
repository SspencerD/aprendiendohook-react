import React, { useEffect, useReducer } from 'react'
import './style.css';
import { todoReducer } from './todoReducer';
import { Todolist } from './Todolist';
import { TodoAdd } from './TodoAdd';



const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];


    // Esto estamos haciendo al momento de renderizar el init
    // return [{
    //     id: new Date().getTime(),
    // desc: 'Aprender React',
    // done: false
    // }];

}
export const TodoApp = () => {


    const [todos, dispatch] = useReducer(todoReducer, [], init);


    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleDelete = (todoId) => {

        const borrar = {
            type: 'delete',
            payload: todoId
        };

        dispatch(borrar);

    }

    const handleToggle = (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo

        });
    }



    return (
        <div>

            <h1 className="alert alert-dark">To Do APP <small className="badge bg-info"> {todos.length} </small> </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <Todolist
                        todos={todos}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                </div>

                <div className="col-5">

                    <TodoAdd handleAddTodo={ handleAddTodo } />
                   
                </div>
            </div>
        </div>


    )
}
