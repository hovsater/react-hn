import React from 'react'
import ReactDOM from 'react-dom'

import StoryList from './components/StoryList'

const getStory = async (id) => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  const story = response.json()
  return story
}

const getTopStories = async () => {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
  const storyIds = await response.json()
  const stories = await Promise.all(storyIds.slice(0, 30).map(id => getStory(id)))
  return stories
}

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

const App = () => {
  return (
    <TopStories />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
