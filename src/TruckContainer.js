import React from 'react';
import TruckList from './TruckList.js';
import TruckDetail from './TruckDetail.js'

class TruckContainer extends React.Component {
  constructor(){
    super()
      this.state = {
        allTrucks: [],
        singleTruck: null,
        sortInput: 'none'
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


  handleSelectionClick = (truck) =>{
    this.setState({singleTruck: truck})
  }


  render() {
    return (
      <div id='truckContainer'>
        <div id='list'>
          {this.state.allTrucks.map( truck =>
            <TruckList key={truck.id} handleSelectionClick={this.handleSelectionClick} truck={truck}/>
          )}
        </div>
        <div id='card'>
          {(this.state.singleTruck !== null) ? <TruckDetail truck={this.state.singleTruck}/> : null}
        </div>
      </div>
    );
  }
}

export default TruckContainer;
