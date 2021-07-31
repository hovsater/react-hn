import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { timeSince, pluralize } from '../utils'

const StoryMeta = ({ story }) => {
  return (
    <p>
      {('score' in story)
        ? `${story.score} points `
        : null}
      {'by '}
      <Link to={`/user/${story.by}`}>{story.by}</Link>
      {` ${timeSince(story.time)}`}
      {('descendants' in story)
        ? (
          <>
            {' with '}
            <Link to={`/post/${story.id}`}>
              {pluralize(story.descendants, 'comments', 'comment', 'discuss')}
            </Link>
          </>
          )
        : null}
    </p>
  )
}

StoryMeta.propTypes = {
  story: PropTypes.shape({
    by: PropTypes.string.isRequired,
    descendants: PropTypes.number,
    id: PropTypes.number.isRequired,
    score: PropTypes.number,
    time: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired
}

export default StoryMeta
