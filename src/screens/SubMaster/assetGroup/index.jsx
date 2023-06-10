import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router';
import {getAssetGroup} from '../../../@app/service/serviceSlice';
import CustomTable from '../../../components/CustomTable';
import {column} from './column';
export default function AssetGroup() {
  const navigate = useNavigate();

  const onClickAdd = () => {
    navigate('/assetGroup/addForm', {
      state: {}
    });
  };

  const handleEditClick = (data) => {
    navigate('/assetGroup/addForm', {
      state: {data}
    });
  };

  const {
    savingAssetGroup,
    saveAssetGroupResponse: {data: dataSource}
  } = useSelector((state) => {
    return state.service;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAssetGroup());
  }, []);

  return <CustomTable handleEditClick={handleEditClick} loading={savingAssetGroup} dataSource={dataSource} column={column} onClickAdd={onClickAdd} title={'Asset Group'} />;
}
