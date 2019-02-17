import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component{
  render(){
    return(
      <div>
          <Link to={`/addPost`}>Add Post</Link>
          <Link to={`/posts`}>All Posts</Link>
      </div>
    )
  }
}
