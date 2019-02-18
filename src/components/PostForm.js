import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PostForm extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    post: PropTypes.object
  };

  static defaultProps ={
    post:{}
  }
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.post.title || "",
      body: this.props.post.body || "",
      id: this.props.post.id || ''
    };
  }

  handleInput = e => {
    let target = e.target;
    let formData = {};
    formData[target.name] = target.value;
    this.setState({ ...formData });
    console.log(formData);
    console.log("this.state", this.state);
  };

  render() {
    const { onSubmit } = this.props;
    const { title, body,id } = this.state;
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit({ variables: { title, body, id } })
            .then(() => {
              this.setState({
                title: "",
                body: "",
                id:""
              });
            })
            .catch(e => console.log(e));
        }}
      >
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleInput}
        />
        <textarea
          type="text"
          name="body"
          value={body}
          onChange={this.handleInput}
        /><br/>
        <button className='button2' type="submit">Post</button>
      </form>
    );
  }
}
