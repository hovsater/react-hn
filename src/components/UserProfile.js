import React from 'react'
import PropTypes from 'prop-types'

import { getUser } from '../api'

class UserProfile extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  state = {
    user: null
  }

  async componentDidMount () {
    const user = await getUser(this.props.match.params.id)
    this.setState({ user })
  }

  render () {
    const { user } = this.state

    if (!user) {
      return null
    } else {
      return (
        <article>
          <h2>{user.id}</h2>
          <p>joined <strong>{new Intl.DateTimeFormat([], { dateStyle: 'long' }).format(new Date(user.created * 1000))}</strong> has <strong>{user.karma}</strong> karma</p>
          <section>
            <h3>Posts</h3>
          </section>
        </article>
      )
    }
  }
}

export default UserProfile
