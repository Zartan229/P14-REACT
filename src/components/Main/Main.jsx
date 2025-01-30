import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "../Select/Select";
import Input from "../Input/Input";
import { pushEmployee } from "../../Utility/Utility";
import Modal from "modalmaxoc"; // NPM PACKAGE
import { useDispatch } from "react-redux";
import departmentsData from "../../data/departments.json";
import statesData from "../../data/states.json"

export default function Main() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    dispatch(pushEmployee(formData));
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <section>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <a href="employee">View Current Employees</a>
        <h2>Create Employee</h2>
        <form id="create-employee" onSubmit={saveEmployee}>
          <Input
            id="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <Input
            id="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
          />

          <label htmlFor="dateOfBirth">Date of Birth</label>
          <DatePicker
            selected={
              formData.dateOfBirth ? new Date(formData.dateOfBirth) : null
            }
            onChange={(date) =>
              handleInputChange({
                target: {
                  id: "dateOfBirth",
                  value: date ? date.toISOString().split("T")[0] : "",
                },
              })
            }
            dateFormat="yyyy-MM-dd"
            placeholderText="Select a date"
          />

          <label htmlFor="startDate">Start Date</label>
          <DatePicker
            selected={formData.startDate ? new Date(formData.startDate) : null}
            onChange={(date) =>
              handleInputChange({
                target: {
                  id: "startDate",
                  value: date ? date.toISOString().split("T")[0] : "",
                },
              })
            }
            dateFormat="yyyy-MM-dd"
            placeholderText="Select a date"
          />

          <fieldset className="address">
            <legend>Address</legend>
            <Input
              id="street"
              label="Street"
              value={formData.street}
              onChange={handleInputChange}
            />
            <Input
              id="city"
              label="City"
              value={formData.city}
              onChange={handleInputChange}
            />
            <Select
              id="state"
              label="State"
              options={statesData.states}
              valueKey="abbreviation"
              labelKey="name"
              value={formData.state}
              onChange={(e) =>
                handleInputChange({
                  target: { id: "state", value: e.target.value },
                })
              }
            />
            <Input
              id="zipCode"
              label="Zip Code"
              type="number"
              value={formData.zipCode}
              onChange={handleInputChange}
            />
          </fieldset>

          <Select
            id="department"
            label="Department"
            options={departmentsData.departments}
            valueKey="abbreviation"
            labelKey="name"
            value={formData.department}
            onChange={(e) =>
              handleInputChange({
                target: { id: "department", value: e.target.value },
              })
            }
          />
          <button type="submit">Save</button>
        </form>

        <Modal
          isOpen={isOpen}
          onClose={close}
          modalContent="Employee Created!"
        />
      </div>
    </section>
  );
}
