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

function Pcaclaimsubmissionms() {
  // const dispatch = useDispatch();

  const data = [
    {
      'S.No': 1,
      Outlet_Name: 'TN-MADURAI-VILLUPURAM',
      Service_Ticket_No: 'SE-BR-EQ-23-09-01-14',
      Ticket_Creation_Date: '14-NOV-2022',
      Type_of_Issue: 'Spare change',
      Amount: '1300',
      Bill_Copy: '<img src={favicon} width="15" height="15" >',
      select:'<input type="checkbox" name="vehicle1" value="Bike">'
    },
    {
      'S.No': 2,
      Outlet_Name: 'TN-MDU-K PUDHUR',
      Service_Ticket_No: 'SE-BR-EQ-23-09-01-14',
      Ticket_Creation_Date: '14-NOV-2022',
      Type_of_Issue: 'Spare change',
      Amount: '1300',
      Bill_Copy: '<img src={favicon} width="15" height="15" ></img>',
      select:'<input type="checkbox" name="vehicle1" value="Bike">'
    }
  ];

  const navigate = useNavigate();

  const onClickAdd = () => {
    navigate('/pcadvancereqmsform');
  };
  const subms = () => {
    navigate('/claimsubmission');
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
    { key: '2', headerName: 'Outlet Name', field: 'Outlet_Name', hide: false, width: 300 },
    { key: '3', headerName: 'Service Ticket No', field: 'Service_Ticket_No', hide: false, width: 180 },
    { key: '4', headerName: 'Ticket Creation Date', field: 'Ticket_Creation_Date', hide: false, width: 180 },
    { key: '5', headerName: 'Type of Issue', field: 'Type_of_Issue', hide: false, width: 180 },
    { key: '6', headerName: 'Amount', field: 'Amount', hide: false, width: 180 },
    { key: '7', headerName: 'Bill Copy', field: 'Bill_Copy', hide: false, width: 180 ,renderCell: (params) => {
      return <div dangerouslySetInnerHTML={{__html: params.value}}></div>;
    },},
    { key: '8', headerName: 'Select <input type="checkbox" class="ms-2 mt-1" name="vehicle1" value="Bike">', field: 'select', hide: false, width: 180,renderCell: (params) => {
      return <div dangerouslySetInnerHTML={{__html: params.value}}></div>
      ;
    },renderHeader: (params) => {
      return <div dangerouslySetInnerHTML={{__html: params.colDef.headerName}}></div>;
    }, },   
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

              <Col span={24}>
                  <Row gutter={[15, 15]} style={{justifyContent: 'flex-start'}}>
                    <Col span={12}  className='d-flex align-items-center justify-content-start mt-3'>
                      <Form.Item className='mx-2'>
                        <Button   htmlType='submit'>
                          Submission
                        </Button>
                      </Form.Item>
                      {/* </Col>
                    <Col span={12}> */}
                      <Form.Item>
                        <Button className='orangeFactory' onClick={subms}>Submitted</Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>

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
        // handleViewClick={handleViewClick}
        // onClickAdd={onClickAdd}
        title={'Create List'}
      />
      <Row>
       <Col span={12} style={{textAlign: 'center'}} className='d-flex align-items-center justify-content-end mt-3'>
                      <Form.Item className='mx-2'>
                        <Button className='orangeFactory' type='primary' htmlType='submit'>
                          Submit
                        </Button>
                      </Form.Item>
                      </Col>
                      </Row>
    </div>
  );
}

export default Pcaclaimsubmissionms;
