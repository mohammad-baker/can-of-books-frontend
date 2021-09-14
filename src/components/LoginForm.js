import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const style = {
  // marginLeft: "30%",
  // marginRight: "30%",
  marginTop: 25,
  width: 580,
  // marginBottom: 25,
};

export class LoginForm extends Component {
  /* DONE: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
  render() {
    return (
      <center>
        <Container md={1} style={style}>
          <Row>
            <Col
              sm={{ size: 'auto', offset: 0 }}
              md={{ size: 'auto', offset: 1 }}
            >
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
