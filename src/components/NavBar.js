import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component{
  render(){
    return(
      <div className='navBar'>
          <Link className='button' to={`/addPost`}>Add Post</Link>
          <Link className='button' to={`/posts`}>All Posts</Link>
      </div>
    )
  }
}
