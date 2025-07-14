import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type initialStateProps = {
  isOpen: boolean;
  reportTitle: string;
};

const initialState: initialStateProps = {
  isOpen: false,
  reportTitle: "",
};

const reportFormSlice = createSlice({
  name: "reportForm",
  initialState,
  reducers: {
    openForm: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.reportTitle = action.payload;
    },
    closeForm: (state) => {
      state.isOpen = false;
      state.reportTitle = "";
    },
  },
});
export const { openForm, closeForm } = reportFormSlice.actions;

export default reportFormSlice.reducer;
