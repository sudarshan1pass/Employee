import { createSlice } from "@reduxjs/toolkit";

const savedData = JSON.parse(localStorage.getItem("storedata")) || [];

const initialState = {
  storedata: savedData,
};

export const createformSlice = createSlice({
  name: "createform",
  initialState,
  reducers: {
    setStoredata: (state, action) => {
      state.storedata.push(action.payload);
      localStorage.setItem("storedata", JSON.stringify(state.storedata));
    },

    setAllData: (state, action) => {
      state.storedata = action.payload;
      localStorage.setItem("storedata", JSON.stringify(state.storedata));
    },

    updateEmployee: (state, action) => {
      const updatedEmp = action.payload;

      state.storedata = state.storedata.map((emp) =>
        emp._id === updatedEmp._id ? updatedEmp : emp
      );

      localStorage.setItem("storedata", JSON.stringify(state.storedata));
    },

    deleteEmployee: (state, action) => {
      state.storedata = state.storedata.filter(
        (emp) => emp._id !== action.payload
      );

      localStorage.setItem("storedata", JSON.stringify(state.storedata));
    },
  },
});

export const {
  setStoredata,
  setAllData,
  updateEmployee,
  deleteEmployee,
} = createformSlice.actions;

export default createformSlice.reducer;