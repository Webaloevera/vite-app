import React from "react";
import './responseMessage.css'
const ResponseMessage = (props) => {
  const { error, good, simple, children } = props;

  if (error) {
    return <div className='message error'><p>{error}{children}</p></div>;
  }
  if (good) {
    return <div className='message good'><p>{good}</p></div>;
  }
  if (simple) {
    return <div className='message simple'><p>{simple}</p></div>;
  }

  return <>{}</>;
};

export default ResponseMessage;
