import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ConnectForm = ({ show, onClose, onConnect }) => {
  const [selectedOrganization, setSelectedOrganization] = useState('');

  const handleConnect = () => {
    // Check if an organization is selected before proceeding
    if (selectedOrganization) {
      onConnect(selectedOrganization);
      onClose();
    } else {
      // If no organization is selected, you can handle this case (e.g., show an error message)
      console.error("Please choose an organization before connecting.");
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Select Zoho Books Organization</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="organization">
            <Form.Label>Choose organization:</Form.Label>
            <Form.Control
              as="select"
              value={selectedOrganization}
              onChange={(e) => setSelectedOrganization(e.target.value)}
            >
              <option value=" Please choose an organization.">Please choose an organization</option>
              <option value="org1">Organization 1</option>
              <option value="org2">Organization 2</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleConnect}>
          Connect
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConnectForm;


