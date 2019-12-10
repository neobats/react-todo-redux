import { actionCreators } from './todoListRedux'

function add(newTodo) {
  myTodos = a(newTodo)
  refresh()
  return myTodos
}

let a, u, d

function update(list, todo, changes) {
  const index = list.findIndex(t => t.text === todo.text)
  todo = { ...todo, ...changes }
  return list.map((t, i) => (i === index ? todo : t))
}

const addTodo = list => newTodo => list.concat(newTodo)

const updateTodo = list => todo => changes => {
  const index = list.findIndex(t => t.text === todo.text)
  todo = { ...todo, ...changes }
  return list.map((t, i) => (i === index ? todo : t))
}

const deleteTodo = list => index => list.filter((t, i) => i !== index)

const apply = list => (...fns) => fns.map(fn => fn(list))

const double = [1, 2, 3].map(x => x * 2)

const myTodos = [
  {
    text: 'Ship app',
    id: 0,
    completed: false
  },
  {
    text: 'Write Code',
    id: 1,
    completed: false
  },
  {
    text: 'Learn Rust',
    id: 2,
    completed: false
  },
  {
    text: 'Dream in Haskell',
    id: 3,
    completed: false
  }
]
const fnArr = [addTodo, updateTodo, deleteTodo]
const refresh = () => {
  ;[a, u, d] = apply(myTodos)(...fnArr)
}
