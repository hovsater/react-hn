import React from 'react'

import { getTopStories } from '../api'
import StoryList from './StoryList'

class TopStories extends React.Component {
  state = {
    stories: []
  }

  componentDidMount () {
    getTopStories().then(stories => this.setState({ stories }))
  }

  render () {
    return <StoryList stories={this.state.stories} />
  }
}

export default TopStories
