import React from 'react';

class AddCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      addMooCow: e.target.value
    })
  }
  handleDescriptionChange(e) {
    this.setState({
      addMooDescription: e.target.value
    })
  }

  handleSubmit(e) {
    console.log('in handle submit');
    e.preventDefault();
    // console.log(this.state.addMooCow, this.state.addMooDescription);
    //elevate info
      var newCow = {};
      for (var i in this.state) {
        newCow[i] = this.state[i];
      }
      // console.log(newCow);
      this.props.add(newCow);
  }


  render() {
    return (
      <div>
        <h3>Add another Moo cow</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Anotha one
          </label>
          <input
            type="text"
            placeholder="whats the name?"
            value={this.state.addMooCow}
            onChange={this.handleNameChange}
          />
          <input
            type="text"
            placeholder="give me the deets"
            value={this.state.addMooDescription}
            onChange={this.handleDescriptionChange}
          />
          <button>Add this one!</button>
        </form>
      </div>
    );
  }
}

export default AddCow;