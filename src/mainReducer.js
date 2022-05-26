
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_TODO = "ADD_TODO";
const LAST_TODO = "LAST_TODO";


const initialState = {
    count: 0,
    todos: ["eat soup", "drink bear"]
}


export default function mainReducer(state=initialState, action) {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case DECREMENT: {
            return {
                ...state,
                count: state.count - 1
            }
        }
        case ADD_TODO: {
            return {
                ...state,
               todos: [...state.todos , action.payload]
            }
        }
        case LAST_TODO: {
            return {
                ...state,
               todos: [...state.todos.slice(0, state.todos.length-1)]
            }
        }
        default :
        {
            return state
        }
    }
}

export const increment=()=>({type: INCREMENT})
export const decrement=()=>({type: DECREMENT})
export const addTodo=(payload)=>({type: ADD_TODO})
export const removeLastTodo=()=>({type: LAST_TODO})