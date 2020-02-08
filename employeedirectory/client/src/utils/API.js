
export default {
  // getAllEmployees: function() {
  //   return new Promise((resolve, reject) => {
  //     fetch("/api/Employees").then((res) => {
  //       console.log(res);
  //       resolve(res);
  //     }).catch((err) => reject(err));
  //   });
  // },
  getAllEmployees: function() {
      fetch("/api/Employees")
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {return err});
  }
};
