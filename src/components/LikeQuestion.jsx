import React from 'react';
import PropTypes from 'prop-types';
import NewLikeControl from './NewLikeControl';

function LikeQuestion(props) {
  let _like = false;

    function handleNewLikeSubmission(event) {
      event.preventDefault();
      // console.log(_like.value);
      props.onNewLikeCreation({like: _like.value});
      _like.value = '';
    }

  return (

    <div>
      <button onClick={props.onLike}>Like </button>
      // <form onSubmit={handleNewLikeSubmission}>
      // </form>
    </div>
  )
}

NewLikeControl.propTypes = {
  onLike: PropTypes.func,
  onNewLikeCreation: PropTypes.func
};

export default LikeQuestion;
