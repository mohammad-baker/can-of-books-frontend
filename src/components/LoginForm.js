import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export class LoginForm extends Component {
  render() {
    return (
      <center>
        <Container style={{ marginTop:50,width:400,marginLeft:-10}}>
          <Row>
            <Col>
              {this.props.user && (
                <Form onSubmit={this.props.formSubmit}>
                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' />
                    <Form.Text className='text-muted'>
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Password' />
                  </Form.Group>
                  <Button variant='primary' type='submit'>
                    Submit
                  </Button>
                  <Button
                    style={{ marginLeft: 20 }}
                    variant='primary'
                    type='submit'
                    onClick={this.props.formSubmit}
                  >
                    Close
                  </Button>
                </Form>
              )}
            </Col>
          </Row>
        </Container>
      </center>
    );
  }
}

export default LoginForm;
