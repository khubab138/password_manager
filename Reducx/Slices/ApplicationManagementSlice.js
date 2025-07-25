import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const info = [
  {
    file: "Khubab.apk",
    email: "Khubab@gmail.com",
    password: "khubab123",
    id: "69f43b85-5dbe-422a-b18c-3eb6045e1284",
    toggle: true,
    edit: false,
  },
];

export const ApplicationManagementSlice = createSlice({
  name: "manageApp",
  initialState: info,
  reducers: {
    add: (state, action) => {
      state.push({
        file: action.payload.file,
        email: action.payload.email,
        password: action.payload.password,
        id: uuidv4(),
        toggle: false,
        edit: false,
        inputType: action.payload.inputType,
      });
    },
    passToggle: (state, action) => {
      return state.map((app) => {
        return app.id === action.payload
          ? {
              ...app,
              toggle: !app.toggle,
            }
          : app;
      });
    },
    editToggle: (state, action) => {
      return state.map((app) => {
        return app.id === action.payload
          ? {
              ...app,
              edit: !app.edit,
            }
          : app;
      });
    },
    appdelete: (state, action) => {
      return state.filter((app) => app.id !== action.payload);
    },

    appEdit: (state, action) => {
      state.map((app) => {
        return app.id === action.payload.id
          ? {
              ...app,
              website: action.payload.website,
              email: action.payload.email,
              password: action.payload.password,
            }
          : app;
      });
    },
  },
});

export const { add, passToggle, appdelete, appEdit, editToggle } =
  ApplicationManagementSlice.actions;
export default ApplicationManagementSlice.reducer;
