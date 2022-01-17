import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { postJourney, setJourneyUploadStatus } from '../slices/travelSlice';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* handlePostJourney(action) {
  try {
      console.log('dispatched journey')
      //   const user = yield call(Api.fetchUser, action.payload.userId);
      yield put(setJourneyUploadStatus('success'))
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}

export function* watchPostJourney() {
  yield takeLatest(postJourney.type, handlePostJourney)
}



