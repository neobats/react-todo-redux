import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actionCreators } from './todoListRedux'
import { List } from './List'
import Input from './Input'
import { Title } from './Title'
import { Footer } from './Footer'
import * as VF from './visibilityFilter'

const mapStateToProps = state => ({
  todos: state.todos,
  lastKey: state.lastKey,
  visibility: state.visibility
})

class App extends Component {
  state = {
    todos: [
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
    ],
    lastKey: 3,
    visibility: VF.VisibliltyFilter.ALL
  }

  onAddTodo = text => {
    const { todos, lastKey } = this.state
    const key = lastKey + 1
    this.setState({
      todos: [{ text, id: key, completed: false }, ...todos],
      lastKey: key
    })
  }

  onUpdateTodo = text => todo =>
    this.setState({
      ...this.state,
      todos: this.state.todos.map(t =>
        t.id === todo.id ? (t.text = text) : t.text
      )
    })

  onRemoveTodo = id => {
    const { todos } = this.state

    this.setState({
      ...this.state,
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  onToggleCompletion = id => {
    const { todos } = this.state
    this.setState({
      todos: todos.map(todo => ({
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed
      }))
    })
  }

  handleFilter = vf =>
    this.setState({
      ...this.state,
      visibility: vf
    })

  toggleList = visibility => {
    switch (visibility) {
      case VF.VisibliltyFilter.ACTIVE:
        return todo => !todo.completed
      case VF.VisibliltyFilter.COMPLETED:
        return todo => todo.completed
      default:
        return () => true
    }
  }

  render() {
    const { todos, visibility } = this.state

    return (
      <div style={styles.container}>
        <Title>To-Do List</Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos.filter(this.toggleList(visibility))}
          onButtonClick={this.onRemoveTodo}
          onToggleComplete={this.onToggleCompletion}
          onClick={this.onUpdateTodo}
        />
        <Footer
          todos={todos}
          handleFilter={this.handleFilter}
          visibility={visibility}
        />
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  }
}

export default connect(mapStateToProps)(App)
