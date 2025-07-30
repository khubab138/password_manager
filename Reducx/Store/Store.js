import { configureStore } from "@reduxjs/toolkit";
import WebManagementReducer from "../Slices/WebsiteManagementSlices";
import AppManagementReducer from "../Slices/ApplicationManagementSlice";
import KeyManagementReducer from "../Slices/KeyManagementSlice";
import SectionReducer from "../Slices/SectionSlice";

export const store = configureStore({
  reducer: {
    WebManagement: WebManagementReducer,
    AppManagement: AppManagementReducer,
    KeyManagement: KeyManagementReducer,
    SectionCheck: SectionReducer,
  },
});
