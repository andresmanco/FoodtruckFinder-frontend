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


  updateFetch =(dish)=>{
    fetch(baseUrl+'/dishes/'+dish.id, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: dish.name,
        description: dish.description,
        price: dish.price,
        pic: dish.pic
      })
    }).then(res => {
      if (res.status === 401) {
        alert("login failed");
      } else {
        res.json()
      }
    }).then(dish=> console.log(dish))
  }

  createFetch=(dish)=>{
    fetch(baseUrl + "/login", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: dish.name,
        description: dish.description,
        price: dish.price,
        pic: dish.pic
      })
    })
      .then(res => {
        if (res.status === 401) {
          alert("login failed");
        } else {
          return res.json();
        }
      }).then(dish => console.log(dish)
      });
    };

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

  handleRemoveDish = (index) => () => {
    this.setState({ dishes: this.state.dishes.filter((dish, dishIndex) => index !== dishIndex) });
  }


  handleSubmit = (e)=>{
    e.preventDefault()
    alert('Your Dishes were updated')
    this.props.history.push('/')
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
              <input value={dishes.name} name='name' placeholder='Account Name' onChange={(e)=>this.handleDishChange(index, e)} />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <input value={dishes.description} name='description' placeholder='Account Name' onChange={(e)=>this.handleDishChange(index, e)} />
            </Form.Field>
            <Form.Field>
              <label>Picture</label>
              <input value={dishes.pic} name='pic' placeholder='Image URL' onChange={(e)=>this.handleDishChange(index, e)} />
            </Form.Field>
            <Form.Field>
              <label>Price</label>
              <input value={dishes.price} name='price' placeholder='Price' onChange={(e)=>this.handleDishChange(index, e)} />
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
