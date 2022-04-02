import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import departmentService from './departmentService'
  
const initialState = {
  departments: [],
  department: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// thunkAPI: an object containing all of the parameters that are normally passed to a Redux thunk function, as well as additional options
// Create new department
export const createDepartment = createAsyncThunk(
    'departments/create',
    async (departmentData, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await departmentService.createDepartment(departmentData)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )
  
  // Get user departments
  export const getDepartments = createAsyncThunk(
    'departments/getAll',
    async (_, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await departmentService.getDepartments()
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )

  export const editDepartment = createAsyncThunk(
    'departments/edit',
    async (id, departmentData, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await departmentService.editDepartment(id, departmentData)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )
    // Get single department
  // export const getDepartment = createAsyncThunk(
  //     'departments/getOne',
  //     async (id, thunkAPI) => {
  //       try {
  //         // const token = thunkAPI.getState().auth.user.token
  //         return await departmentService.getDepartment(id)
  //       } catch (error) {
  //         const message =
  //           (error.response &&
  //             error.response.data &&
  //             error.response.data.message) ||
  //           error.message ||
  //           error.toString()
  //         return thunkAPI.rejectWithValue(message)
  //       }
  //     }
  //   )
  
  // Delete department
  export const deleteDepartment = createAsyncThunk(
    'departments/delete',
    async (id, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await departmentService.deleteDepartment(id)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )
  
  export const departmentSlice = createSlice({
    name: 'department',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
        .addCase(createDepartment.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createDepartment.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.departments.push(action.payload)
        })
        .addCase(createDepartment.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getDepartments.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getDepartments.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.departments = action.payload
        })
        .addCase(getDepartments.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(editDepartment.pending, (state) => {
          state.isLoading = true
        })
        .addCase(editDepartment.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.departments = action.payload
        })
        .addCase(editDepartment.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        // .addCase(getDepartment.pending, (state) => {
        //   state.isLoading = true
        // })
        // .addCase(getDepartment.fulfilled, (state, action) => {
        //   state.isLoading = false
        //   state.isSuccess = true
        //   state.department = action.payload
        // })
        // .addCase(getDepartment.rejected, (state, action) => {
        //   state.isLoading = false
        //   state.isError = true
        //   state.message = action.payload
        // })
        .addCase(deleteDepartment.pending, (state) => {
          state.isLoading = true
        })
        .addCase(deleteDepartment.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.departments = state.departments.filter(
            (department) => department._id !== action.payload.id
          )
        })
        .addCase(deleteDepartment.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
    },
  })
  
  export const { reset } = departmentSlice.actions
  export default departmentSlice.reducer
  