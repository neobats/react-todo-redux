import React from 'react'
import { Checkbox } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

const List = props => {
  const renderItem = todo => {
    const { onButtonClick, onToggleComplete } = props

    return (
      <div style={styles.item} key={todo.id}>
        {todo.text}
        <Checkbox
          checked={todo.completed}
          value={todo.completed}
          onChange={() =>
            onToggleComplete({ ...todo, completed: !todo.completed })
          }
        />
        <DeleteForeverIcon
          style={styles.delete}
          onClick={() => onButtonClick(todo.id)}
        />
      </div>
    )
  }

  return <div style={styles.container}>{props.list.map(renderItem)}</div>
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15
  },
  delete: {
    verticalAlign: -7,
    paddingRight: 15
  }
}

export { List }
