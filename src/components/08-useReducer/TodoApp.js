import React, { useEffect, useReducer } from 'react'
import './style.css';
import { todoReducer } from './todoReducer';
import { useForm } from '../../Hooks/useForm';



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

    const [{ description }, handleinputChange, reset] = useForm({
        description: ''

    });


    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);


    const handleDelete = (todoId) =>{

        const borrar = {
            type: 'delete',
            payload: todoId
        };

        dispatch(borrar);

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {

            return;
        }



        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        };

        dispatch(action);
        reset();

    }



    return (
        <div>

            <h1 className="alert alert-dark">To Do APP <small className="badge bg-info"> {todos.length} </small> </h1>
            <hr />
            <div className="row">
                <div className="col-7">

                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, i) => (

                                <li
                                    key={todo.id}
                                    className="list-group-item"
                                >
                                    <p className="text-center"> {i + 1}.{todo.desc} </p>
                                    <button
                                        className="btn btn-sm btn-outline-danger mt-1"
                                        onClick={ () => handleDelete(todo.d ) }
                                    >
                                        Borrar
                           </button>
                                </li>

                            ))
                        }
                    </ul>

                </div>

                <div className="col-5">
                    <h4>Agregar</h4>
                    <hr />
                    <form className="mb-3" onSubmit={handleSubmit}>
                        <input
                            className="form-control form-control-sm"
                            type="text"
                            name="description"
                            placeholder="Aprender algo..."
                            autocomplete="off"
                            value={description}
                            onChange={handleinputChange}
                        />
                        <button
                            className="btn btn-sm btn-outline-success mt-2 btn-block"
                            type="submit"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>


    )
}
