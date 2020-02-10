import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import API from "../../utils/API";

function AddMemberModal(props) {
  const [name, setName] = useState();
  const [gender, setGender] = useState("male");
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [department, setDepartment] = useState("fullstack");
  const [imagePath, setImagePath] = useState();

  let ran = 0;

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

  const handleImageUpload = event => {
    //const files = event.target.files;
    const files = document.getElementById("upload").files;
    console.log(ran+files[0].name);
    ran++;
    console.log(ran);
    //setImagePath(files[0].name);
    //API.addImage(files[0]);
  };

  const handleSubmit = event => {
    event.preventDefault();
    let newEmployee = {
      name: name,
      gender: gender,
      email: email,
      phone: phone,
      department: department,
      image:imagePath ? imagePath:"blank-template.jpg"
    };
    console.log(newEmployee);
    API.addEmployee(newEmployee)
      .then(() => {
        props.loadPage();
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
              pattern="([0-9]{3})[0-9]{3}-[0-9]{4}"
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
        </form>
        <form action="/upload" method="POST" encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="pic">Upload Profile Image:</label>
            <input type="file" className="form-control-file" name={ran} id="upload"></input>
          </div>
          <button className="btn btn-success" type="submit" onClick={handleImageUpload}>Upload</button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddMemberModal;