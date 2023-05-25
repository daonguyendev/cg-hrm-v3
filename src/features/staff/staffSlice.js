import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  findStaffs,
  findStaff,
  createStaff,
  updateStaff,
  deleteStaff,
} from "../../api/staffAPI";

const initialState = {
  values: null,
  value: null,
  loading: false,
  error: null,
  success: false,
};

export const getStaffs = createAsyncThunk("staff/list", async () => {
  const response = await findStaffs();
  return response.data;
});

export const getStaff = createAsyncThunk("staff/detail", async (staffId) => {
  const response = await findStaff(staffId);
  return response.data;
});

export const addStaff = createAsyncThunk("staff/create", async (staff) => {
  const response = await createStaff(staff);
  return response.data;
});

export const editStaff = createAsyncThunk("staff/edit", async (staff) => {
  const response = await updateStaff(staff);
  return response.data;
});

export const removeStaff = createAsyncThunk("staff/remove", async (staffId) => {
  const response = await deleteStaff(staffId);
  return response.data;
});

export const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //Update states of get books action
      .addCase(getStaffs.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getStaffs.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getStaffs.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.values = action.payload;
        state.error = false;
      })

      //Update states of get book action
      .addCase(getStaff.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getStaff.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getStaff.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      })

      //Update states of add book action
      .addCase(addStaff.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(addStaff.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(addStaff.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      })

      //Update states of edit book action
      .addCase(editStaff.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(editStaff.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(editStaff.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      })

      //Update states of remove book action
      .addCase(removeStaff.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(removeStaff.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(removeStaff.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      });
  },
});

export const { setLoading, setError, setSuccess } = staffSlice.actions;

export const selectLoading = (state) => state.staff.loading;
export const selectError = (state) => state.staff.error;
export const selectSuccess = (state) => state.staff.success;
export const selectStaffList = (state) => state.staff.values;
export const selectStaffDetail = (state) => state.staff.value;
export const selectStaffAdded = (state) => state.staff.value;
export const selectStaffEdited = (state) => state.staff.value;
export const selectStaffRemoved = (state) => state.staff.value;

//Enhancement feature of staff slice
export const setLoadingTrueIfCalled = (isCalled) => (dispatch, getState) => {
  const currentValue = selectLoading(getState());
  if (currentValue === isCalled) {
    dispatch(setLoading(true));
  }
};

export default staffSlice.reducer;
