import React from 'react'

export default class Menu extends React.Component {

  renderMenu= ()=>{
    return this.props.dishes.map((dish, i)=>{
      return (<h4 key={dish.id}>{` ${i} - ${dish.name}: ${dish.description} -${dish.price}$`}</h4>)
    })
  }

  render() {

    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1 style={{'textAlign': 'center'}}>Menu</h1>
          {this.renderMenu()}
        <button onClick={this.props.closeMenu}>Close</button>
        </div>
      </div>
    );
  }
}
