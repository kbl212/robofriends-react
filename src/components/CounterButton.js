import React from 'react';

class CounterButton extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  // can also use a PureComponent instead of doing this check
  shouldComponentUpdate(nextProps, nextState) {
    // only update if count was actually update
    if (this.state.count !== nextState.count) {
      return true;
    }
    else {
      return false;
    }
  }

  updateCount = () => {
    this.setState(state => {
      return { count: this.state.count + 1 };
    })
  }

  render() {
    console.log('CounterButton');
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    )
  }
}

export default CounterButton;