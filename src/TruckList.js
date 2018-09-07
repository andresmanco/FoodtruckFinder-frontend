import React from 'react';
import Container from './Container'
import Detail from './Detail'
import { List, Image} from 'semantic-ui-react'


const TruckList = (props) => (

        <List>
        {props.allTrucks.map( truck =>
          <List.Item
          key={truck.id}
          truck={truck}
          foodType={truck.food_type}
          pic={truck.pic}
          onClick={() => console.log('clicked')}>
          // <Image avatar src={truck.pic} />
          {truck.name}
          </List.Item>
        )}
        </List>

)

export default TruckList;
