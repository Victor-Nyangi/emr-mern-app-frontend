import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import patientService from './patientService'
  
const initialState = {
  patients: [],
  patient: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// thunkAPI: an object containing all of the parameters that are normally passed to a Redux thunk function, as well as additional options
// Create new patient
export const createPatient = createAsyncThunk(
    'patients/create',
    async (patientData, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await patientService.createPatient(patientData)
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
  
  // Get user patients
  export const getPatients = createAsyncThunk(
    'patients/getAll',
    async (_, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await patientService.getPatients()
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

  export const editPatient = createAsyncThunk(
    'patients/edit',
    async (id, patientData, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await patientService.editPatient(id, patientData)
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
    // Get single patient
  // export const getPatient = createAsyncThunk(
  //     'patients/getOne',
  //     async (id, thunkAPI) => {
  //       try {
  //         // const token = thunkAPI.getState().auth.user.token
  //         return await patientService.getPatient(id)
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
  
  // Delete patient
  export const deletePatient = createAsyncThunk(
    'patients/delete',
    async (id, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await patientService.deletePatient(id)
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
  
  export const patientSlice = createSlice({
    name: 'patient',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
        .addCase(createPatient.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createPatient.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.patients.push(action.payload)
        })
        .addCase(createPatient.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getPatients.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getPatients.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.patients = action.payload
        })
        .addCase(getPatients.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(editPatient.pending, (state) => {
          state.isLoading = true
        })
        .addCase(editPatient.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.patients = action.payload
        })
        .addCase(editPatient.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        // .addCase(getPatient.pending, (state) => {
        //   state.isLoading = true
        // })
        // .addCase(getPatient.fulfilled, (state, action) => {
        //   state.isLoading = false
        //   state.isSuccess = true
        //   state.patient = action.payload
        // })
        // .addCase(getPatient.rejected, (state, action) => {
        //   state.isLoading = false
        //   state.isError = true
        //   state.message = action.payload
        // })
        .addCase(deletePatient.pending, (state) => {
          state.isLoading = true
        })
        .addCase(deletePatient.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.patients = state.patients.filter(
            (patient) => patient._id !== action.payload.id
          )
        })
        .addCase(deletePatient.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
    },
  })
  
  export const { reset } = patientSlice.actions
  export default patientSlice.reducer
  