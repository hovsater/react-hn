import React from 'react'
import PropTypes from 'prop-types'

import { getStory } from '../api'
import StoryHeader from './StoryHeader'
import StoryMeta from './StoryMeta'

class StoryDetail extends React.Component {
  state = {
    story: null
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  componentDidMount () {
    getStory(this.props.match.params.id).then(story => this.setState({ story }))
  }

  render () {
    const { story } = this.state

    if (!story) {
      return null
    } else {
      return (
        <article>
          <StoryHeader story={story} />
          <StoryMeta story={story} />
          <div dangerouslySetInnerHTML={{ __html: story.text }} />
        </article>
      )
    }
  }
}

export default StoryDetail
