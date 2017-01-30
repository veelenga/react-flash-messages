// jshint esversion: 6

class Alert extends React.Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      $(this.refs.alert).fadeTo(500, 0).slideUp(500, () => {
        this.props.onFade(this.props.message);
      });
    }, this.props.timeout);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  bootstrapClass (type) {
    let classes = {
      success: 'alert-success',
      notice: 'alert-info',
      alert: 'alert-warning',
      error: 'alert-danger'
    };
    return classes[type] || classes.success;
  }

  render() {
    const alertClassName = `alert ${ this.bootstrapClass(this.props.message.type) } fade in`
    return(
      <div>
        <div className={alertClassName} ref='alert'>
          <button className='close' data-dismiss='alert'> × </button>
          { this.props.message.text }
        </div>
      </div>
    );
  }
}

Alert.propTypes = {
  onFade: React.PropTypes.func,
  timeout: React.PropTypes.number,
  message: React.PropTypes.object.isRequired
};

Alert.defaultProps = {
  timeout: 2000
};
