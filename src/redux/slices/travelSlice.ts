import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Status = 'success' | 'error' | null

export interface TravelState {
  value: number
  isLoggedIn: boolean
  journeyUploadStatus: Status
}

const initialState: TravelState = {
  value: 0,
  isLoggedIn: true,
  journeyUploadStatus: null,
}

export const travelSlice = createSlice({
  name: 'travel',
  initialState,
  reducers: {
    postJourney: (state) => {},
    setJourneyUploadStatus: (state, action: PayloadAction<Status>) => {
      const journeyUploadStatus = action.payload
      state.journeyUploadStatus = journeyUploadStatus
    },
    setLoggedIn: (state) => {},
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { postJourney, setJourneyUploadStatus, incrementByAmount } =
  travelSlice.actions

export default travelSlice.reducer
