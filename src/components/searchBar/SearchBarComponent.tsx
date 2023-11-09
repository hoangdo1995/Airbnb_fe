import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PositionSelect from "../positionSelect/PositionSelect";
import { useSelector, useStore } from "react-redux";
import { RootState } from "../../redux/store";

type Props = {};

const SearchBarComponent:React.FC = (props: Props) => {
  const locationSelect = useSelector((state:RootState)=>state.PositionSearchReducer);
  const location = useLocation();
  const [navLinkState,setNavLinkState] = useState<String>('Stays');
  const [view,setView] = useState<Boolean>(true);
  // Hàm kiểm tra trạng thái của NavLink dựa trên địa chỉ URL hiện tại
  const isNavLinkActive = (path: string) => {
    return (navLinkState===path)?true:false;
  };


  const handleCustomActionClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    setNavLinkState(event.currentTarget.innerHTML);
    console.log(navLinkState);
    event.preventDefault();
  }
  const handleViewState = ()=>{
    setView(!view);
    if(view){
      document.querySelector('.header')?.classList.toggle('align-items-center');
      document.querySelector('.header')?.classList.toggle('align-items-baseline');
    }
    else{
      document.querySelector('.header')?.classList.toggle('align-items-center');
      document.querySelector('.header')?.classList.toggle('align-items-baseline');
    }
  }
  return <div className="">
    {view?<div className="baseHeaderButton" onClick={handleViewState}>
            <div className="d-flex content align-items-center justify-content-around">
                <span>{locationSelect.value?.name ==''?'Any Where':locationSelect.value?.name}</span>
                <span className="break border-start border-end border-2">Any week</span>
                <span className="text-gray">Add guests</span>
                <span className="icon"><i className="fa fa-search text-light"></i></span>
            </div>
  </div>:<div className="searchNav animate__animated animate__zoomIn d-flex flex-column align-items-center justify-content-center">
      <div className="nav">
        <button  className={isNavLinkActive('Stays') ? 'searchNavLink underLineBlack' : 'searchNavLink'} onClick={handleCustomActionClick}>
          Stays
        </button>
        <button  className={isNavLinkActive('Experience') ? 'searchNavLink underLineBlack' : 'searchNavLink'} onClick={handleCustomActionClick}>
          Experience
        </button>
        <button className={isNavLinkActive('Online Experiences') ? 'searchNavLink underLineBlack' : 'searchNavLink'} onClick={handleCustomActionClick}>
          Online Experiences
        </button>
      </div>
      <div className="toolBar d-flex align-items-center dropdown">
          <div className="toolBut dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <div className="content">
              {locationSelect.value?.name == ''?<><span>Where</span>
              <span>Search destination</span></>:<><span style={{height:'100%'}}>{locationSelect.value?.name}</span><span></span></>}
            </div>
            
          </div>
          <div className="dropdown-menu">
                <PositionSelect/>
            </div>
          <div className="toolBut">
            <div className="content border-start border-2">
              <span>Check in</span>
              <span>Add dates</span>
            </div>
          </div>
          <div className="toolBut">
            <div className="content border-start border-2">
              <span>Check out</span>
              <span>Add dates</span>
            </div>
          </div>
          <div className="toolBut">
            <div className="content border-start border-2">
              <span>Who</span>
              <span>Add guests</span>
            </div>
          </div>
          <div className="toolSubmit">
            <button className="text-light me-2" onClick={handleViewState}><i className="fa fa-search me-2"></i>Search</button>
          </div>
      </div>

  </div>}
    
  
  </div>;
};

export default SearchBarComponent;
