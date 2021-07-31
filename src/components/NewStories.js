import React from 'react'

import { getNewStories } from '../api'
import StoryList from './StoryList'

class NewStories extends React.Component {
  state = {
    stories: []
  }

  componentDidMount () {
    getNewStories().then(stories => this.setState({ stories }))
  }

  render () {
    return <StoryList stories={this.state.stories} />
  }
}

export default NewStories
