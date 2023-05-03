/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router';
import CustomTable from '../../../components/CustomTable';
import {useSelector} from 'react-redux';
import {Input, DatePicker, Button, Col, Row, Form, Select, Card} from 'antd';
import {includes} from 'ramda';
// import {saveOutletMaster, getStates, getSubZonal, getZonal, updateOutletMaster, getCity} from '../../../@app/master/masterSlice';
// import {map} from 'ramda';
// import {useLocation, useNavigate} from 'react-router';
// import dayjs from 'dayjs';
// import messageToast from '../../../components/messageToast/messageToast';
// import {transStatus} from '../../../util/transStatus';
// import { Input } from 'antd';
// import {getFormData, CREATE_TICKET_FORM_DATA} from './createTicket.constants';
 import favicon from '../../../asset/favicon.ico';

const {TextArea} = Input;

function claimsubmission() {
  // const dispatch = useDispatch();

  const data = [
    {
      'S.No': 1,
      Name: 'Ketheeswaran	',
      docno: 'CM-PP-22-02-10-001	',
      Amount: '100',
      city:'4',
      fino: 'Waiting @ AH Approval',
      billcopy:'-'
    },
    {
      'S.No': 2,
      Name: '	',
      docno: '',
      OutletName:'',
      Amount: 'Total',
      city:'2800',
      fino: '',
      billcopy:''
    },
   
  ];

  const navigate = useNavigate();
  const fiopen = () => {
    navigate('/pcaclaimsubmissionms');
  };
  const onClickAdd = () => {
    navigate('/mspcclaimappohForm');
  };
 

  const handleViewClick = (rowInfo) => {
    navigate('/orlpcclaimappbhForm', {
      state: rowInfo
    });
  };

  const handleOnChange = () => {
    // eslint-disable-next-line no-console
    console.log('onChange');
  };

  const onFinish = (values) => {
    let data = {
      zone: values.zone,
      subZone: values.subZone,
      outlet: values.outlet,
      serviceFor: values.serviceFor,
      assetGroup: values.assetGroup,
      ticketStatus: values.ticketStatus,
      waitingAt: values.waitingAt,
      assignedTo: values.assignedTo,
      fromDate: values['fromDate']?.format('YYYY-MM-DD'),
      toDate: values['toDate']?.format('YYYY-MM-DD')
    };
  };

  const {
    gettingOutletMaster,
    getOutletMasterResponse: {data: dataSource}
  } = useSelector((state) => {
    return state.master;
  });

  const onSelectChange = () => {
    // eslint-disable-next-line no-console
    console.log('change');
  };

  const dateFormat = ['DD/MM/YYYY', 'DD/MM/YY'];

  //   useEffect( () => {
  //     dispatch( getOutletMaster() );
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [] );
  let column = [
    { key: '1', headerName: 'S.No', field: 'S.No', hide: false, width: 70 },
    { key: '2', headerName: 'Requestee Name', field: 'Name', hide: false, width: 300 },
    { key: '3', headerName: 'Doc No', field: 'docno', hide: false, width: 180 },
    { key: '5', headerName: 'Request Amount', field: 'Amount', hide: false, width: 180 },
    { key: '6', headerName: 'Approved Amount	', field: 'city', hide: false, width: 180 },
    { key: '7', headerName: 'Status', field: 'fino', hide: false, width: 180 }, 
    { key: '7', headerName: 'Bill Copy', field: 'billcopy', hide: false, width: 180 ,renderCell: (params) => {
      return <div dangerouslySetInnerHTML={{__html: params.value}}></div>;
    },},   
  ];
  return (
    <div className='h-screen apphide lasthide'>
      <Card>
        <Row>
          <Col span={24}>
            <Form
              name='basic'
              labelCol={{span: 24}}
              wrapperCol={{span: 24}}
              onValuesChange={onSelectChange}
              onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete='off'
              // form={form}
            >
              <Row gutter={[15, 0]}>
              <Row gutter={[15, 15]} style={{justifyContent: 'flex-start'}}>
                    <Col span={12}  className='d-flex align-items-center justify-content-start mt-3'>
                      <Form.Item className='mx-2'>
                      <Button onClick={fiopen}   htmlType='submit'>
                          Submission
                        </Button>
                      </Form.Item>
                      {/* </Col>
                    <Col span={12}> */}
                      <Form.Item>
                        <Button className='orangeFactory'>Submitted</Button>
                      </Form.Item>
                    </Col>
                  </Row>
             

                {/* <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='Cash in Hand' label='Cash in Hand'>
                  <Input placeholder='1000' name='Cash in Hand' />
                  </Form.Item>
                </Col>
               
               
              

              
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='Yet to confirm by accounts ' label='Yet to confirm by accounts '>
                    <Input placeholder='3000' name='Yet to confirm by accounts ' />
                  </Form.Item>
                </Col> */}
               
              </Row>
            </Form>
          </Col>
        </Row>
      </Card>
      <CustomTable
        showHeader={false}
        // showEdit={false}
        dataSource={data}
        column={column}
        handleViewClick={handleViewClick}
        onClickAdd={onClickAdd}
        title={'Approval List'}
      />


                    <Col span={12} style={{textAlign: 'right'}} className='d-flex align-items-center justify-content-end mt-3'>
                      <Form.Item className='mx-2'>
                        <Button className='orangeFactory' type='primary' htmlType='submit'>
                          Back
                        </Button>
                      </Form.Item>
                      </Col>
                     
        
    </div>
  );
}

export default claimsubmission;
