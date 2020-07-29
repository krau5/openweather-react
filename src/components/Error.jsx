import React from 'react';
import { Message } from 'semantic-ui-react';

const Err = ({ msg }) => {
  return (
    <Message warning>
      <Message.Header>Warning</Message.Header>
      <p>{msg}</p>
    </Message>
  )
}

export default Err;