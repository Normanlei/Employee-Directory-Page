import React, {useState} from "react";
import { Button, Modal } from 'react-bootstrap';
import API from "../../utils/API";

function AddMemberModal(props) {
  const [name, setName] = useState();
  const [gender, setGender] = useState("male");
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [department, setDepartment] = useState("fullstack");

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleGenderChange = event => {
    console.log(event.target.value);
    setGender(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = event => {
    setPhone(event.target.value);
  };

  const handleDepartmentChange = event => {
    setDepartment(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    let newEmployee = {
      name: name,
      gender: gender,
      email: email,
      phone: phone,
      department: department
    };
    console.log(newEmployee);
    API.addEmployee(newEmployee)
    .then(()=>{
        props.reFresh();
        props.onHide();
    })
  };


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
              placeholder="First Name + Last Name"
              onChange={handleNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select className="gender form-control" onChange={handleGenderChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              className="form-control"
              placeholder="example@example.com"
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              className="form-control"
              pattern = "([0-9]{3})[0-9]{3}-[0-9]{4}"
              placeholder="Format:(123)456-7890"
              onChange={handlePhoneChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department:</label>
            <select className="department form-control" onChange={handleDepartmentChange}>
              <option value="Full-Stack">Full-Stack</option>
              <option value="Front-end">Front-end</option>
              <option value="Back-end">Back-end</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddMemberModal;