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
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                name='title'
                placeholder='Enter Cat Name'
                defaultValue={this.props.selectedBookDataObj.title}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Cat Breed</Form.Label>
              <Form.Control
                type='text'
                name='description'
                placeholder='Enter Cat Breed'
                defaultValue={this.props.selectedBookDataObj.description}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Cat Image</Form.Label>
              <Form.Control
                type='text'
                name='status'
                placeholder='Enter Cat Image'
                defaultValue={this.props.selectedBookDataObj.status}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Cat Image</Form.Label>
              <Form.Control
                type='text'
                name='email'
                placeholder='Enter Cat Image'
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
