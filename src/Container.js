import React from 'react';
import TruckList from './TruckList.js';
import Detail from './Detail.js'


class Container extends React.Component {
constructor(){
  super()
    this.state = {
      allTrucks: [],
      singleTruck: []
    }
}

componentDidMount(){
  fetch(`http://localhost:3001/trucks`)
    .then(r => r.json())
      .then(trucks =>
        this.setState({
          allTrucks: trucks
        })
      )}

allTrucks = () => {
  this.state.allTrucks
}


oneTruck(){
  console.log('one truck')

}



  render() {
    return (
      <div>
        <TruckList truck={this.state.oneTruck} allTrucks={this.state.allTrucks}/>
        <Detail />
      </div>
    );
  }
}

export default Container;
