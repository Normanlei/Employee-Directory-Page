import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm({ handleFormSubmit, handleInputChange, handleOptionChange}) {


  return (
    <form className="search form-inline justify-content-center">
      <div className="form-group">
        <label htmlFor="language">Search:</label>
        <input
          name="term"
          list="term"
          type="text"
          className="form-control mx-2"
          placeholder="search term"
          onChange = {handleInputChange}
        />
      </div>
      <div className="form-group mx-3">
        <label htmlFor="category">Search Category:</label>
        <select className="category form-control mx-2" onChange ={handleOptionChange}>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="department">Department</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mx-3" onClick={handleFormSubmit}>Search</button>
    </form>
  );
}

export default SearchForm;
