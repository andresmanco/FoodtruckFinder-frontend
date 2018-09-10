import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'

 class Update extends Component {
  constructor(){
   super()
   this.state={
     name: "",
     food_type: "",
     description: "",
     pic: "",
     location: "Offline",
     dishes: [{
          name: "",
          pic: "",
          price: '',
          description: ""
      }]
    }
  }

  handleSubmit = ()=>{
    console.log('submited');
  }

   handleAddDish = () => {
  this.setState({
    proportions: this.state.dishes.concat([{
        name: "",
        pic: "",
        price: '',
        description: ""
      }])
  });
}
   handleDishChange = () => {
    console.log('dish changed')
  }
  render(){
    return (
      <div className='ui card login' style={{padding: '12px', margin: '0 6px 6px'}}>
        <Form onSubmit={(e)=> this.handleSubmit(e)}>
          <Form.Field>
            <label>Name</label>
            <input name='account_name' placeholder='Account Name' onChange={(e)=>
              this.setState({[e.target.name]: e.target.value}) } />
          </Form.Field>
          <Form.Field>
            <label>Food Type</label>
            <input name='account_name' placeholder='Account Name' onChange={(e)=>
              this.setState({[e.target.name]: e.target.value}) } />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input name='account_name' placeholder='Account Name' onChange={(e)=>
              this.setState({[e.target.name]: e.target.value}) } />
          </Form.Field>
          <Form.Field>
            <label>Picture</label>
            <input name='account_name' placeholder='Account Name' onChange={(e)=>
              this.setState({[e.target.name]: e.target.value}) } />
          </Form.Field>
          <Form.Field>
            <label>Location</label>
            <input name='food_type' placeholder='Type of food' onChange={(e)=>
              this.setState({[e.target.name]: e.target.value}) } />
          </Form.Field>
           <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}
 export default Update;
