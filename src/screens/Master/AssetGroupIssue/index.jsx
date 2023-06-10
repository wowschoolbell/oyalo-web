import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {useNavigate} from 'react-router';
import {getAuditSubCategory} from '../../../@app/master/masterSlice';
import CustomTable from '../../../components/CustomTable';
import {column} from './column';

export default function AssetGroupIssue() {
  const navigate = useNavigate();

  const onClickAdd = () => {
    navigate('/AssetGroupIssue/addForm', {
      state: {}
    });
  };

  const {
    gettingAuditSubCategory,
    getAuditSubCategoryResponse: {data: dataSource}
  } = useSelector((state) => {
    return state.master;
  });

  const gridData = (dataSource ?? []).map((data) => {
    const {audit_subcategory, ...restOfData} = data;
    const x = (audit_subcategory ?? [])?.map((n) => {
      return n.value;
    });
    return {audit_subcategory: x, ...restOfData};
  });

  const handleEditClick = (data) => {
    navigate('/AssetGroupIssue/addForm', {
      state: {data}
    });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuditSubCategory());
  }, []);

  // eslint-disable-next-line no-unused-vars

  return (
    <CustomTable handleEditClick={handleEditClick} loading={gettingAuditSubCategory} dataSource={gridData} column={column} onClickAdd={onClickAdd} title={'Asset Group Issue'} />
  );
}
