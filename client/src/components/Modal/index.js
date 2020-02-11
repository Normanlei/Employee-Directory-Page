import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import API from "../../utils/API";
import Alert from "../Alert";


function AddMemberModal(props) {
  const [name, setName] = useState();
  const [gender, setGender] = useState("Male");
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [department, setDepartment] = useState("Full-Stack");
  const [imagePath, setImagePath] = useState();

  const [data, setData] = useState({
    error: ""
  });

  const [imagedata, setImageData] = useState({
    success: "",
    error: ""
  });


  let ran = 0;

  const handleNameChange = event => {
    setData({ error: "" });
    setName(event.target.value);
  };

  const handleGenderChange = event => {
    setGender(event.target.value);
  };

  const handleEmailChange = event => {
    setData({ error: "" });
    setEmail(event.target.value);
  };

  const handlePhoneChange = event => {
    setData({ error: "" });
    setPhone(event.target.value);
  };

  const handleDepartmentChange = event => {
    setDepartment(event.target.value);
  };


  const handleSubmit = event => {
    event.preventDefault();
    if (!(name && email && phone)) {
      setData({ error: "Please Fulfil All the Query Inputs!" });
      return;
    }
    setImageData({ success: "", error: "" });
    setData({ error: "" });
    let newEmployee = {
      name: name,
      gender: gender,
      email: email,
      phone: phone,
      department: department,
      image: imagePath ? imagePath : "blank-template.jpg"
    };
    console.log(newEmployee);
    API.addEmployee(newEmployee)
      .then((data) => {
        if (!data.errors) {
          props.loadPage();
          props.onHide();
        } else {
          setData({ error: data.message });
        }
      });
  };

  const handleSubmitImage = event => {
    event.preventDefault();
    fetch(event.target.action, {
      method: 'POST',
      encType: "multipart/form-data",
      body: new FormData(event.target) // event.target is the form
    }).then((resp) => {
      return resp.json(); // or resp.text() or whatever the server sends
    }).then((body) => {
      console.log(body);
      if (body.err) {
        setImageData({ success: "", error: body.err });
      } else {
        setImagePath(body.name);
        setImageData({ success: body.message, error: "" });
      }
    }).catch((error) => {
      console.log(error);
    });
  };

  const clearAlert = event => {
    setImageData({ success: "", error: "" });
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
          <Alert type="danger" style={{ display: data.error ? 'block' : 'none', marginBottom: 10 }}>
            {data.error}
          </Alert>
        </form>
        <form id="imageSubmit" action="/upload" method="POST" encType="multipart/form-data" onSubmit={handleSubmitImage}>
          <div className="form-group">
            <label htmlFor="pic">Upload Profile Image:</label>
            <input type="file" className="form-control-file" name="userImage" id="upload" onChange={clearAlert}></input>
          </div>
          <button className="btn btn-success" type="submit">Upload(Upload Before Submit)</button>
          <Alert type="danger" style={{ display: imagedata.error ? 'block' : 'none', marginBottom: 10 }}>
            {imagedata.error}
          </Alert>
          <Alert type="success" style={{ display: imagedata.success ? 'block' : 'none', marginBottom: 10 }}>
            {imagedata.success}
          </Alert>
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