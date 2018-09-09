import React from 'react';
 const Update = () => {
  constructor(){
   super()
   this.state={
     name: " ",
     food_type: " ",
     description: " ",
     pic: " ",
     location: "Offline",
     dishes: [{
          name: " ",
          pic: " ",
          price: ,
          description: " "
      }]
    }
  }
   handleAddDish = () => {
  this.setState({
    proportions: this.state.dishes.concat([{
        name: " ",
        pic: " ",
        price: ,
        description: " "
      }])
  });
}
   handleDishChange = () => {
    console.log('dish changed')
  }
   return (
    <div className='ui card login' style={{padding: '12px',
    margin: '0 6px 6px'}}>
    <Form onSubmit={(e)=> handleSubmit(e)}>
      <Form.Field>
        <label>Name</label>
        <input name='account_name' placeholder='Account Name' onChange={
          this.setState({[e.target.name]: e.target.value}) } />
      </Form.Field>
      <Form.Field>
        <label>Food Type</label>
        <input name='account_name' placeholder='Account Name' onChange={
          this.setState({[e.target.name]: e.target.value}) } />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input name='account_name' placeholder='Account Name' onChange={
          this.setState({[e.target.name]: e.target.value}) } />
      </Form.Field>
      <Form.Field>
        <label>Picture</label>
        <input name='account_name' placeholder='Account Name' onChange={
          this.setState({[e.target.name]: e.target.value}) } />
      </Form.Field>
      <Form.Field>
        <label>Location</label>
        <input name='food_type' placeholder='Type of food' onChange={
          this.setState({[e.target.name]: e.target.value}) } />
      </Form.Field>
       //THIS IS THE EXAMPLE CODE
      // <h3>Proportions</h3>
      //   {this.state.proportions.map((proportion, index) => (
      //     <div key={proportion.id} className="container">
      //       <p>Ingredient Name<br/>
      //       <input name='ingredients' type="text" value={proportion.ingredients} onChange={this.handleShareholderNameChange(index)} />
      //       </p>
      //
      //       <p>Quantity<br/>
      //       <input name='quantity' type="text" value={proportion.quantity} onChange={this.handleShareholderNameChange(index)} />
      //       </p>
      //       <button type="button" onClick={this.handleRemoveShareholder(index)} className="small">-</button>
      //     </div>
      // ))}
      //         <p><button onClick={this.handleAddShareholder}> + </button></p>
             // THIS  SECTION NEEDS '+' AND "-" BUTTONS AND A HANDLER METHOD FOR ADDING AND TAKING AWAY FORM FIELD
            //
            //    {this.state.dishes.map((dish, index) => (
            //      <Form.Field>
            //        <label>Name</label>
            //        <input name='name' placeholder='Name' onChange={() => handleDishChange(index)}  />
            //      </Form.Field>
            //      <Form.Field>
            //        <label>Picture</label>
            //        <input name='picture' placeholder='Picture' onChange={() => handleDishChange(index)}  />
            //      </Form.Field>
            //      <Form.Field>
            //        <label>Price</label>
            //        <input name='price' placeholder='Price' onChange={() => handleDishChange(index)} />
            //      </Form.Field>
            //      <Form.Field>
            //        <label>Description</label>
            //        <input name='description' placeholder='Description' onChange={() => handleDishChange(index)}  />
            //      </Form.Field>
            //
            // ))}
                  // <div key={proportion.id} className="container">
                 //   <p>Ingredient Name<br/>
                 //   <input name='ingredients' type="text" value={proportion.ingredients} onChange={this.handleShareholderNameChange(index)} />
                 //   </p>
       <Button type='submit'>Submit</Button>
    </Form>
    </div>
  );
}
 export default Update;
