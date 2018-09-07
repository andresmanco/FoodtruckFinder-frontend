import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

const SignUp = ()=> {
  return (
    <div className='ui card' style={{padding: '12px',
    margin: '0 6px 6px'}}>
    <Form onSubmit={()=> console.log('hello')}>
      <Form.Field>
        <label>Name</label>
        <input name='name' />
      </Form.Field>
      <Form.Field>
        <label>Account Name</label>
        <input name='account_name' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input name='password' />
      </Form.Field>
      <Form.Field>
        <label>Food Type</label>
        <input name='food_type' />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input name='description' />
      </Form.Field>
      <Form.Field>
        <label>Image</label>
        <input name='pic' />
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
