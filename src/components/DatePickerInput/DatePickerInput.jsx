import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerInput ({ id, label, value, onChange }) {
  return (<>
      <label htmlFor={id}>{label}</label>
      <DatePicker
        selected={value ? new Date(value) : null}
        onChange={(date) =>
          onChange({
            target: {
              id,
              value: date ? date.toISOString().split("T")[0] : "",
            },
          })
        }
        dateFormat="yyyy-MM-dd"
        placeholderText="Select a date"
      /></>
  );
};