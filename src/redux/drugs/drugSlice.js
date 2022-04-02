import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import drugService from './drugService'
  
const initialState = {
  drugs: [],
  drug: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// thunkAPI: an object containing all of the parameters that are normally passed to a Redux thunk function, as well as additional options
// Create new drug
export const createDrug = createAsyncThunk(
    'drugs/create',
    async (drugData, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await drugService.createDrug(drugData)
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
  
  // Get user drugs
  export const getDrugs = createAsyncThunk(
    'drugs/getAll',
    async (_, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await drugService.getDrugs()
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

  export const editDrug = createAsyncThunk(
    'drugs/edit',
    async (id, drugData, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await drugService.editDrug(id, drugData)
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
    // Get single drug
  // export const getDrug = createAsyncThunk(
  //     'drugs/getOne',
  //     async (id, thunkAPI) => {
  //       try {
  //         // const token = thunkAPI.getState().auth.user.token
  //         return await drugService.getDrug(id)
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
  
  // Delete drug
  export const deleteDrug = createAsyncThunk(
    'drugs/delete',
    async (id, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await drugService.deleteDrug(id)
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
  
  export const drugSlice = createSlice({
    name: 'drug',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
        .addCase(createDrug.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createDrug.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.drugs.push(action.payload)
        })
        .addCase(createDrug.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getDrugs.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getDrugs.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.drugs = action.payload
        })
        .addCase(getDrugs.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(editDrug.pending, (state) => {
          state.isLoading = true
        })
        .addCase(editDrug.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.drugs = action.payload
        })
        .addCase(editDrug.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        // .addCase(getDrug.pending, (state) => {
        //   state.isLoading = true
        // })
        // .addCase(getDrug.fulfilled, (state, action) => {
        //   state.isLoading = false
        //   state.isSuccess = true
        //   state.drug = action.payload
        // })
        // .addCase(getDrug.rejected, (state, action) => {
        //   state.isLoading = false
        //   state.isError = true
        //   state.message = action.payload
        // })
        .addCase(deleteDrug.pending, (state) => {
          state.isLoading = true
        })
        .addCase(deleteDrug.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.drugs = state.drugs.filter(
            (drug) => drug._id !== action.payload.id
          )
        })
        .addCase(deleteDrug.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
    },
  })
  
  export const { reset } = drugSlice.actions
  export default drugSlice.reducer
  