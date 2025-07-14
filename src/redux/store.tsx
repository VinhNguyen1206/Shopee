import { configureStore } from "@reduxjs/toolkit";
import ReportFomReducer from "../redux/reportFormSlice";

export const store = configureStore({
  reducer: {
    reportForm: ReportFomReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
