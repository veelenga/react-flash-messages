// jshint esversion: 6

class FlashMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: props.messages };
    window.flash_messages = this;
  }

  addMessage(message) {
    let messages = React.addons.update(this.state.messages, { $push: [message] });
    this.setState({ messages: messages });
  }

  removeMessage(message) {
    const index = this.state.messages.indexOf(message);
    let messages = React.addons.update(this.state.messages, { $splice: [[index, 1]] });
    this.setState({ messages: messages });
  }

  render () {
    return(
      <div>
        { this.state.messages.map((message) =>
          <Alert key={message.id} message={message} onFade={(message) => this.removeMessage(message)} />)
        }
      </div>
    );
  }
}

FlashMessages.propTypes = {
  messages: React.PropTypes.array.isRequired
};
