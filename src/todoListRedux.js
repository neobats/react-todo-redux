export const types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  UPDATE: 'UPDATE',
  TOGGLE_COMPLETE: 'TOGGLE_COMPLETE',
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
}

export const actionCreators = {
  add: item => {
    return { type: types.ADD, payload: item }
  },
  remove: index => {
    return { type: types.REMOVE, payload: index }
  }
}

const initialState = {
  todos: ['Click to remove', 'Learn React', 'Write Code', 'Ship App'],
  completed: false
}

export const reducer = (state = initialState, action) => {
  const { todos } = state
  const { type, payload } = action

  switch (type) {
    case types.ADD: {
      return {
        ...state,
        todos: [payload, ...todos]
      }
    }
    case types.REMOVE: {
      return {
        ...state,
        todos: todos.filter((todo, i) => i !== payload)
      }
    }
    default:
      return { ...state }
  }
}
