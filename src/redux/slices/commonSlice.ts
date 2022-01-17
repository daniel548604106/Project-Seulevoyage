import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CommonState {
  value: number
  isLoggedIn: boolean
}

const initialState: CommonState = {
  value: 0,
  isLoggedIn: true,
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoggedIn: (state) => {},
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = commonSlice.actions

export default commonSlice.reducer
