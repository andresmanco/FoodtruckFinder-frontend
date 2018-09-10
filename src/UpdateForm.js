import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'

 class Update extends Component {
  constructor(){
   super()
   this.state={
     location: null,
     dishes: [{
       name: '',
       pic: '',
       price: '',
       description: ''
     }]
    }
  }

  handleSubmit = ()=>{
    console.log('submited');
  }

  handleAddDish = () => {
    this.setState({
      dishes: this.state.dishes.concat([{
        name: '',
        pic: '',
        price: '',
        description: ''
      }])
    });
  }
   handleDishChange = (index, e) => {
    const newDishes = this.state.dishes.map((dish, dishIndex)=>{
      if(index !== dishIndex)return dish;
      return {...dish, [e.target.name]: e.target.value}
      })
      this.setState({dishes: newDishes})
  }

  handleRemoveDish = (index) => () => {
    this.setState({ dishes: this.state.dishes.filter((dish, dishIndex) => index !== dishIndex) });
  }


  render(){
    return (
      <div className='ui card login' style={{padding: '12px', margin: '0 6px 6px'}}>
        <Form onSubmit={(e)=> this.handleSubmit(e)}>
          <Form.Field>
            <label>Location</label>
            <input name='location' placeholder='Location' onChange={(e)=>
              this.setState({[e.target.name]: e.target.value}) } />
          </Form.Field>
          <h3>Dishes</h3>

        {this.state.dishes.map((dishes, index) => (
          <React.Fragment>
            <Form.Field>
              <label>Name</label>
              <input name='name' placeholder='Account Name' onChange={(e)=>this.handleDishChange(index, e)} />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <input name='description' placeholder='Account Name' onChange={(e)=>this.handleDishChange(index, e)} />
            </Form.Field>
            <Form.Field>
              <label>Picture</label>
              <input name='pic' placeholder='Image URL' onChange={(e)=>this.handleDishChange(index, e)} />
            </Form.Field>
            <Form.Field>
              <label>Price</label>
              <input name='price' placeholder='Price' onChange={(e)=>this.handleDishChange(index, e)} />
            </Form.Field>
            <Button type="button" onClick={this.handleRemoveDish(index)} className="small">-</Button>
          </React.Fragment>
        ))}
            <p><Button onClick={this.handleAddDish}> + </Button></p>
            <Button type='submit'>Submit</Button>

        </Form>
      </div>
    )
  }
}
 export default Update;
