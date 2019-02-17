import React from 'react';
import Posts from './Posts';
import Post from './Post';
import AddPost from './AddPost';

import { Switch, Route } from 'react-router-dom';

const AllRoutes = () => {
	return (
		
			<Switch>
				<Route exact path="/" component={Posts} />

				<Route exact path="/post/:id" component={Post} />
				<Route exact path="/addPost" component={AddPost} />

			</Switch>
		
	);
};
export default AllRoutes;
