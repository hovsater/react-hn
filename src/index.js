import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import StoryDetail from './components/StoryDetail'
import StoryNav from './components/StoryNav'
import TopStories from './components/TopStories'
import NewStories from './components/NewStories'

const App = () => {
  return (
    <Router>
      <StoryNav />
      <Switch>
        <Route exact path='/' component={TopStories} />
        <Route exact path='/new' component={NewStories} />
        <Route path='/post/:id' component={StoryDetail} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
