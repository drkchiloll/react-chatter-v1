import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      messages : [
        'hi there how are you today?',
        'I am fine how are you?'
      ]
    };
  }
  render() {
    var msgNodes = this.state.messages.map((message) => {
      return (
        <div>{message}</div>
      );
    });

    return (
      <div>{msgNodes}</div>
    );
  }
}
