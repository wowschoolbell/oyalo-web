import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router';
import {getEmployeeLevel} from '../../../@app/subMaster/subMasterSlice';
import CustomTable from '../../../components/CustomTable';
import {column} from './column';
export default function ServiceCategory() {
  const navigate = useNavigate();

  const onClickAdd = () => {
    navigate('/serviceCategory/addForm', {
      state: {}
    });
  };

  const handleEditClick = (data) => {
    navigate('/serviceCategory/addForm', {
      state: {data}
    });
  };

  const {
    gettingEmployeeLevel,
    getEmployeeLevelResponse: {data: dataSource}
  } = useSelector((state) => {
    return state.subMaster;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeeLevel());
  }, []);

  return (
    <CustomTable handleEditClick={handleEditClick} loading={gettingEmployeeLevel} dataSource={dataSource} column={column} onClickAdd={onClickAdd} title={'Service Category'} />
  );
}
