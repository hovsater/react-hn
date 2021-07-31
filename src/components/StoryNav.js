import React from 'react'
import { NavLink } from 'react-router-dom'

const storyTypes = {
  top: '/',
  new: '/new'
}

const StoryNav = (props) => {
  return (
    <nav>
      <ul>
        {Object.keys(storyTypes).map(storyType => {
          return (
            <li key={storyType}>
              <NavLink exact to={storyTypes[storyType]}>{storyType}</NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default StoryNav
