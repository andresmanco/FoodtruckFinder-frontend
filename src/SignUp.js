import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

const SignUp = ()=> {
  return (
    <div className='ui card' style={{padding: '12px',
    margin: '0 6px 6px'}}>
    <Form onSubmit={()=> console.log('hello')}>
      <Form.Field>
        <label>Name</label>
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
