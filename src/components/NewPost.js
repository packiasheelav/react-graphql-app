import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';

export default class NewPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: ''
		};
	}
	handleInput = e => {
		let target = e.target;
		let formData = {};
		formData[target.name] = target.value;
		this.setState({ ...formData });
		console.log(formData);
		console.log('this.state', this.state);
	};
	render() {
		const { title, body } = this.state;
		return (
			<Mutation mutation={NEW_POST} variables={{ title, body }}>
				{createPost => (
					<form
						onSubmit={e => {
							e.preventDefault();
							createPost()
								.then(() => {
									this.setState({
										title: '',
										body: ''
									});
								})
								.catch(e => console.log(e));
						}}
					>
						<input type="text" name="title" value={title} onChange={this.handleInput} />
						<textarea type="text" name="body" value={body} onChange={this.handleInput} />
						<button type="submit">New Post</button>
					</form>
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
