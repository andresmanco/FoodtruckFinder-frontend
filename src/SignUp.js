import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

const SignUp = ()=> {

  function getInfoSignUp(data){
    fetch(`http://localhost:3001/trucks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        account_name: data.account_name,
        password: data.password,
        food_type: data.food_type,
        description: data.description,
        pic: data.image
      })
    })
    .then(r=> r.json())
    .then(acc=> console.log())
  }

  function handleSubmit(e){
    e.preventDefault()
    const data = {
      name: e.target.children[0].childNodes[1].value,
      account_name: e.target.children[1].childNodes[1].value,
      password: e.target.children[2].childNodes[1].value,
      food_type: e.target.children[3].childNodes[1].value,
      description: e.target.children[4].childNodes[1].value,
      image: e.target.children[5].childNodes[1].value
    }
    debugger
    getInfoSignUp(data)
  }


  return (
    <div className='ui card login' style={{padding: '12px',
    margin: '0 6px 6px'}}>
    <Form onSubmit={(e)=> handleSubmit(e)}>
      <Form.Field>
        <label>Truck Name</label>
        <input name='name' placeholder='Name' />
      </Form.Field>
      <Form.Field>
        <label>Account Name</label>
        <input name='account_name' placeholder='Account Name' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input name='password' placeholder='Password' />
      </Form.Field>
      <Form.Field>
        <label>Food Type</label>
        <input name='food_type' placeholder='Type of food' />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input name='description' placeholder='Description' />
      </Form.Field>
      <Form.Field>
        <label>Image</label>
        <input name='pic' placeholder='Image URL' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
    </div>
  );
}

export default SignUp;
