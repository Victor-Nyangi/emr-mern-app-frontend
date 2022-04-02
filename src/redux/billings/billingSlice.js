import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import billingService from './billingService'
  
const initialState = {
  billings: [],
  billing: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// thunkAPI: an object containing all of the parameters that are normally passed to a Redux thunk function, as well as additional options
// Create new billing
export const createBilling = createAsyncThunk(
    'billings/create',
    async (billingData, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await billingService.createBilling(billingData)
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
  
  // Get user billings
  export const getBillings = createAsyncThunk(
    'billings/getAll',
    async (_, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await billingService.getBillings()
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

  export const editBilling = createAsyncThunk(
    'billings/edit',
    async (id, billingData, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await billingService.editBilling(id, billingData)
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
    // Get single billing
  // export const getBilling = createAsyncThunk(
  //     'billings/getOne',
  //     async (id, thunkAPI) => {
  //       try {
  //         // const token = thunkAPI.getState().auth.user.token
  //         return await billingService.getBilling(id)
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
  
  // Delete billing
  export const deleteBilling = createAsyncThunk(
    'billings/delete',
    async (id, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await billingService.deleteBilling(id)
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
  
  export const billingSlice = createSlice({
    name: 'billing',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
        .addCase(createBilling.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createBilling.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.billings.push(action.payload)
        })
        .addCase(createBilling.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getBillings.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getBillings.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.billings = action.payload
        })
        .addCase(getBillings.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(editBilling.pending, (state) => {
          state.isLoading = true
        })
        .addCase(editBilling.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.billings = action.payload
        })
        .addCase(editBilling.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        // .addCase(getBilling.pending, (state) => {
        //   state.isLoading = true
        // })
        // .addCase(getBilling.fulfilled, (state, action) => {
        //   state.isLoading = false
        //   state.isSuccess = true
        //   state.billing = action.payload
        // })
        // .addCase(getBilling.rejected, (state, action) => {
        //   state.isLoading = false
        //   state.isError = true
        //   state.message = action.payload
        // })
        .addCase(deleteBilling.pending, (state) => {
          state.isLoading = true
        })
        .addCase(deleteBilling.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.billings = state.billings.filter(
            (billing) => billing._id !== action.payload.id
          )
        })
        .addCase(deleteBilling.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
    },
  })
  
  export const { reset } = billingSlice.actions
  export default billingSlice.reducer
  