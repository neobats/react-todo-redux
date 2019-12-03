import { Tab } from './Tab'
import React from 'react'
import { VisibliltyFilter, VisibilityFilterArray } from './visibilityFilter'

export const Footer = props => {
  // const handleFilter = condition => todos => todos.filter(condition)
  // const visibilityCondition = prop => {
  //   switch (prop) {
  //     case VisibliltyFilter.COMPLETED:
  //       return todo => todo.completed
  //     case VisibliltyFilter.ACTIVE:
  //       return todo => !todo.completed
  //     default:
  //       return () => true
  //   }
  // }

  return (
    <div>
      {VisibilityFilterArray.map((vf, index) => (
        <Tab
          class="btn"
          key={'' + index + ' ' + vf}
          handleFilter={props.handleFilter}
          text={vf}
          visibility={props.visibility}
        />
      ))}
    </div>
  )
}
