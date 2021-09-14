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
                name='BookTitle'
                placeholder='Enter Book Title'
                defaultValue={this.props.selectedBookDataObj.title}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Book Description</Form.Label>
              <Form.Control
                type='text'
                name=' BookDescription'
                placeholder='Enter Book Description'
                defaultValue={this.props.selectedBookDataObj.description}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Book Availability Status</Form.Label>
              <Form.Control
                type='text'
                name='BookStatus'
                placeholder='Enter Book Availability Status'
                defaultValue={this.props.selectedBookDataObj.status}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='text'
                name='Email'
                placeholder='Enter Your Email'
                defaultValue={this.props.selectedBookDataObj.email}
              />
            </Form.Group>
            <Form.Group>
              <Button
                onClick={this.props.handelDisplayUpdateModal}
                variant='secondary'
              >
                Close
              </Button>
              <Button
                style={{ marginLeft: 10 }}
                variant='primary'
                type='submit'
              >
                Update Book Information !
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default UpdateBooks;
