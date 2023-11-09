import React, { useEffect } from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { IAMGE_DATA_DOMAIN } from "../../utils/config";

type Props = {};

const ProfilePage = (props: Props) => {
  const userInfo = useSelector((state:RootState)=>state.UserInfor);
  useEffect(()=>{}
  ,[userInfo])
  return <div>
    <img src={`${IAMGE_DATA_DOMAIN}/${userInfo.value?.avatar}`} alt="..." width={100} />
  </div>;
};

export default ProfilePage;
