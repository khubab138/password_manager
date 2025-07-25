import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const info = [
  // {
  //   website: "dfd",
  //   email: "dsfd",
  //   password: "sfdsf",
  //   id: "69f43b85-5dbe-422a-b18c-3eb6045e1284",
  //   toggle: true,
  //   edit: false,
  // },
];

export const ManagementSlice = createSlice({
  name: "manage",
  initialState: info,
  reducers: {
    add: (state, action) => {
      state.push({
        website: action.payload.website,
        email: action.payload.email,
        password: action.payload.password,
        id: uuidv4(),
        toggle: false,
        edit: false,
      });
    },
    passToggle: (state, action) => {
      return state.map((web) => {
        return web.id === action.payload
          ? {
              ...web,
              toggle: !web.toggle,
            }
          : web;
      });
    },
    editToggle: (state, action) => {
      return state.map((web) => {
        return web.id === action.payload
          ? {
              ...web,
              edit: !web.edit,
            }
          : web;
      });
    },
    webdelete: (state, action) => {
      return state.filter((web) => web.id !== action.payload);
    },

    webEdit: (state, action) => {
      state.map((web) => {
        return web.id === action.payload.id
          ? {
              ...web,
              website: action.payload.website,
              email: action.payload.email,
              password: action.payload.password,
            }
          : web;
      });
    },
  },
});

export const {
  add,
  passToggle,
  webdelete,
  webEdit,
  editToggle,
  webdToggldelete,
} = ManagementSlice.actions;
export default ManagementSlice.reducer;
