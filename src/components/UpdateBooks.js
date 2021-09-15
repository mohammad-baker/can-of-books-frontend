import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export class UpdateBooks extends Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.handelDisplayUpdateModal}
      >
        <Modal.Body>
          <Form onSubmit={this.props.handelUpdateModal}>
            <Form.Group className='mb-3'>
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                type='text'
                name='title'
                placeholder='Enter title for the Book'
                defaultValue={this.props.selectedBookDataObj.title}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Book Description</Form.Label>
              <Form.Control
                type='text'
                name='description'
                placeholder='Enter description for the book'
                defaultValue={this.props.selectedBookDataObj.description}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Book Availability</Form.Label>
              <Form.Control
                type='text'
                name='status'
                placeholder='Enter True if the Book Is available and False if it not'
                defaultValue={this.props.selectedBookDataObj.status}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='text'
                name='email'
                placeholder='Enter your Email'
                defaultValue={this.props.selectedBookDataObj.email}
              />
            </Form.Group>
            <Button
              variant='primary'
              type='button'
              onClick={this.props.handelDisplayUpdateModal}
            >
              Close
            </Button>
            <Button style={{ marginLeft: 20 }} variant='primary' type='submit'>
              Update!
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default UpdateBooks;
