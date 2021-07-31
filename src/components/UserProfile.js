import React from 'react'
import PropTypes from 'prop-types'

import { getUser, getUserStories } from '../api'
import StoryList from './StoryList'

class UserProfile extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  state = {
    user: null,
    stories: []
  }

  async componentDidMount () {
    const user = await getUser(this.props.match.params.id)
    this.setState({ user })
    const stories = await getUserStories(user)
    this.setState({ stories })
  }

  render () {
    const { user, stories } = this.state

    if (!user) {
      return null
    } else {
      return (
        <article>
          <h2>{user.id}</h2>
          <p>joined <strong>{new Intl.DateTimeFormat([], { dateStyle: 'long' }).format(new Date(user.created * 1000))}</strong> has <strong>{user.karma}</strong> karma</p>
          <section>
            <h3>Posts</h3>
            <StoryList stories={stories} />
          </section>
        </article>
      )
    }
  }
}

export default UserProfile
