import { VisibliltyFilter } from './visibilityFilter'

export const types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  UPDATE: 'UPDATE',
  TOGGLE_COMPLETE: 'TOGGLE_COMPLETE',
  SET_VISIBILITY: 'SET_VISIBILITY'
}

export const actionCreators = {
  add: item => ({ type: types.ADD, payload: item }),
  remove: index => ({ type: types.REMOVE, payload: index }),
  update: (text, todo) => ({ type: types.UPDATE, payload: { text, todo } }),
  toggleComplete: id => ({ type: types.TOGGLE_COMPLETE, payload: id }),
  setVisibility: vf => ({ type: types.SET_VISIBILITY, payload: vf })
}

const initialState = {
  todos: [
    {
      text: 'Learn Elixir',
      id: 0,
      completed: false
    },
    {
      text: 'Rise like a Phoenix',
      id: 1,
      completed: false
    },
    {
      text: 'Bust out some Elm',
      id: 2,
      completed: false
    },
    {
      text: 'Ship App',
      id: 3,
      completed: false
    }
  ],
  lastKey: 3,
  visibility: VisibliltyFilter.ALL
}

export const reducer = (state = initialState, action) => {
  const { todos } = state
  const { type, payload } = action

  switch (type) {
    case types.ADD: {
      return {
        ...state,
        todos: [
          {
            id: state.lastKey + 1,
            text: payload,
            completed: false
          },
          ...todos
        ],
        lastKey: state.lastKey + 1
      }
    }
    case types.REMOVE: {
      return {
        ...state,
        todos: todos.filter((todo, i) => i !== payload)
      }
    }
    case types.UPDATE: {
      return {
        ...state,
        todos: todos.map(t => ({
          ...t,
          text: t.id === payload.todo.id ? payload.text : t.text
        }))
      }
    }
    case types.TOGGLE_COMPLETE: {
      return {
        ...state,
        todos: todos.map(t => ({
          ...t,
          completed: t.id === payload ? !t.completed : t.completed
        }))
      }
    }
    case types.SET_VISIBILITY: {
      return {
        ...state,
        visibility: payload
      }
    }
    default:
      return { ...state }
  }
}
