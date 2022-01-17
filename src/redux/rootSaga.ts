import { all, fork } from 'redux-saga/effects';

import * as commonSagas from '@/sagas/commonSagas';
import * as travelSagas from '@/sagas/travelSagas';

export default function* rootSaga() {
  yield all(
    [...Object.values(commonSagas), ...Object.values(travelSagas)].map(fork)
  )
}
