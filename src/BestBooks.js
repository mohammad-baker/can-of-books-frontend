import React, { Component } from 'react'
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'
export class BestBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            booksDAta: [],
        }
    
      }
    


    componentDidMount = () => {
       
        axios.get(`${process.env.REACT_APP_API_URL}/books`).then((bookResponse) => {
    
          this.setState({ booksDAta: bookResponse.data });
        }).catch(error => alert(error.message));
    
    console.log(this.state.booksDAta)
      }
      render() {
        return (
          <div>
              <Carousel>
            {
              this.state.booksDAta.length > 0 &&
              <>
                {
                  this.state.booksDAta.map(book => {
                    return (
                      <>
                      
  <Carousel.Item>
  <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>{book}</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
                      </>
                    )
                  })
              }

              </>
              
            }
             </Carousel> 
          </div>
        )
      }
    }
export default BestBooks
