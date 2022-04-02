import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import memberService from './memberService'
  
const initialState = {
  members: [],
  member: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// thunkAPI: an object containing all of the parameters that are normally passed to a Redux thunk function, as well as additional options
// Create new member
export const createMember = createAsyncThunk(
    'members/create',
    async (memberData, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await memberService.createMember(memberData)
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
  
  // Get user members
  export const getMembers = createAsyncThunk(
    'members/getAll',
    async (_, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await memberService.getMembers()
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

  export const editMember = createAsyncThunk(
    'members/edit',
    async (id, memberData, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await memberService.editMember(id, memberData)
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
    // Get single member
  // export const getMember = createAsyncThunk(
  //     'members/getOne',
  //     async (id, thunkAPI) => {
  //       try {
  //         // const token = thunkAPI.getState().auth.user.token
  //         return await memberService.getMember(id)
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
  
  // Delete member
  export const deleteMember = createAsyncThunk(
    'members/delete',
    async (id, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await memberService.deleteMember(id)
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
  
  export const memberSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
        .addCase(createMember.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createMember.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.members.push(action.payload)
        })
        .addCase(createMember.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getMembers.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getMembers.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.members = action.payload
        })
        .addCase(getMembers.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(editMember.pending, (state) => {
          state.isLoading = true
        })
        .addCase(editMember.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.members = action.payload
        })
        .addCase(editMember.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        // .addCase(getMember.pending, (state) => {
        //   state.isLoading = true
        // })
        // .addCase(getMember.fulfilled, (state, action) => {
        //   state.isLoading = false
        //   state.isSuccess = true
        //   state.member = action.payload
        // })
        // .addCase(getMember.rejected, (state, action) => {
        //   state.isLoading = false
        //   state.isError = true
        //   state.message = action.payload
        // })
        .addCase(deleteMember.pending, (state) => {
          state.isLoading = true
        })
        .addCase(deleteMember.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.members = state.members.filter(
            (member) => member._id !== action.payload.id
          )
        })
        .addCase(deleteMember.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
    },
  })
  
  export const { reset } = memberSlice.actions
  export default memberSlice.reducer
  