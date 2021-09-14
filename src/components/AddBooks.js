  
import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap'

export class AddBooks extends Component {

    render() {
        

        return (
           <div>
            
                <Modal show={this.props.show} onHide={this.props.handelDisplayAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>ADD a Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.handelAddModal}>
            <Form.Group className="mb-3">
              <Form.Label>Book name/title</Form.Label>
              <Form.Control type="text" name="title" placeholder="Enter the title" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Book description</Form.Label>
              <Form.Control type="text" name="description" placeholder="Enter the description" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>book status</Form.Label>
              <Form.Control type="text" name="status" placeholder="Enter the status" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>email</Form.Label>
              <Form.Control type="text" name="email" placeholder="Enter email" />
            </Form.Group>
            <Button variant="secondary">Close</Button>
            <Button variant="primary" type="submit">
            insert book !
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
            </div> 
                
        )
    }
}

export default AddBooks;
