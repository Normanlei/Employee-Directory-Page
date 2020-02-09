import React from "react";
import "./style.css";
import AddMemberModal from "../Modal";
import { Button } from 'react-bootstrap';


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar({ modalShow, setModalShow, reFresh }) {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">
        Sqwash
      </span>
      <div className="ml-auto">
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Add Employee
        </Button>
      </div>
      <AddMemberModal
        reFresh = {reFresh}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </nav>
  );
}

export default Navbar;
