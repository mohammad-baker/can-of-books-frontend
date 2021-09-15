import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import AddBooks from './AddBooks';
import UpdateBooks from './UpdateBooks';

require('dotenv').config();

const URL = 'https://jm-can-of-books-backend.herokuapp.com';
const style = {
  width: 'auto' ,
  // height: 'auto',
  marginTop: 5,
  marginRight: 30,
  marginLeft:-15

};

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: [],
      showAddModal: false,
      showUpdateModal: false,
      selectedBookDataObj: {},
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
  handelAddModal = (e) => {
    e.preventDefault();
    const reqBody = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
      email: e.target.email.value,
    };
    axios
      .post(`${URL}/books`, reqBody)
      .then((creatBookObject) => {
        this.state.booksData.push(creatBookObject.data);
        this.setState({ booksData: this.state.booksData });
        this.handelDisplayAddModal();
      })
      .catch((error) => console.log(error));
  };

  handelUpdateModal = (e) => {
    e.preventDefault();
    const reqBody = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
      email: e.target.email.value,
    };
    axios
      .put(`${URL}/books/${this.state.selectedBookDataObj._id}`, reqBody)
      .then((updatedBookObject) => {
        const updateBookArr = this.state.booksData.map((book) => {
          if (book._id === this.state.selectedBookDataObj._id) {
            book = updatedBookObject.data;

            return book;
          }
          return book;
        });
        this.setState({
          booksData: updateBookArr,
          selectedBookDataObj: {},
        });
        this.handelDisplayUpdateModal();
      })
      .catch((error) => console.log(error));
  };

  handelDisplayAddModal = () => {
    this.setState({ showAddModal: !this.state.showAddModal });
  };
  handelDisplayUpdateModal = (bookObj) => {
    this.setState({
      showUpdateModal: !this.state.showUpdateModal,
      selectedBookDataObj: bookObj,
    });
  };
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
      <>
        <Container>
          {this.state.showAddModal && (
            <>
              <AddBooks
                show={this.state.showAddModal}
                handelAddModal={this.handelAddModal}
                handelDisplayAddModal={this.handelDisplayAddModal}
              />
            </>
          )}
        </Container>
        <Container>
          {this.state.showUpdateModal && (
            <>
              <UpdateBooks
                show={this.state.showUpdateModal}
                handelUpdateModal={this.handelUpdateModal}
                handelDisplayUpdateModal={this.handelDisplayUpdateModal}
                selectedBookDataObj={this.state.selectedBookDataObj}
              />
            </>
          )}
        </Container>
        <Container>
          <Row>
            <Col sm={50} md={50}>
              {this.state.booksData.length ? (
                <Carousel
                  style={style}
                  itemsToShow={this.state.booksData.length}
                >
                  {this.state.booksData.map((element) => {
                    return (
                      <Carousel.Item interval={3000}>
                        <Carousel.Caption>
                          <h3>{element.title}</h3>
                          <p>{element.description}</p>
                          <Row xs={3} md={3}>
                            <Col>
                              <Button
                                variant='success'
                                onClick={this.handelDisplayAddModal}
                              >
                                Add New Book
                              </Button>
                            </Col>

                            <Col>
                              <Button
                                onClick={() =>
                                  this.handelDisplayUpdateModal(element)
                                }
                              >
                                Update Book
                              </Button>
                            </Col>

                            <Col>
                              <Button
                                style={{
                                  margin: 'auto%',
                                }}
                                variant='danger'
                                onClick={() =>
                                  this.handelDeleteBooks(element._id)
                                }
                              >
                                Delete Book
                              </Button>
                            </Col>
                          </Row>
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
                <div>
                  <h2 style={{ marginTop: 50 }}>Book Collection is Empty</h2>
                  <Row>
                    <Col xs={1}>
                      <Button
                        variant='success'
                        onClick={this.handelDisplayAddModal}
                        style={{ marginBottom: 25 }}
                      >
                        Add Book
                      </Button>
                    </Col>
                  </Row>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default BestBooks;
