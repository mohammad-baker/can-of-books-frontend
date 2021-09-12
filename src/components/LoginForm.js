import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const style={
  marginLeft:100,
  marginTop:150,
}
export class LoginForm extends Component {
  render() {
    return (
      <Container>
        <Row style={style} md={1}>
          <Col sm></Col>
          <Col sm>
            <InputGroup className='mb-3' style={{ width: '30rem' }}>
              <InputGroup.Text id='basic-addon1'>@</InputGroup.Text>
              <FormControl
                placeholder='Username'
                aria-label='Username'
                aria-describedby='basic-addon1'
              />
            </InputGroup>

            <InputGroup className='mb-3' style={{ width: '30rem' }}>
              <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby='basic-addon2'
              />
              <InputGroup.Text id='basic-addon2'>@example.com</InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginForm;
