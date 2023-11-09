import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpNonAuth } from "../../utils/config";

export interface PositionType{
    name:string|undefined;
    id:number|undefined
}
export interface stateType {
  value:PositionType|null
}

const initialState:stateType|undefined = {
  value:{
    name:"",
    id:0
  }
};
const PositionSearchReducer = createSlice({
  name: 'PositionSearchReducer',
  initialState,
  reducers: {
    setPositionSearch:(state:stateType,action:PayloadAction<PositionType>)=>{
        state.value = action.payload;
  }
}
});

export const {setPositionSearch} = PositionSearchReducer.actions;

export default PositionSearchReducer.reducer;



