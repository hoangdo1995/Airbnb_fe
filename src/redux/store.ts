import {configureStore} from '@reduxjs/toolkit'
import PositionSearchReducer from './reducers/PositionSearchReducer';
import LocationListReducer from './reducers/LocationListReducer';
import LoginReducer from './reducers/LoginReducer';
const store = configureStore({
    reducer:{
        PositionSearchReducer:PositionSearchReducer,
        LocationList:LocationListReducer,
        UserInfor:LoginReducer
    }
})
export {store};
export type DispatchType = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;