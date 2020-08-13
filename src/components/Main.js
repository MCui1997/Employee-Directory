import React, { useState, useEffect } from "react";
import Table from "./Table";
import Nav from "./Nav";
import API from "../utils/API";
import MainContext from "../utils/MainContext";

const Area = () => {
  const [developerState, setDeveloperState] = useState({
    users: [],
    order: "descend",
    filteredUsers: [],
    headings: [
      { name: "image", width: "25%"},
      { name: "name", width: "25%"},
      { name: "phone", width: "25%"},
      { name: "email", width: "25%"}
    ]
  });

  //Need to get data from axios
  useEffect(() => {
    API.getUsers().then(results => {
      console.log(results.data.results);
      setDeveloperState({
        ...developerState,
        users: results.data.results,
        filteredUsers: results.data.results
      });
    });
  }, []);

  //Function to sort whenever clicked
  const handleSort = heading => {
    let currentOrder = developerState.headings
      .filter(elem => elem.name === heading).map(elem => elem.order).toString();





  return (
    <MainContext.Provider
      value={{ developerState, handleSearchChange, handleSort }}
    >
      <Nav />
      <div className="data-area">
        {developerState.filteredUsers.length > 0 ? <Table /> : <div></div>}
      </div>
    </MainContext.Provider>
  );
};

export default Area;
