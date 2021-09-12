import React, { Component } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
require('dotenv').config();
var URL = 'https://jm-can-of-books-backend.herokuapp.com';

const style={
  width:700,
  marginTop:25,
}
export default class BestBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: [],
    };
  }
  componentDidMount = () => {
    axios
      .get(`${URL}/books`)
      .then((bookResponse) => {
        this.setState({ booksData: bookResponse.data });
      })
      .catch((error) => alert(error.message));
  };

  render() {
    return (
      <Container >
        <Row md={1}>
        <Col sm></Col>
          <Col  sm>
            
            {this.state.booksData.length > 0 && (
              <Carousel style={style} itemsToShow={this.state.booksData.length}>
                {this.state.booksData.map((element) => {
                  return (
                    <Carousel.Item  interval={3000}>
                      <img
                        className='d-block w-100'
                        src='https://upload.wikimedia.org/wikipedia/commons/b/b2/A_black_background.jpg'
                        alt='First slide'
                      />
                      <Carousel.Caption>
                        <h3>{element.title}</h3>
                        <p>
                          {element.description}
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            )}
            </Col>
       
        </Row>
      </Container>
    );
  }
}
