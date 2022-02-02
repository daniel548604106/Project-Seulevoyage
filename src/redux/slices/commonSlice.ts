import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CommonState {
  value: number
  isLoggedIn: boolean
  isLoading: boolean
  isOnBoardingModalOpen: boolean
}

const initialState: CommonState = {
  value: 0,
  isLoggedIn: false,
  isLoading: false,
  isOnBoardingModalOpen: true,
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
    setOnBoardingModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isOnBoardingModalOpen = action.payload
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  setOnBoardingModalOpen,
} = commonSlice.actions

export default commonSlice.reducer
