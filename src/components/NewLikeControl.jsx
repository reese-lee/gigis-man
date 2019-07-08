import React from 'react';
import PropTypes from 'prop-types';

class NewLikeControl extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.incrementMe = this.incrementMe.bind(this);
  }

  // handleClick() {
  //   this.setState({
  //     count: +1
  //   });
  // }

  incrementMe() {
    let newCount = this.state.count +1;
    this.setState({
      count: newCount
    })
  }

  render() {
    // const text = this.state.liked ? 'liked' : 'haven\'t liked';
    // const label = this.state.liked ? 'Unlike' : 'Like';
    console.log(this.state.count);

    return (
      <div className="customContainer">
        <h1>Some text here</h1>
        <h1>Some text here</h1>
        <h1>Some text here</h1>
        <button className="btn btn-primary" onClick={this.incrementMe}>
          Likes {this.state.count}</button>

      </div>
    );
  }
}

export default NewLikeControl;
