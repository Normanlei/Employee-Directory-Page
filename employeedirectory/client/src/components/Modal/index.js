import React from "react";
import { Button, Modal } from 'react-bootstrap';

function AddMemberModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Adding Employee
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="search form-group">
          <div className="form-group">
            <label htmlFor="language">Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Mike Lee"
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select className="gender form-control">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              className="form-control"
              placeholder="example@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              className="form-control"
              pattern = "([0-9]{3})[0-9]{3}-[0-9]{4}"
              placeholder="Format:(123)456-7890"
            />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department:</label>
            <select className="department form-control">
              <option value="fullstack">Full-Stack</option>
              <option value="frontend">Front-end</option>
              <option value="backend">Back-end</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddMemberModal;