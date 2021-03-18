import React from 'react'
import { useForm } from '../../Hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{ description }, handleinputChange, reset] = useForm({
        description: ''

    });


    const handleSubmit =(e)=>{
        e.preventDefault();

        if (description.trim().length <= 1) {

            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo(newTodo);
        reset();

    }

    return (
        <>

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

        </>
    )
}
