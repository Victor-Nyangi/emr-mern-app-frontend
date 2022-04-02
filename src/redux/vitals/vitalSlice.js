import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import vitalService from './vitalService'
  
const initialState = {
  vitals: [],
  vital: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// thunkAPI: an object containing all of the parameters that are normally passed to a Redux thunk function, as well as additional options
// Create new vital
export const createVital = createAsyncThunk(
    'vitals/create',
    async (vitalData, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await vitalService.createVital(vitalData)
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
  
  // Get user vitals
  export const getVitals = createAsyncThunk(
    'vitals/getAll',
    async (_, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await vitalService.getVitals()
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

  export const editVital = createAsyncThunk(
    'vitals/edit',
    async (id, vitalData, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await vitalService.editVital(id, vitalData)
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
    // Get single vital
  // export const getVital = createAsyncThunk(
  //     'vitals/getOne',
  //     async (id, thunkAPI) => {
  //       try {
  //         // const token = thunkAPI.getState().auth.user.token
  //         return await vitalService.getVital(id)
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
  
  // Delete vital
  export const deleteVital = createAsyncThunk(
    'vitals/delete',
    async (id, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await vitalService.deleteVital(id)
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
  
  export const vitalSlice = createSlice({
    name: 'vital',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
        .addCase(createVital.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createVital.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.vitals.push(action.payload)
        })
        .addCase(createVital.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getVitals.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getVitals.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.vitals = action.payload
        })
        .addCase(getVitals.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(editVital.pending, (state) => {
          state.isLoading = true
        })
        .addCase(editVital.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.vitals = action.payload
        })
        .addCase(editVital.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        // .addCase(getVital.pending, (state) => {
        //   state.isLoading = true
        // })
        // .addCase(getVital.fulfilled, (state, action) => {
        //   state.isLoading = false
        //   state.isSuccess = true
        //   state.vital = action.payload
        // })
        // .addCase(getVital.rejected, (state, action) => {
        //   state.isLoading = false
        //   state.isError = true
        //   state.message = action.payload
        // })
        .addCase(deleteVital.pending, (state) => {
          state.isLoading = true
        })
        .addCase(deleteVital.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.vitals = state.vitals.filter(
            (vital) => vital._id !== action.payload.id
          )
        })
        .addCase(deleteVital.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
    },
  })
  
  export const { reset } = vitalSlice.actions
  export default vitalSlice.reducer
  