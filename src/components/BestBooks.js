import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
require('dotenv').config();

const URL = 'https://jm-can-of-books-backend.herokuapp.com';
const style = {
  width: 500,
  marginTop: 30,
  marginBottom: 25,
};

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: [],
      showModal: false,
    };
  }
  handelDeleteBooks = (bookId) => {
    axios
      .delete(`${URL}/books/${bookId}`)
      .then((deleteResponse) => {
        if (deleteResponse.data.deletedCount === 1) {
          const newBookArray = this.state.booksData.filter(
            (Book) => Book._id !== bookId
          );

          this.setState({ booksData: newBookArray });
        }
      })
      .catch((error) => console.log(error));
  };

  /* DONE: Make a GET request to your API to fetch books for the logged in user  */
  componentDidMount = () => {
    axios
      .get(`${URL}/books`)
      .then((bookResponse) => {
        this.setState({ booksData: bookResponse.data });
      })
      .catch((error) => alert(error.message));
  };

  render() {
    /* DONE: render user's books in a Carousel */
    return (
      <Container>
        <Row md={1}>
          <Col
            sm={{ size: 'auto', offset: 0 }}
            md={{ size: 'auto', offset: 4 }}
          >
            {this.state.booksData.length ? (
              <Carousel style={style} itemsToShow={this.state.booksData.length}>
                {this.state.booksData.map((element) => {
                  console.log(this.state.booksData);
                  return (
                    <Carousel.Item interval={3000}>
                      <Carousel.Caption>
                        <h3>{element.title}</h3>
                        <p>{element.description}</p>
                        <Button
                          variant='danger'
                          style={{ marginBottom: 25 }}
                          onClick={() => this.handelDeleteBooks(element._id)}
                        >
                          Delete
                        </Button>
                      </Carousel.Caption>

                      <img
                        className='d-block w-100'
                        src='https://cdn.pixabay.com/photo/2017/06/08/07/20/texture-2382757_960_720.jpg'
                        alt='First slide'
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            ) : (
              <h2>Book Collection is Empty !(</h2>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BestBooks;
