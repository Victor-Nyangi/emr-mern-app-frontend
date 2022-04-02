import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import serviceService from './serviceService'
  
const initialState = {
  services: [],
  service: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// thunkAPI: an object containing all of the parameters that are normally passed to a Redux thunk function, as well as additional options
// Create new service
export const createService = createAsyncThunk(
    'services/create',
    async (serviceData, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await serviceService.createService(serviceData)
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
  
  // Get user services
  export const getServices = createAsyncThunk(
    'services/getAll',
    async (_, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await serviceService.getServices()
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

  export const editService = createAsyncThunk(
    'services/update',
    async (id, serviceData, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await serviceService.editService(id, serviceData)
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
    // Get single service
  // export const getService = createAsyncThunk(
  //     'services/getOne',
  //     async (id, thunkAPI) => {
  //       try {
  //         // const token = thunkAPI.getState().auth.user.token
  //         return await serviceService.getService(id)
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
  
  // Delete service
  export const deleteService = createAsyncThunk(
    'services/delete',
    async (id, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await serviceService.deleteService(id)
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
  
  export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
        .addCase(createService.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createService.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.services.push(action.payload)
        })
        .addCase(createService.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getServices.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getServices.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.services = action.payload
        })
        .addCase(getServices.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(editService.pending, (state) => {
          state.isLoading = true
        })
        .addCase(editService.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.services = action.payload
        })
        .addCase(editService.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        // .addCase(getService.pending, (state) => {
        //   state.isLoading = true
        // })
        // .addCase(getService.fulfilled, (state, action) => {
        //   state.isLoading = false
        //   state.isSuccess = true
        //   state.service = action.payload
        // })
        // .addCase(getService.rejected, (state, action) => {
        //   state.isLoading = false
        //   state.isError = true
        //   state.message = action.payload
        // })
        .addCase(deleteService.pending, (state) => {
          state.isLoading = true
        })
        .addCase(deleteService.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.services = state.services.filter(
            (service) => service._id !== action.payload.id
          )
        })
        .addCase(deleteService.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
    },
  })
  
  export const { reset } = serviceSlice.actions
  export default serviceSlice.reducer
  