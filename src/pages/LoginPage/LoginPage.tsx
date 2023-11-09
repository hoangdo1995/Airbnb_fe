import React from "react";
import FacebookLoginButton from "../../components/FacebookLogin/FacebookLoginButton";
import { useFormik } from "formik";
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { DispatchType } from "../../redux/store";
import { login, loginAsync } from "../../redux/reducers/LoginReducer";

export type UserLoginModel = {
    email:string,
    password:string
}

type Props = {};

const LoginPage = (props: Props) => {
  const dispatch:DispatchType = useDispatch();
  const frm = useFormik<UserLoginModel>({
    initialValues:{
        email:'',
        password:''
    },
    validationSchema:yup.object().shape({
        email:yup.string().required('Email is required!').email('Email not valid!'),
        password:yup.string().required("Password is required!").min(4,'Least 4 characters')
    }),
    onSubmit:async(values:UserLoginModel)=>{
        const action = loginAsync(values);
        const result = dispatch(action);
    }
  })  

  return <div className="login d-flex justify-content-end align-items-center">
        <div className="content-login">
            <div className="title">
                <h3 className="ms-5 mt-3">Login</h3>
            </div>
            <div className="login-notify d-flex justify-content-center" style={{height:'30px'}} >
                    <img src="./image/icon/waiting.gif" alt="" style={{top:'30px',left:'50%',width:'30px',display:'none'}}id="login-icon"/>
                    <div id="login-status"></div>
            </div>
            <div className="login-infor mb-5">
                <form className="login-content d-flex flex-column align-items-center" onSubmit={frm.handleSubmit}>
                    <div className="input-item">
                        <div className="title-container d-flex justify-content-between">
                            <div className="title">Email</div>
                            <div className="error me-2">{frm.errors.email?frm.errors.email:""}</div>
                        </div>
                        <input type="text" name="email" onBlur={frm.handleChange} onChange={frm.handleChange}/>    
                    </div>
                    <div className="input-item ">
                        <div className="title-container d-flex justify-content-between">
                            <div className="title">Password</div>
                            <div className="error me-2">{frm.errors.password?frm.errors.password:''}</div>
                        </div>
                        <input type="password" name="password" onChange={frm.handleChange}/>    
                    </div>
                    <div className="submit align-self-center">
                        <button className="submit-btn" type="submit">Login</button>
                    </div>
                    <div className="login-facebook">
                        <FacebookLoginButton/>
                    </div>
                </form>
            </div>
        </div>
  </div>;
};

export default LoginPage;
