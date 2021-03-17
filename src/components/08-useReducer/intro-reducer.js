
const initialState = [{
    id:1,
    todo: 'Estudiar mucho react',
    done: false
}];

const toDo = (state = initialState, action) => {

    if( action?.type=== 'agregar'){
        // como no se ocupa push , se puede ocupar el operador spread
        // ya que llama a la lista anterior y lo agrega
        return [...state , action.payload ];
    }
    //solo puede tener una sola condición , no se puede agregar un else
    // y otro return ya que estaria en contra del reducer

    return state;
}

let todos = toDo();

// No usar push si estan usando react (reducer)
// ya que modifica  o muta el obj

const newTodo ={
    id:2,
    todo: 'Estudiar mucho redux',
    done: false

}

const addAction ={

    // payload nombre de como se llama al nuevo objeto

    type: 'agregar',
    payload: newTodo
}

todos = toDo(todos, addAction );

console.log(todos);