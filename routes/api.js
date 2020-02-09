const router = require("express").Router();
const Employees = require("../models/employees.js");


router.post("/api/add/Employees", ({ body }, res) => {
  Employees.create(body)
    .then(dbEmployees => {
      res.json(dbEmployees);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/Employees/bulk", ({ body }, res) => {
  Employees.insertMany(body)
    .then(dbEmployees => {
      res.json(dbEmployees);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/Employees", (req, res) => {
  Employees.find({})
    .then(dbEmployees => {
      res.json(dbEmployees);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
