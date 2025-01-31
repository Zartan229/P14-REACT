import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import classes from "./style.module.css"

export default function Table() {
  const employees = useSelector((state) => state.employees);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  // Filtre les employé en fonction des élément dans le state
  useEffect(() => {
    setFilteredEmployees(
      employees.filter((employee) =>
        (employee.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          employee.lastName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          employee.department?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          employee.city?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          employee.state?.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    );
  }, [searchQuery, employees]);
  //Gestion des collones avec react-data-table-component
  const columns = [
    { name: "First Name", selector: (row) => row.firstName, sortable: true },
    { name: "Last Name", selector: (row) => row.lastName, sortable: true },
    { name: "Start Date", selector: (row) => row.startDate, sortable: true },
    { name: "Department", selector: (row) => row.department, sortable: true },
    {
      name: "Date of Birth",
      selector: (row) => row.dateOfBirth,
      sortable: true,
    },
    { name: "Street", selector: (row) => row.street },
    { name: "City", selector: (row) => row.city },
    { name: "State", selector: (row) => row.state },
    { name: "Zip Code", selector: (row) => row.zipCode },
  ];

  return (
    <div className={classes.colorHeader}>
      <h1>Current Employees</h1>
      
      <DataTable
        title="Employee List"
        columns={columns}
        data={filteredEmployees}
        pagination
      />
      <div className={classes.queryFlex}><a href="/">Create Employee</a>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>      

    </div>
  );
}
