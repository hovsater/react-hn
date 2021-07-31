import React from 'react'
import PropTypes from 'prop-types'

import StoryHeader from './StoryHeader'
import StoryMeta from './StoryMeta'

const StoryList = ({ stories }) => {
  return (
    <ol>
      {stories.map(story => {
        return (
          <li key={story.id}>
            <StoryHeader story={story} />
            <StoryMeta story={story} />
          </li>
        )
      })}
    </ol>
  )
}

StoryList.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({
    by: PropTypes.string.isRequired,
    descendants: PropTypes.number,
    id: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    url: PropTypes.string
  })).isRequired
}

export default StoryList
