import React from 'react'
import PropTypes from 'prop-types'

const pluralize = (count, singular, plural) => {
  return count === 1 ? singular : plural
}

const commentsSentence = ({ type, descendants }) => {
  return type !== 'job'
    ? ` with ${descendants} ${pluralize(descendants, 'comment', 'comments')}`
    : ''
}

const timeSince = (unixTime) => {
  const seconds = (Date.now() / 1000) - unixTime

  let interval = Math.floor(seconds / (60 * 60 * 24 * 365))
  if (interval >= 1) {
    return `${interval} ${pluralize(interval, 'year', 'years')} ago`
  }

  interval = Math.floor(seconds / (60 * 60 * 24 * 30))
  if (interval >= 1) {
    return `${interval} ${pluralize(interval, 'month', 'months')} ago`
  }

  interval = Math.floor(seconds / (60 * 60 * 24))
  if (interval >= 1) {
    return `${interval} ${pluralize(interval, 'day', 'days')} ago`
  }

  interval = Math.floor(seconds / (60 * 60))
  if (interval >= 1) {
    return `${interval} ${pluralize(interval, 'hour', 'hours')} ago`
  }

  interval = Math.floor(seconds / (60 * 60))
  if (interval >= 1) {
    return `${interval} ${pluralize(interval, 'minute', 'minutes')} ago`
  }

  return 'less than a minute ago'
}

const StoryList = ({ stories }) => {
  return (
    <ol>
      {stories.map(story => {
        return (
          <li key={story.id}>
            <h3>{story.title}</h3>
            <span>{story.score} points by {story.by} {timeSince(story.time)}{commentsSentence(story)}</span>
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
