import React from 'react';
import Posts from './Posts';
import Post from './Post';
import NewPost from './NewPost';

import { Switch, Route } from 'react-router-dom';

const AllRoutes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Posts} />
			<Route exact path="/post/:id" component={Post} />
			<Route exact path="/addPost" component={NewPost} />
			<Route exact path="/posts" component={Posts} />
		</Switch>
	);
};
export default AllRoutes;
