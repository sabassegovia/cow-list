import React from 'react';
import Cow from './Cow.jsx'

class Cows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <div>
        <h3>MooMoo List:</h3>
        <ul>
          {this.props.cows.map((cow, i) => (
            <Cow
              cow={cow}
              id={cow.id}
              key={i + cow.name}
              click={this.props.click}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Cows;