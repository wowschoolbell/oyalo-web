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

function Orlpcclaimappah() {
  // const dispatch = useDispatch();

  const data1 = [
    {
      'S.No': 1,
      Paymentno: 'CM-PP-11-22-002',
      Claim_Amount: '15000',
      Request_Status: 'Waiting @ BH Approval',
    },
  
  ];
  const data2 = [
    {
      'S.No': 1,
      Paymentno: 'CM-PP-11-22-002',
      Claim_Amount: '15000',
      fino: '-',
      fipayno: '-',
    },
  
  ];

  const navigate = useNavigate();

  const onClickAdd = () => {
    navigate('/orlpcclaimappahForm');
  };

  const handleViewClick = (rowInfo) => {
    navigate('/pclcimapprovalah', {
      state: rowInfo
    });
  };
  
  const paymentclick = (rowInfo) => {
    navigate('/orlpcclaimappahForm', {
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
  let column1 = [
    { key: '1', headerName: 'S.No', field: 'S.No', hide: false, width: 70 },
    { key: '2', headerName: 'Payment Doc No', field: 'Paymentno', hide: false, width: 300 },
    { key: '3', headerName: 'Claim Amount', field: 'Claim_Amount', hide: false, width: 300 },
    { key: '3', headerName: 'Request Status', field: 'Request_Status', hide: false, width: 300 },
  ];
  let column2 = [
    { key: '1', headerName: 'S.No', field: 'S.No', hide: false, width: 70 },
    { key: '2', headerName: 'Payment Doc No', field: 'Paymentno', hide: false, width: 300 },
    { key: '3', headerName: 'Claim Amount', field: 'Claim_Amount', hide: false, width: 300 },
    { key: '4', headerName: 'FI Exp Doc No', field: 'fino', hide: false, width: 300 },
    { key: '5', headerName: 'FI Payment Doc No', field: 'fipayno', hide: false, width: 300 },
  ];
  return (
    <>
    <div className='h-screen apphide lasthide appactionhideuu'>
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
              <Col span={24}>
                  <Row gutter={[15, 15]} style={{justifyContent: 'flex-start'}}>
                    <Col span={12}  className='d-flex align-items-center justify-content-start mt-3'>
                      <Form.Item className='mx-2'>
                        <Button   htmlType='submit'>
                          Petty Cash Expense Approval
                        </Button>
                      </Form.Item>
                      {/* </Col>
                    <Col span={12}> */}
                      <Form.Item>
                        <Button className='orangeFactory' onClick={paymentclick}>Payment Process</Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              {/*  */}

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
        showEdit={false}
        dataSource={data1}
        column={column1}
        handleViewClick={handleViewClick}
        onClickAdd={onClickAdd}
        title={'Approval List'}
      />
     
     
    </div>
    <div className='h-screen apphide'>
    
     
      <CustomTable
        showHeader={false}
        showEdit={false}
        dataSource={data2}
        column={column2}
        handleViewClick={handleViewClick}
        onClickAdd={onClickAdd}
        title={'Approval List'}
      />
      <Col span={12} style={{textAlign: 'center'}} className='d-flex align-items-center justify-content-end mt-3'>
                      <Form.Item className='mx-2'>
                        <Button className='orangeFactory' type='primary' htmlType='submit'>
                          Submit
                        </Button>
                      </Form.Item>
                      {/* </Col>
                    <Col span={12}> */}
                      
                    </Col>
    </div>
    </>
  );
}

export default Orlpcclaimappah;
