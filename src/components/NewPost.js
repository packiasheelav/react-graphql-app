import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import PostForm from './PostForm';

export default class NewPost extends Component {
  
	render() {
		return (
			<Mutation mutation={NEW_POST} >
				{createPost => (
          <PostForm onSubmit={createPost}/>
				)}
			</Mutation>
		);
	}
}

// Writing our query
const NEW_POST = gql`
	mutation createPost($title: String!, $body: String!) {
		createPost(data: { status: PUBLISHED, title: $title, body: $body }) {
			id
			title
			body
		}
	}
`;
