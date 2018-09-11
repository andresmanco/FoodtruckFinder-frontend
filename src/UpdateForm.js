import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'

const baseUrl =  "http://localhost:3001"

class Update extends Component {
  constructor(){
    super()
    this.state={
      location: null,
      dishes: []
    }
  }

  updateDishFetch =(dishes)=>{
    
    fetch(`${baseUrl}/my-dishes-update`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify({
      dishes: dishes
      })
    }).then(r=>r.json()).then(json=>console.log(json))
  }

  updateLocationFetch =(location)=>{
    fetch(baseUrl + '/truck-update', {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify({
        location: location
      })
    })
  }

  componentDidMount = ()=>{
    this.props.requestHelper(baseUrl+'/my-dishes').then(myDishes=> this.setState({dishes: [...this.state.dishes, ...myDishes]}))
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

  handleRemoveDish = (index, dishId= null) => {
    this.setState({ dishes: this.state.dishes.filter((dish, dishIndex) => index !== dishIndex) });
    dishId === null ? null : this.deleteDish(dishId)
  }

  deleteDish= (id)=>{
    fetch(baseUrl + "/dishes/" + id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    this.updateLocationFetch(this.state.location)
    this.updateDishFetch(this.state.dishes)
    alert('Your Dishes were updated')
    this.props.history.push('/')
  }


  render(){
    return (
      <div className='ui card login' style={{padding: '12px', margin: '0 6px 6px'}}>
        <Form>
          <Form.Field>
            <label>Location</label>
            <input name='location' placeholder='Location' onChange={(e)=>
              this.setState({[e.target.name]: e.target.value}) } />
          </Form.Field>
          <h3>Dishes</h3>

        {this.state.dishes.map((dish, index) => (
          <React.Fragment>
            <Form.Field>
              <label>Name</label>
              <input value={dish.name} name='name' placeholder='Account Name' onChange={(e)=>this.handleDishChange(index, e)} />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <input value={dish.description} name='description' placeholder='Account Name' onChange={(e)=>this.handleDishChange(index, e)} />
            </Form.Field>
            <Form.Field>
              <label>Picture</label>
              <input value={dish.pic} name='pic' placeholder='Image URL' onChange={(e)=>this.handleDishChange(index, e)} />
            </Form.Field>
            <Form.Field>
              <label>Price</label>
              <input value={dish.price} name='price' placeholder='Price' onChange={(e)=>this.handleDishChange(index, e)} />
            </Form.Field>
            <Button type="button" onClick={()=>{
              dish.id ? this.handleRemoveDish(index, dish.id)
              : this.handleRemoveDish(index)}} className="small">Delete</Button>
          </React.Fragment>
        ))}
            <p><Button onClick={this.handleAddDish}> + </Button></p>
            <Button onClick={(e)=> this.handleSubmit(e)} type='submit'>Submit</Button>

        </Form>
      </div>
    )
  }
}
 export default Update;
