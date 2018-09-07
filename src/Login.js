import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

const Login = ()=> {
  return (
    <div className='ui card' style={{padding: '12px',
    margin: '0 6px 6px'}}>
    <Form>
      <Form.Field>
        <label>Account Name</label>
        <input placeholder='Account Name' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input placeholder='Password' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  </div>
  );
}

export default Login;
