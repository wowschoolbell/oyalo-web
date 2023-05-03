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

  const data = [
    {
      'S.No': 1,
      Zone: 'SZ',
      subZone: 'SZ-N',
      OutletName: 'TN-MDU-ANNANAGAR',
      ORLName: 'ARUN',
      Doc_No: 'CM-RQ-23-03-01-001	',
      Claim_Amount: '1000',
      Aging_Days:'7',
      select:'<input type="checkbox" name="vehicle1" value="Bike">'
    },
    {
      'S.No': 2,
      Zone: 'SZ',
      subZone: 'SZ-N',
      OutletName: 'TN-MDU-PUDHUR',
      ORLName: 'ARUN',
      Doc_No: 'CM-RQ-23-03-01-001	',
      Claim_Amount: '1000',
      Aging_Days:'1',
      select:'<input type="checkbox" name="vehicle1" value="Bike">'
    },
   
  ];

  const navigate = useNavigate();

  const onClickAdd = () => {
    navigate('/orlpcclaimappahForm');
  };

  const handleViewClick = (rowInfo) => {
    navigate('/orlpcclaimappahForm', {
      state: rowInfo
    });
  };

  const paymentclick = (rowInfo) => {
    navigate('/paymentclick', {
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
    { key: '2', headerName: 'Zone', field: 'Zone', hide: false, width: 300 },
    { key: '3', headerName: 'SubZone', field: 'SubZone', hide: false, width: 300 },
    { key: '3', headerName: 'Outlet Name', field: 'OutletName', hide: false, width: 300 },
    { key: '4', headerName: 'ORL Name', field: 'ORLName', hide: false, width: 300 },
    { key: '5', headerName: 'Doc No', field: 'Doc_No', hide: false, width: 180 },
    { key: '6', headerName: 'Claim Amount', field: 'Claim_Amount', hide: false, width: 250 },
    { key: '7', headerName: 'Aging Days', field: 'Aging_Days', hide: false, width: 200 },
    { key: '8', headerName: 'Select <input type="checkbox" class="ms-2 mt-1" name="vehicle1" value="Bike">', field: 'select', hide: false, width: 180,renderCell: (params) => {
      return <div dangerouslySetInnerHTML={{__html: params.value}}></div>
      ;
    },renderHeader: (params) => {
      return <div dangerouslySetInnerHTML={{__html: params.colDef.headerName}}></div>;
    }, },   
  ];
  return (
    <div className='h-screen apphide'>
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
        dataSource={data}
        column={column}
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
  );
}

export default Orlpcclaimappah;
