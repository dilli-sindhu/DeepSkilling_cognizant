import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const postList = data
          .slice(0, 10)
          .map(item => new Post(item.id, item.title, item.body));
        this.setState({ posts: postList });
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        this.setState({ hasError: true });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert('An error occurred: ' + error.message);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h3>Something went wrong while loading posts.</h3>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;