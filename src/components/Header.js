import React from 'react';
import CounterButton from './CounterButton';

class Header extends React.Component {
  // default return value is true
  shouldComponentUpdate() {
    return false;
  }

  render() {
    console.log('Header');
    return (
      <div>
        <h1 className='f1'>RoboFriends</h1>
        <CounterButton color={'red'} />
      </div>
    )
  }
}

export default Header;