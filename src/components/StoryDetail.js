import React from 'react'
import PropTypes from 'prop-types'

import { getStory, getStoryComments } from '../api'
import StoryHeader from './StoryHeader'
import StoryMeta from './StoryMeta'

class StoryDetail extends React.Component {
  state = {
    story: null,
    comments: []
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  async componentDidMount () {
    const story = await getStory(this.props.match.params.id)
    this.setState({ story })
    const comments = await getStoryComments(story)
    this.setState({ comments })
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
          <section>
            {this.state.comments.map(comment => {
              return (
                <article key={comment.id}>
                  <StoryMeta story={comment} />
                  <div dangerouslySetInnerHTML={{ __html: comment.text }} />
                </article>
              )
            })}
          </section>
        </article>
      )
    }
  }
}

export default StoryDetail
