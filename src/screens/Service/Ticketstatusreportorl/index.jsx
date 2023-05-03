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

function Ticketstatusreportorl() {
  // const dispatch = useDispatch();
  const {Option} = Select;

  

  const navigate = useNavigate();

  const onClickAdd = () => {
    navigate('/ticketstatusreportorlForm');
  };

  const handleViewClick = (rowInfo) => {
    navigate('/ticketstatusreportorlForm', {
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
  const data = [
    {
      'S.No': 1,
      ticketno: 'SE-BR-EQ-23-09-01-01',
      Outlet_Name: 'TN-MADURAI-ANNANAGAR',
      Service_For: 'Equipement',
      Asset_Group:'Air Conditioner',
      Asset: 'Daikin 1',
      Type_of_Service:'BreakDown',
      Vendor_Type:'Internal',
      Mode_of_Payment:'Online',
      Spend_Amount:'1500',
      Waiting:'Issue Resolved	',
      Payment_Status:'Waiting @ OH Approval',
      pono:'',
      Aging:'2'
    },
    {
      'S.No': 2,
      ticketno: 'SE-BR-EQ-23-09-01-01',
      Outlet_Name: 'TN-MADURAI-ANNANAGAR',
      Service_For: 'Equipement',
      Asset_Group:'Air Conditioner',
      Asset: 'Daikin 2',
      Type_of_Service:'BreakDown',
      Vendor_Type:'Internal',
      Mode_of_Payment:'Online',
      Spend_Amount:'100',
      Waiting:'Issue Resolved	',
      Payment_Status:'Approved',
      pono:'',
      Aging:'2'
    },
    {
      'S.No': 3,
      ticketno: 'SE-BR-EQ-23-09-01-01',
      Outlet_Name: 'TN-MADURAI-ANNANAGAR',
      Service_For: 'Equipement',
      Asset_Group:'Air Conditioner',
      Asset: 'Daikin 3',
      Type_of_Service:'BreakDown',
      Vendor_Type:'Internal',
      Mode_of_Payment:'Online',
      Spend_Amount:'500',
      Waiting:'Issue Resolved	',
      Payment_Status:'Waiting @ OH Approval',
      pono:'',
      Aging:'2'
    },
   
   
  ];
  let column = [
    { key: '1', headerName: 'S.No', field: 'S.No', hide: false, width: 70 },
    { key: '2', headerName: 'Ticket No', field: 'ticketno', hide: false, width: 300 },
    { key: '3', headerName: 'Outlet Name', field: 'Outlet_Name', hide: false, width: 180 },
    { key: '4', headerName: 'Service For', field: 'Service_For', hide: false, width: 180 },
    { key: '5', headerName: 'Asset Group', field: 'Asset_Group', hide: false, width: 180 },
    { key: '6', headerName: 'Asset', field: 'Asset', hide: false, width: 180 },
    { key: '7', headerName: 'Type of Service', field: 'Type_of_Service', hide: false, width: 180 },
    { key: '8', headerName: 'Vendor Type', field: 'Vendor_Type', hide: false, width: 180 },
    { key: '9', headerName: 'Mode of Payment', field: 'Mode_of_Payment', hide: false, width: 300 },
    { key: '4', headerName: 'Spend Amount', field: 'Spend_Amount', hide: false, width: 180 },
    { key: '5', headerName: 'Waiting @', field: 'Waiting', hide: false, width: 180 },
    { key: '6', headerName: 'Payment Status', field: 'Payment_Status', hide: false, width: 180 },
    { key: '7', headerName: 'Po No / FI Doc No', field: 'pono', hide: false, width: 180 },
    { key: '8', headerName: 'Aging', field: 'Aging', hide: false, width: 180 },  
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
              
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='Zone' label='Zone'>
                   <Select >
                    <Option>select</Option>
                   </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='Sub Zone' label='Sub Zone'>
                   <Select >
                    <Option>select</Option>
                   </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='Outlet' label='Outlet'>
                   <Select >
                    <Option>select</Option>
                   </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name=' Service For' label=' Service For'>
                   <Select >
                    <Option>select</Option>
                   </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name=' Asset Group' label='  Asset Group'>
                   <Select >
                    <Option>select</Option>
                   </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='Waiting @' label='Waiting @'>
                   <Select >
                    <Option>select</Option>
                   </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='Mode of Payment' label='Mode of Payment'>
                   <Select >
                    <Option>select</Option>
                   </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='From Date ' label='From Date '>
                    <Input placeholder='' type='date' name='From Date ' />
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='To Date ' label='To Date '>
                    <Input placeholder='' type='date' name='To Date ' />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Row gutter={[15, 15]} style={{justifyContent: 'end'}}>
                    <Col span={12} style={{textAlign: 'right'}} className='d-flex align-items-center justify-content-end mt-3'>
                      <Form.Item className='mx-2'>
                        <Button className='orangeFactory' type='primary' htmlType='submit'>
                          View
                        </Button>
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
    </div>
  );
}

export default Ticketstatusreportorl;
