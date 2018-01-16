import React from 'react'
import {connect} from 'react-redux'
import PostList from '../posts/postlist'

class Home extends React.Component {
  // state = {data: null, isLoading: false}
  componentDidMount() {
    // this.setState({isLoading: true})
    // fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    //   .then( d => d.json() )
    //   .then( d => this.setState({data: d, isLoading: false}) )
    this.props.loadPosts()
  }
  render() {
    const {posts} = this.props
    return (
      <div>
        <h1>Latest Posts</h1>
        <PostList data={posts.data} />
      </div>
    )
  }
}

function selector(state) {
  return {
    posts: state.posts,
  }
}

function mapDispatch(dispatch) {
  return {
    loadPosts: () => {
      dispatch({
        type: 'LOAD_POSTS',
        payload: fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
				  .then(d => d.json())
      })
    }
  }
}

export default connect(
  selector,
  mapDispatch,
)(Home)