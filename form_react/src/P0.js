import React, { PureComponent } from 'react';

class PO extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>First Name</h1>
                <input name="fname" value={this.props.state.fname} onChange={this.props.onChange}/>
                <h1>Last Name</h1>
                <input name="lname" value={this.props.state.lname} onChange={this.props.onChange}/>
                <h1>Email</h1>
                <input name="email" value={this.props.state.email} onChange={this.props.onChange}/>
                <br></br>
                <br></br>
                <button onClick={this.props.nextStep}>Continue</button>
                <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" >
    Submit
  </Button>
</Form>
            </div>
         );
    }
}
 
export default PO;