import React, { useReducer } from 'react'
import './useReducer.css'

const initial = [
    {
        id: 1,
        title: 'Todo 1',
        complete: false

    },
    {
        id: 2,
        title: 'Todo 2',
        complete: false,
    },
    {
        id: 3,
        title: 'Todo 3',
        complete: false,
    }
]

const reducer = (state,action) => {
    switch(action.type){
        case 'SWITCH':
            let newState = state.map((todo) =>  todo.id == action.id ? { ...todo,complete: !todo.complete } : todo)
            console.log(newState)
            return newState 
          
        default: 
            return state;
           

    }
}


const UseReducer = () => {
    const [todos, dispatch] = useReducer(reducer, initial)

    const completeAction = (todo) => {

        dispatch( { type:'SWITCH', id: todo.id } )
    }   

    return (
        <>
            <h2>USE REDUCER</h2>

            {
                todos.map((todo) => (
                     <div key={ todo.id } >
                        <label>
                            <input type="checkbox"
                                   checked={todo.complete}
                                   onChange = {() => completeAction(todo)}
                            />
                            <h4>{todo.title}</h4>

                        </label>
                    </div>

                ))

            }

        </>
    )
}

export default UseReducer