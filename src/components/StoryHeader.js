import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const StoryHeader = ({ story }) => {
  return (
    <h3>
      {story.url
        ? <a href={story.url}>{story.title}</a>
        : <Link to={`/post/${story.id}`}>{story.title}</Link>}
    </h3>
  )
}

StoryHeader.propTypes = {
  story: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    url: PropTypes.string
  }).isRequired
}

export default StoryHeader
