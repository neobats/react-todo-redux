import React from 'react'
import { VisibliltyFilter } from './visibilityFilter'

export const Tab = props => {
  const displayText = visibility => {
    switch (visibility) {
      case VisibliltyFilter.ACTIVE:
        return 'Active'
      case VisibliltyFilter.COMPLETED:
        return 'Completed'
      default:
        return 'All'
    }
  }

  return (
    <button
      onClick={() => props.handleFilter(props.text)}
      disabled={props.text === props.visibility}
    >
      {displayText(props.text)}
    </button>
  )
}
