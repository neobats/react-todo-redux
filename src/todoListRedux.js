import { VisibliltyFilter } from './visibilityFilter'
import { todosRef } from './firebase'

export const types = {
  SET_VISIBILITY: 'SET_VISIBILITY',
  FETCH: 'FECTHING',
  FETCH_COMPLETE: 'FETCHING_COMPLETED',
  FETCH_ERROR: 'FETCHING_ERROR'
}

export const actionCreators = {
  add: todo => async dispatch => todosRef.push().set(todo),
  // add: item => ({ type: types.ADD, payload: item }),
  remove: id => async dispatch => todosRef.child(id).remove(),
  // remove: index => ({ type: types.REMOVE, payload: index }),
  update: todo => async dispatch =>
    todosRef.child(todo.id).set({
      completed: todo.completed,
      text: todo.text
    }),
  // update: (text, todo) => ({ type: types.UPDATE, payload: { text, todo } }),
  setVisibility: vf => ({ type: types.SET_VISIBILITY, payload: vf }),
  fetch: () => ({ type: types.FETCH }),
  fetchComplete: todos => ({ type: types.FETCH_COMPLETE, payload: todos }),
  fetchError: err => ({ type: types.FETCH_ERROR, payload: err })
}

const initialState = {
  todos: [],
  pending: false,
  error: null,
  visibility: VisibliltyFilter.ALL
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.SET_VISIBILITY: {
      return {
        ...state,
        visibility: payload
      }
    }
    case types.FETCH: {
      return {
        ...state,
        pending: true
      }
    }
    case types.FETCH_COMPLETE: {
      return {
        ...state,
        pending: false,
        todos: payload
      }
    }
    case types.FETCH_ERROR: {
      return {
        ...state,
        pending: false,
        error: payload
      }
    }
    default:
      return { ...state }
  }
}
