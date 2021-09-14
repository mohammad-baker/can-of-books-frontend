import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import AddBooks from './AddBooks';
import Button from 'react-bootstrap/Button';

require('dotenv').config();
var URL = 'https://jm-can-of-books-backend.herokuapp.com';

const style = {
  width: 500,
  marginTop: 30,
  marginBottom:25,

};
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: [],
      showAddModal: false,
    };
  }
  handelAddModal = (e) => {
    e.preventDefault();

    const reqBody = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
      email: e.target.email.value,
    }

    console.log(reqBody)
    axios.post(`${process.env.URL}/books`, reqBody).then(creatBookObject => {
      this.state.booksData.push(creatBookObject.data); 
      this.setState({ booksData: this.state.booksData }); 
      this.handelDisplayAddModal(); 
    }).catch(() => alert("Something went wrong!"));
  }
  handelDisplayAddModal = () => {
    this.setState({ showAddModal: !this.state.showAddModal });
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
      <div>
        <Button onClick={this.handelDisplayAddModal}>
          Adding books
        </Button>
        {
          this.state.showAddModal &&
          <>
            <AddBooks
              show={this.state.showAddModal}
              handelAddModal={this.handelAddModal}
              handelDisplayAddModal={this.handelDisplayAddModal}
            />
          </>
        }
      <Container>
        <Row md={1}>
          <Col
            sm={{ size: 'auto', offset: 0 }}
            md={{ size: 'auto', offset:4}}
          >
            {this.state.booksData.length? (
              <Carousel style={style} itemsToShow={this.state.booksData.length}>
                {this.state.booksData.map((element) => {
                 
                  return (
                    
                    <Carousel.Item interval={3000}>
                      
                      <Carousel.Caption>
                        <h3>{element.title}</h3>
                        <p>{element.description}</p>
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
      </div>
    );
  }
}

export default BestBooks;
