import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

export default class Posts extends Component {
  render() {
    return (
      <ul>
      <Query query={GET_QUERY}>
        {({ loading, data }) => {
          if (loading) return 'Loading...';
          const { posts } = data;
          return posts.map(post => (
            <li key={post.id}>
            <Link  to={`/post/${post.id}`}>
              {post.title}
            </Link>
            </li>
          ));
        }}
      </Query>
      </ul>
    );
  }
}

// Writing our query
const GET_QUERY = gql`
  query allPosts {
    posts {
      id
      title
      body
    }
  }
`;
