import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpNonAuth } from "../../utils/config";

export type LocationType={
    id:number,
    country:string,
    province:string,
    district:string,
    image:string
}
const initialState = [] as LocationType[];

export const getLocationList = createAsyncThunk(
    'location/getLocation',
    async()=>{
      const response = await httpNonAuth.get('https://localhost:8080/location');
      return response.data.content;
});

const LocationListReducer = createSlice({
  name: 'locationList',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(getLocationList.fulfilled,(state,action)=>{
      return action.payload;
    });
    builder.addCase(getLocationList.pending,(state,action)=>{
      
    });
    builder.addCase(getLocationList.rejected,(state,action)=>{
      
      
    })
  }
});

export const {} = LocationListReducer.actions;

export default LocationListReducer.reducer;
