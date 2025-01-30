import { createReducer } from '@reduxjs/toolkit';
import { pushEmployee} from "./Utility";

const data = {
  employees: [],  
  loading: false, 
  error: null,
};

export const Redux = createReducer(data, (builder) => {
  builder
    .addCase(pushEmployee.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(pushEmployee.fulfilled, (state, action) => {
      state.loading = false;
      state.employees = [...state.employees, action.payload];
    })
    .addCase(pushEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default Redux;
