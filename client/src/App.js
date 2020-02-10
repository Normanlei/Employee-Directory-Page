import React, { useEffect, useState } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import Container from "./components/Container";
import Table from "./components/Table";
import Alert from "./components/Alert";
import API from "./utils/API";

function App() {
  const [modalShow, setModalShow] = useState(false);
  let employeesData = [];
  const columns = React.useMemo(
    () => [
      {
        Header: 'Image',
        accessor: 'image',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },

      {
        Header: 'Gender',
        accessor: 'gender',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
      },
      {
        Header: 'Department',
        accessor: 'department',
      },
    ],
    []
  );
  const [employees, setEmployees] = useState(employeesData);

  const [data, setData] = useState({
    search: "",
    category: "name",
    error: ""
  });


  useEffect(() => {   ///would be api call here
    API.getAllEmployees()
      .then(data => {
        // eslint-disable-next-line
        employeesData = data;
        setEmployees(employeesData);
      });
  }, []);

  const renderAllEmployee = () => {
    API.getAllEmployees()
      .then(data => {
        employeesData = data;
        setEmployees(employeesData);
      })
  };

  const handleInputChange = event => {
    setData({
      search: event.target.value,
      category: data.category,
      error: ""
    });
  };

  const handleOptionChange = event => {
    setData({
      search: data.search,
      category: event.target.value,
      error: ""
    });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (!data.search) {
      setData({
        search: data.search,
        category: data.category,
        error:"Please Enter A Valid Query!!!"
      });
      return;
    }
    const newEmployees = employees.filter(employee =>
      employee[data.category].toLowerCase().includes(data.search.toLowerCase())
    );
    if (newEmployees.length===0) {
      setData({
        search: data.search,
        category: data.category,
        error:"No Relevant Data Found!!!"
      });
      return;
    }
    setEmployees(newEmployees);
  };

  return (
    <Wrapper>
      <Navbar modalShow={modalShow} setModalShow={setModalShow} loadPage={renderAllEmployee}></Navbar>
      <Container>
        <SearchForm
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          handleOptionChange={handleOptionChange}
          renderAllEmployee={renderAllEmployee}
        ></SearchForm>
        <Alert type="danger" style={{ opacity: data.error ? 1 : 0, marginBottom: 10 }}>
          {data.error}
        </Alert>
        <Table columns={columns} data={employees}></Table>
      </Container>
    </Wrapper>
  );
}


export default App;