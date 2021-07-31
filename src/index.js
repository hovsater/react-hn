import React from 'react'
import ReactDOM from 'react-dom'

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
    return (
      <ol>
        {this.state.stories.map(story => {
          return (
            <li key={story.id}>
              <h3>{story.title}</h3>
              <span>by {story.by} {story.time} with {story.descendants} comments</span>
            </li>
          )
        })}
      </ol>
    )
  }
}

const App = () => {
  return (
    <TopStories />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
