import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import financialService from './financialService'
  
const initialState = {
  financials: [],
  financial: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// thunkAPI: an object containing all of the parameters that are normally passed to a Redux thunk function, as well as additional options
// Create new financial
export const createFinancial = createAsyncThunk(
    'financials/create',
    async (financialData, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await financialService.createFinancial(financialData)
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
  
  // Get user financials
  export const getFinancials = createAsyncThunk(
    'financials/getAll',
    async (_, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await financialService.getFinancials()
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

  export const editFinancial = createAsyncThunk(
    'financials/edit',
    async (id, financialData, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await financialService.editFinancial(id, financialData)
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
    // Get single financial
  // export const getFinancial = createAsyncThunk(
  //     'financials/getOne',
  //     async (id, thunkAPI) => {
  //       try {
  //         // const token = thunkAPI.getState().auth.user.token
  //         return await financialService.getFinancial(id)
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
  
  // Delete financial
  export const deleteFinancial = createAsyncThunk(
    'financials/delete',
    async (id, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await financialService.deleteFinancial(id)
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
  
  export const financialSlice = createSlice({
    name: 'financial',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
        .addCase(createFinancial.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createFinancial.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.financials.push(action.payload)
        })
        .addCase(createFinancial.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getFinancials.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getFinancials.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.financials = action.payload
        })
        .addCase(getFinancials.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(editFinancial.pending, (state) => {
          state.isLoading = true
        })
        .addCase(editFinancial.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.financials = action.payload
        })
        .addCase(editFinancial.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        // .addCase(getFinancial.pending, (state) => {
        //   state.isLoading = true
        // })
        // .addCase(getFinancial.fulfilled, (state, action) => {
        //   state.isLoading = false
        //   state.isSuccess = true
        //   state.financial = action.payload
        // })
        // .addCase(getFinancial.rejected, (state, action) => {
        //   state.isLoading = false
        //   state.isError = true
        //   state.message = action.payload
        // })
        .addCase(deleteFinancial.pending, (state) => {
          state.isLoading = true
        })
        .addCase(deleteFinancial.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.financials = state.financials.filter(
            (financial) => financial._id !== action.payload.id
          )
        })
        .addCase(deleteFinancial.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
    },
  })
  
  export const { reset } = financialSlice.actions
  export default financialSlice.reducer
  