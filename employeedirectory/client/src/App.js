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
  // const employeeData = [
  //   {
  //     name: "Norman Lei",
  //     gender: "Male",
  //     email: "normanlei0901@gmail.com",
  //     phone: "(206)349-3478",
  //     department: "Full-Stack"
  //   },
  //   {
  //     name: "Wenfu Lei",
  //     gender: "Male",
  //     email: "normanlei@gmail.com",
  //     phone: "(206)349-3477",
  //     department: "Full-Stack"
  //   },
  //   {
  //     name: "Yvonne Chen",
  //     gender: "Female",
  //     email: "xinyachen@gmail.com",
  //     phone: "(206)388-3478",
  //     department: "Front-end"
  //   },
  //   {
  //     name: "Xinya Chen",
  //     gender: "Female",
  //     email: "yvonnechen@gmail.com",
  //     phone: "(206)529-3478",
  //     department: "Back-end"
  //   },
  //   {
  //     name: "Mike Jack",
  //     gender: "Male",
  //     email: "jackmike@gmail.com",
  //     phone: "(206)349-9191",
  //     department: "Front-end"
  //   },
  // ];
  let employeesData = [];
  const columns = React.useMemo(
    () => [
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
    console.log(API.getAllEmployees());
    //setEmployees(employeesData);
  }, []);

  const handleInputChange = event => {
    setData({ 
      search: event.target.value,
      category: data.category,
      error: data.error
    });
  };

  const handleOptionChange = event => {
    setData({ 
      search: data.search,
      category: event.target.value,
      error: data.error
    });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (!data.search) {
      return;
    }
    const newEmployees = employees.filter(employee =>
      employee[data.category].toLowerCase().includes(data.search.toLowerCase())
    );
    setEmployees(newEmployees);
  };

  return (
    <Wrapper>
      <Navbar modalShow={modalShow} setModalShow={setModalShow}></Navbar>
      <Container>
        <SearchForm
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          handleOptionChange={handleOptionChange}
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