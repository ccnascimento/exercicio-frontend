import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { projectApi } from "./services/project";

export const store = configureStore({
  reducer: {
    [projectApi.reducerPath]: projectApi.reducer,
  },
});

setupListeners(store.dispatch);
