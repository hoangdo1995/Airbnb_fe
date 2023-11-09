import React from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBarComponent from "../searchBar/SearchBarComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IAMGE_DATA_DOMAIN } from "../../utils/config";

type Props = {};

const HeaderComponent:React.FC = (props: Props) => {
  const userInfor = useSelector((state:RootState)=>state.UserInfor);
  return <div className="header container d-flex align-items justify-content-between">
        <div className="icon d-flex align-items-center">
            <img src="./image/icon/airbnb_icon.png" alt="" />
            <div className="brand-title ms-2">AirBnB</div>
        </div>
        <div className="searchBar">
            <SearchBarComponent/>
        </div>
        <div className="navBar d-flex align-items-center">
            <NavLink to={''} className='baseHeaderNavLink'>AirBnB your home</NavLink>
            <NavLink to={''} className='mx-3 baseHeaderNavLink'><i className="fa fa-globe"></i></NavLink>
            <div className="btn d-flex align-items-center baseHeaderButton dropdown-toggle" data-bs-toggle="dropdown">
                <i className="fa fa-align-justify me-2"></i>
                <div className="avatar">
                    {userInfor.value?<img src={`${IAMGE_DATA_DOMAIN}/${userInfor.value.avatar}`} alt="" />:<img src="./image/avatarDefault.png" alt="" />}
                </div>
            </div>
            <div className="dropdown-menu">
                <div className="content d-flex flex-column">
                    <Link to={'profile'}>Hoàng Đỗ</Link>
                    <Link to={'login'}>Login</Link>
                    <Link to={'login'}>Logout</Link>
                </div>
            </div>
        </div>
  </div>;
};

export default HeaderComponent;
