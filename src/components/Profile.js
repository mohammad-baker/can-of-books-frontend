import { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';
class Profile extends Component {
  render() {
    const user = this.props.auth0.user;
    return (
      <Container>
        <Row style={{marginTop:25,marginBottom:25}}>
          <Col md={{ span: 4, offset: 4 }}>
            <Card style={{ width: 'auto' }}>
              <Card.Img
                variant='top'
                src={user.picture}
                alt=''
                style={{ width: 'auto' }}
              />
              <Card.Body>
                <Card.Title>Name: {user.name}</Card.Title>
                <Card.Text>Email :{user.email}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withAuth0(Profile);
