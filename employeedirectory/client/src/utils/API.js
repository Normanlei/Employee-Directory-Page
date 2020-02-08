
export default {
  getAllEmployees: function() {
    return new Promise((resolve, reject) => {
      fetch("/api/Employees")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        resolve(data);
      })
      .catch((err) => reject(err));
    });
  }
};
