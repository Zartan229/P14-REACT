import { createAsyncThunk } from "@reduxjs/toolkit";

// Async pour envoyer un employer
export const pushEmployee = createAsyncThunk(
  "employees/push",
  async (employeeData, { rejectWithValue }) => {
    try {
      return employeeData;
    } catch (error) {
      return rejectWithValue("Echec de l'ajout d'un employé");
    }
  }
);

