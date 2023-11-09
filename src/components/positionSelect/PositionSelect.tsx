import React ,{useEffect,useState} from 'react';
import { Cascader } from 'antd';
import {SingleValueType } from 'rc-cascader/lib/Cascader';
import { http, httpNonAuth } from '../../utils/config';
import { Option } from 'antd/es/mentions';
import { removeDuplicates } from '../../utils/config';
import { Value } from 'sass';
import { useDispatch } from 'react-redux';
import { DispatchType } from '../../redux/store';
import { PositionType, setPositionSearch } from '../../redux/reducers/PositionSearchReducer';
import { getLocationList } from '../../redux/reducers/LocationListReducer';

interface Option {
  value: string;
  label: string;
  id?:number;
  children?: Option[];
}
interface positionType {
    id: number;
    district: string;
    province: string;
    country: string;
    image: string;
}
type opstionsType = Option[];
type Props = {};
type OptionsType = Option[];

const PositionSelect =(props:Props) => {
  const dispatch:DispatchType = useDispatch();
  dispatch(getLocationList());
  let [optionState, setOptionState] = useState<OptionsType>([]);
  let options: Option[] = [];

  //hàm xử lý khi click chon điểm đên
  const handleChange:(value: SingleValueType, selectOptions: Option[]) => void = (value:SingleValueType,selectOptions:Option[]):void=> {
    if(selectOptions){
      const selectPos = selectOptions[selectOptions?.length-1];
    const actionValue:PositionType = {
      name:selectPos?.value,
      id:selectPos?.id
    }
    const action = setPositionSearch(actionValue);
    dispatch(action);
    }
    
  };
    const displayRender = (labels: string[]) => labels[labels.length-1];

    // hàm tạo dử liệu cho cascader antd
    const getPosition = async()=>{
      const res = await httpNonAuth.get('http://localhost:8080/location');
      options = [];
      const positions = res.data.content;
      const country = positions.map((item:positionType)=>item.country);
      const uniqueCountry = removeDuplicates(country);
      
      uniqueCountry.forEach((position:string|any) => {
        let newOption:Option = {
          value: position,
          label: position,
          id:position.id,
          children: [],
        }
        let provinceList:string[] = [];
        positions.forEach((item:positionType)=>{
          if(item.country===newOption.value){
            provinceList.push(item.province);
          }
        });
        provinceList = removeDuplicates(provinceList);
        
        provinceList.forEach((position:string)=>{
          if(provinceList.includes(position)){
            const chil1:Option = {
              value:position,
              label:position,
              children:[]
            }
            let cityList:string[] = [];
            positions.forEach((item:positionType)=>{
              if(item.province===chil1.value){
                cityList.push(item.district);
              }
            });
        cityList = removeDuplicates(cityList);
            positions.forEach((position:positionType)=>{
              if(cityList.includes(position.district)){
                const chil2:Option = {
                  value:position.district,
                  label:position.district,
                  id:position.id,
                }
                chil1.children?.push(chil2)
              }
            })
            newOption.children?.push(chil1);
          }
          
        })
        options.push(newOption);
      });
      setOptionState(options);
    }
  useEffect(()=>{
    getPosition();
  },[]);
  return <Cascader
    options={optionState}
    expandTrigger="hover"
    displayRender={displayRender}
    onChange={handleChange}
    placeholder='Tiềm điểm đến'
  />
};

export default PositionSelect;