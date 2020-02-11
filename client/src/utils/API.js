
export default {
  getAllEmployees: function () {
    return new Promise((resolve, reject) => {
      fetch("/api/Employees")
        .then(response => response.json())
        .then(data => {
          resolve(data);
        })
        .catch((err) => reject(err));
    });
  },
  addEmployee: function (newEmployee) {
    return new Promise((resolve, reject) => {
      fetch("/api/add/Employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmployee)
      })
        .then(response => response.json())
        .then(data => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  addImage: function (file) {
    console.log(file);
    return new Promise((resolve, reject) => {
      fetch("/upload", {
        method: "POST",
        enctype: "multipart/form-data",
        body: file
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch((err) => console.log(err));
    });
  }
};
