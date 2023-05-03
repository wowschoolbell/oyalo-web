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

function Pcadvancereqms() {
  // const dispatch = useDispatch();

  const data = [
    {
      'S.No': 1,
      Doc_No: 'AD-RQ-23-03-01-003	',
      SAP_Accounting_Exp_Doc_No	: '10000590002',
      Request_Amount: ' 8000	',
      Approved_Amount	: ' 8000	',
      Petty_Cash_Request_Status: 'Waiting @ AH Approval'
    },
    {
      'S.No': 2,
      Doc_No: 'AD-RQ-23-03-01-003	',
      SAP_Accounting_Exp_Doc_No	: '10000590002',
      Request_Amount: ' 8000	',
      Approved_Amount	: ' 8000	',
      Petty_Cash_Request_Status: 'Approved  <Button class="orangeFactory ms-2 text-white" type="primary" htmlType="submit"> Cash Received </Button>'
    }
  ];

  const navigate = useNavigate();

  const onClickAdd = () => {
    navigate('/pcadvancereqmsform');
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
    { key: '3', headerName: 'SAP Accounting Exp Doc No	', field: 'SAP_Accounting_Exp_Doc_No', hide: false, width: 180 },
    { key: '4', headerName: 'Request Amount	', field: 'Request_Amount', hide: false, width: 180 },
    { key: '5', headerName: 'Approved Amount	', field: 'Approved_Amount', hide: false, width: 280 },
    { key: '6', headerName: 'Petty Cash Request Status', field: 'Petty_Cash_Request_Status', hide: false, width: 300 ,renderCell: (params) => {
      return <div dangerouslySetInnerHTML={{__html: params.value}}></div>;
    
  }, },
    ];
  return (
    <div className='h-screen mstable addonly  appactionhide'>
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
                  <Form.Item name='Cash in Hand' label='Cash in Hand'>
                  <Input placeholder='1000' name='Cash in Hand' />
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
        handleViewClick={handleViewClick}
        onClickAdd={onClickAdd}
        title={'Create List'}
      />
    </div>
  );
}

export default Pcadvancereqms;
