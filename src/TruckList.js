import React from 'react';
import { List, Image } from 'semantic-ui-react'


const TruckList = ({truck, handleSelectionClick}) => {

  return(
    <List selection animated style={{padding: '12px',
    margin: '0 6px 6px'}} >
      <List.Item
      key={truck.id}
      onClick={(e)=> handleSelectionClick(truck)}>
      <Image avatar src={truck.pic} />
      {`${truck.name} - ${truck.food_type}`}
      </List.Item>
    </List>
  )
}

export default TruckList;
