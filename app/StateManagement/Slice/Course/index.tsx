import { CourseTypeObj, CourseTypeRes } from '@/app/Models/Course';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import BaseApi from '../../Base';
// Fetch Function

const asyncGetAllCourses = createAsyncThunk(
  'asyncGet/Courses',
  async (_, ThunkControl) => {
    try {
      const response = await BaseApi.get<CourseTypeRes>('/course');
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
);

// Types
type CourseStateType = {
  data: CourseTypeObj[];
  loading: boolean;
  error: string;
};

// Slice

const initialState: CourseStateType = {
  data: [],
  loading: false,
  error: '',
};

const CourseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Pending
    builder.addCase(asyncGetAllCourses.pending, (state: CourseStateType) => {
      state.loading = true;
      state.data = [];
      state.error = '';
    });
    // FullField
    builder.addCase(
      asyncGetAllCourses.fulfilled,
      (state: CourseStateType, action: PayloadAction<CourseTypeRes>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = '';
      }
    );
    // Error
    builder.addCase(
      asyncGetAllCourses.rejected,
      (state: CourseStateType, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.error.message || 'Something went Error';
      }
    );
  },
});

export { asyncGetAllCourses };

export default CourseSlice.reducer;
