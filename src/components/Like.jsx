import React from 'react';
import PropTypes from 'prop-types';

function Like(props){
  return(
    <div>
      <p>{props.isLiked}</p>
    </div>
  )
}

Like.propTypes = {
  isLiked = false
};

export default Like;
