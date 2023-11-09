import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserLoginModel } from '../../pages/LoginPage/LoginPage'
import { DOMAIN, httpNonAuth } from '../../utils/config';
import { history } from '../..';

interface LoginInforState {
    value:UserInforType|null
}

export type UserInforType = {
    id:        number;
    full_name: string;
    email:     string;
    birth_day: string;
    phone:     string;
    role:      number;
    gender:    boolean;
    avatar:    string;
    token:     string;
}

const initialState = {} as LoginInforState;

const LoginReducer = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state,action:PayloadAction<UserInforType>){
        state.value = action.payload;
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(loginAsync.fulfilled,(state,{payload})=>{
      //tắt icon waiting
      const icon = document.getElementById('login-icon');
      if(icon)icon.style.display = 'none'
      const status = document.getElementById('login-status');
      //xử lý hiển thị status và điều hướng web với kết quả trả về
      if(payload?.data?.statusCode ==200){
        //nếu thành công
        state.value = payload.data.content;
        if(status){
          status.innerHTML = payload.data.message;
          status.style.color = 'green'
        }
        setTimeout(() => {
          history.push('profile');
        }, 1500);
      }
      else{
        // nếu thất bại
        state.value = null;
        if(status){
          status.innerHTML = payload.response.data.message;
          status.style.color = 'red';
        }
      }
    });
    builder.addCase(loginAsync.pending,()=>{
      try {
        const icon = document.getElementById('login-icon');
        if(icon)icon.style.display = 'block'
      } catch (error) {
        
      }
    })
  }
})

export const loginAsync = createAsyncThunk(
  'login/loginAsync',
  async(loginState:UserLoginModel,{rejectWithValue})=>{
    try {
      const data:any = await httpNonAuth.post(`${DOMAIN}/auth/login`,loginState);
      return data;
    } catch (error:any) {
      return rejectWithValue(error.message);
    }
  }
)

export const { login } = LoginReducer.actions
export default LoginReducer.reducer