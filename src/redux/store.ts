import createSagaMiddleware from 'redux-saga';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import rootSaga from './rootSaga';
import commonReducer from './slices/commonSlice';
import counterReducer from './slices/counterSlice';
import travelReducer from './slices/travelSlice';

const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    common: commonReducer,
    travel: travelReducer,
  },
  middleware,
})

sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
