import React from 'react';

class Cow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    var cow = this.props.cow;
    this.props.click(cow);

  }


  render() {
    if (this.props.cow.clicked === true) {
      var showDesc = <div>About {this.props.cow.name}:{this.props.cow.description}<br></br><br></br></div>
    }
    return (
      <div>
        <li onClick={this.handleClick}>
          MooMoo: {this.props.cow.name} <br></br>
          {showDesc}
        </li>
      </div>
    );
  }
}

export default Cow;