import React, {useEffect} from 'react';
import {useNavigate} from 'react-router';
import CustomTable from '../../../components/CustomTable';
import {useDispatch, useSelector} from 'react-redux';
import {getTickets} from '../../../@app/service/serviceSlice';
import {column} from './column';

export default function CreateTicket() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onClickAdd = () => {
    navigate('/createTicket/addForm', {
      state: {}
    });
  };

  const {
    gettingTickets,
    getTicketsResponse: {data: dataSource}
  } = useSelector((state) => {
    return state.service;
  });

  const handleEditClick = (data) => {
    console.log("Edit Data",data)
    navigate('/createTicket/addForm', {
      state: {data}
    });
  };

  useEffect(() => {
    dispatch(getTickets());
  }, []);

  return (
    <div className='h-screen'>
       <CustomTable loading={gettingTickets} dataSource={dataSource} column={column} handleEditClick={handleEditClick} onClickAdd={onClickAdd} title={'Create Ticket List'} />
    </div>
  );
}

