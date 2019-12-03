import React from 'react'

const Title = props => {
  return (
    <div style={styles.header}>
      <div style={styles.title}>{props.children}</div>
    </div>
  )
}

const styles = {
  header: {
    backgroundColor: 'skyblue',
    padding: 15
  },
  title: {
    textAlign: 'center',
    color: 'white'
  }
}

export { Title }
