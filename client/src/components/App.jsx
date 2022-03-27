import React from 'react';
import AddCow from './AddCow.jsx';
import Cows from './Cows.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //clicked cow will have a true bool,
      //use that to do conditional
      cows: []
    }
    this.getCows = this.getCows.bind(this);
    this.nameClick = this.nameClick.bind(this);
    this.addCow = this.addCow.bind(this);
  }

  componentDidMount() {
    this.getCows();
  }

  //getting cows successfully
  getCows() {
    //axios get request
    axios({
      method: 'get',
      url: '/api/cows'
    })
      .then((res) => {
        var temp = res.data.reverse();
        for (var i = 0; i < temp.length; i++) {
          temp[i].clicked = false;
        }
        console.log(temp);
        this.setState({
          cows: temp
        })
      })
      .catch((err) => {
        console.log(err)
    })
  }

  nameClick(n) {
    console.log('in name click')
    console.log('you clicked ', n);
    var clickedOnTop = [];
    for (var i = 0; i < this.state.cows.length; i++) {
      if (this.state.cows[i].id === n.id) {
        continue;
      } else {
        var cow = this.state.cows[i];
        cow.clicked = false;
        clickedOnTop.push(cow);
      }
    }
    // console.log(clickedOnTop)
    clickedOnTop.unshift(n);
    clickedOnTop[0].clicked = true;
    console.log(clickedOnTop);
    this.setState({
      cows: clickedOnTop
    })

  }

  addCow(a) {
    console.log('in add com, main app');
    console.log(a)
  }

  render() {
    return (
      <div><h1>So you like Cows...</h1>
        <AddCow add={this.addCow}/>
        <Cows cows={this.state.cows} click={this.nameClick}/>
      </div>
    );
  }
}

export default App;