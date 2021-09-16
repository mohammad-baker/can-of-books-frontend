import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
export class AddBooks extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handelDisplayAddModal}>
          <Modal.Body>
            <Form onSubmit={this.props.handelAddModal}>
              <Form.Group className='mb-3'>
                <Form.Label>Book Title</Form.Label>
                <Form.Control
                  type='text'
                  name='title'
                  placeholder='Enter the title of the book'
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Book Description</Form.Label>
                <Form.Control
                  type='text'
                  name='description'
                  placeholder='Enter the Description of the Book'
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Book Availability Status</Form.Label>
                <Form.Control
                  type='text'
                  name='status'
                  placeholder='Enter the status'
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='text'
                  name='email'
                  placeholder='Enter your Email'
                />
              </Form.Group>
              <Button
                onClick={this.props.handelDisplayAddModal}
                variant='secondary'
              >
                Close
              </Button>
              <Button
                style={{ marginLeft: 10 }}
                variant='primary'
                type='submit'
              >
                Insert Book !
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default withAuth0(AddBooks);
