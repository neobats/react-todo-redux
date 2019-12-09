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
  onAddTodo = text => this.props.dispatch(actionCreators.add(text))

  onUpdateTodo = text => todo =>
    this.props.dispatch(actionCreators.update(text, todo))

  onRemoveTodo = id => this.props.dispatch(actionCreators.remove(id))

  onToggleCompletion = id =>
    this.props.dispatch(actionCreators.toggleComplete(id))

  handleFilter = vf => this.props.dispatch(actionCreators.setVisibility(vf))

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
    return (
      <div style={styles.container}>
        <Title>To-Do List</Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={this.props.todos.filter(this.toggleList(this.props.visibility))}
          onButtonClick={this.onRemoveTodo}
          onToggleComplete={this.onToggleCompletion}
          onClick={this.onUpdateTodo}
        />
        <Footer
          todos={this.props.todos}
          handleFilter={this.handleFilter}
          visibility={this.props.visibility}
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
