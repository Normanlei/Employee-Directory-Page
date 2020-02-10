import React from "react";
import { useTable, useSortBy } from "react-table";
import "./style.css";

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  )


  return (
    <>
      <table className="table table-striped table-borderless table-hover" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th scope="col" {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(
            (row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    let name = cell.value?cell.value:"blank-template.jpg";
                    let path = "/uploads/"+name;
                    return (

                      cell.column.Header === "Image" ?

                        (<td {...cell.getCellProps()}><img className="img-responsive" src={path}style={{width:'35px', height:'35px'}}></img></td>) :

                        (<td {...cell.getCellProps()}>{cell.render('Cell')}</td>)


                    )
                  })}
                </tr>
              )
            }
          )}
        </tbody>
      </table>
      <br />
    </>
  )
}

export default Table;