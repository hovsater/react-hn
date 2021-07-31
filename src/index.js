import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { getTopStories } from './api'
import StoryList from './components/StoryList'
import StoryDetail from './components/StoryDetail'

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
    <Router>
      <Switch>
        <Route exact path='/' component={TopStories} />
        <Route path='/post/:id' component={StoryDetail} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
