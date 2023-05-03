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

const {TextArea} = Input;

function Pcclaimreqorl() {
  // const dispatch = useDispatch();

  const data = [
    {
      'S.No': 1,
      Doc_No: 'CM-RQ-23-03-01-001',
      FIExpDocNo: '1800000125',
      FIPaymentDocNo: ' 1600000182	',
      Request_Amount: ' 8000	',
      Approved_Amount	: ' 8000	',
      Status: 'Approved',
      btnfields :  '<div class="my-2"> <button class="orangeFactory btn  p-2 "  type="primary"> Received </button></div>'
    },
    {
      'S.No': 2,
      Doc_No: 'CM-RQ-23-03-01-001',
      FIExpDocNo: '1800000125',
      FIPaymentDocNo: ' 1600000182	',
      Request_Amount: ' 8000	',
      Approved_Amount	: ' 8000	',
      Status: '	Waiting @ AH Approval',
    }
  ];
  const data1 = [
    {
      'S.No': 1,
      Expense_Date: '14-Nov-2022',
      Expense_Type: 'Petrol',
      Reason: 'Genset Usage	',
      Request_Amount	:'300',
      Bill_Copy	:'-',
      btnfi	:'<button class="orangeFactory">Reject</button>',
      select:'<input type="checkbox" name="vehicle1" value="Bike">'
    },
    {
      'S.No': 2,
      Expense_Date: '14-Nov-2022',
      Expense_Type: 'Petrol',
      Reason: 'Genset Usage	',
      Request_Amount	:'300',
      Bill_Copy	:'-',
      btnfi	:'<button class="orangeFactory">Reject</button>',
      select:'<input type="checkbox" name="vehicle1" value="Bike">'
    },
    {
      'S.No': '',
      Expense_Date: '',
      Expense_Type: '',
      Reason: 'Total',
      Request_Amount	:'1000',
      Bill_Copy	:'',
      btnfi	:'',
      select:'<input type="checkbox" name="vehicle1" value="Bike">'
    },
   
  ];
  const navigate = useNavigate();

  const onClickAdd = () => {
    navigate('/PcclaimreqorlForm');
  };

  const handleViewClick = (rowInfo) => {
    navigate('/pcadvancereqmsform', {
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
    { key: '2', headerName: 'Doc No	', field: 'Doc_No', hide: false, width: 300 },
    { key: '3', headerName: 'FI Exp Doc No', field: 'FIExpDocNo', hide: false, width: 180 },
    { key: '4', headerName: 'FI Payment Doc No', field: 'FIPaymentDocNo', hide: false, width: 180 },
    { key: '5', headerName: 'Request Amount', field: 'RequestAmount', hide: false, width: 180 },
    { key: '6', headerName: 'Approved Amount	', field: 'Approved_Amount', hide: false, width: 180 },
    { key: '7', headerName: 'Status', field: 'Status', hide: false, width: 180 },
    { key: '7', headerName: 'Action', field: 'btnfields', hide: false, width: 180 ,renderCell: (params) => {
      return <div dangerouslySetInnerHTML={{__html: params.value}}></div> },  }  
    ];
    let column1 = [
      { key: '1', headerName: 'S.No', field: 'S.No', hide: false, width: 70 },
      { key: '2', headerName: 'Expense Date', field: 'Expense_Date', hide: false, width: 300 },
      { key: '3', headerName: 'Expense Type', field: 'Expense_Type', hide: false, width: 180 },
      { key: '4', headerName: 'Reason', field: 'Reason', hide: false, width: 250 },
      { key: '5', headerName: 'Request Amount', field: 'Request_Amount', hide: false, width: 200 },
      { key: '6', headerName: 'Bill Copy', field: 'Bill_Copy', hide: false, width: 180,renderCell: (params) => {
        return <div dangerouslySetInnerHTML={{__html: params.value}}></div>;
      }, }, 
      { key: '7', headerName: 'Action', field: 'btnfi', hide: false, width: 180,renderCell: (params) => {
        return <div dangerouslySetInnerHTML={{__html: params.value}}></div>;
      }, }, 
      { key: '8', headerName: 'Select <input type="checkbox" class="ms-2 mt-1" name="vehicle1" value="Bike">', field: 'select', hide: false, width: 180,renderCell: (params) => {
        return <div dangerouslySetInnerHTML={{__html: params.value}}></div>
        ;
      },renderHeader: (params) => {
        return <div dangerouslySetInnerHTML={{__html: params.colDef.headerName}}></div>;
      }, },  
    ];
  return (
    <>
    <div className='h-screen apphide lasthide '>
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
                  <Form.Item
                    name='name'
                    label='Outlet Name'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your outlet name'
                      }
                    ]}>
                    <Input placeholder='Enter Outlet Name' name='name' />
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='Cash in Hand' label='Cash in Hand'>
                  <Input placeholder='1000' name='Cash in Hand' />
                  </Form.Item>
                </Col>
               
               
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item
                    name='Receipt Confirmation'
                    label='Receipt Confirmation'
                  >
                    <Input placeholder='Receipt Confirmation' name='name'  />
                  </Form.Item>
                </Col>

              
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='Yet to confirm by accounts ' label='Yet to confirm by accounts '>
                    <Input placeholder='3000' name='Yet to confirm by accounts ' />
                  </Form.Item>
                </Col>
               
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
        // handleViewClick={handleViewClick}
        // onClickAdd={onClickAdd}
        title={'Create List'}
      />
    </div>
    <div className='h-screen lasthide addonly'>
      <CustomTable
        showHeader={false}
        showEdit={false}
        dataSource={data1}
        column={column1}
        handleViewClick={handleViewClick}
        onClickAdd={onClickAdd}
        title={'Create List'}
      />
         <Col span={12} style={{textAlign: 'right'}} className='d-flex align-items-center justify-content-end mt-3'>
                      <Form.Item className='mx-2'>
                        <Button className='orangeFactory' type='primary' htmlType='submit'>
                          Submit
                        </Button>
                      </Form.Item>
                      </Col>
    </div>
    </>
  );
}

export default Pcclaimreqorl;
