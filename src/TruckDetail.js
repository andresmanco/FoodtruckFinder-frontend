import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import Menu from './Menu'

class TruckDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    };
  }

  toggleMenu = ()=> {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render() {
    
    return (
      <Card>
        <Image src={this.props.truck.pic} />
        <Card.Content>
          <Card.Header>{this.props.truck.name}</Card.Header>
          <Card.Meta>
            <span className='type'>{this.props.truck.food_type}</span>
          </Card.Meta>
          <Card.Description>{this.props.truck.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a style={{float: 'right', clear: 'none'}}>
            <Icon name='location arrow' />
            {this.props.truck.location}
          </a>
          <button style={{float: 'left', clear: 'none'}} onClick={this.toggleMenu}>Menu</button>
          {this.state.showMenu ?
           <Menu dishes={this.props.truck.dishes} closeMenu={this.toggleMenu}
           />
           : null
         }
        </Card.Content>
      </Card>
    );
  }
}

export default TruckDetail;
