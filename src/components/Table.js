import React, { useContext } from "react";
import Body from "./Body";
import MainContext from "../utils/MainContext";

const Table = () => {
  const context = useContext(MainContext);

  return (

    <div className="datatable">
      <table
        id="table"
        className="table table-striped">

        
        <thead>
          <tr>
            {context.developerState.headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {context.handleSort(name);}}>
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <Body />
      </table>
    </div>
  );
}

export default Table;
