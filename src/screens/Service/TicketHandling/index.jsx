/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router';
import CustomTable from '../../../components/CustomTable';
import {useSelector} from 'react-redux';
import { CaretRightOutlined } from '@ant-design/icons';
import {Input, Collapse, DatePicker,theme, Button, Col, Row, Form, Select, Card} from 'antd';
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

function TicketHandling() {
  // const dispatch = useDispatch();
  const { Panel } = Collapse;

 
  const navigate = useNavigate();

  const onClickAdd = () => {
    navigate('/createTicket/addForm');
  };
  const  formticket1= () => {
    navigate('/formticket1');
  };
  const  formticket2= () => {
    navigate('/formticket2');
  };
  const  formticket3= () => {
    navigate('/formticket3');
  };
  const  formticket4= () => {
    navigate('/formticket4');
  };

  const handleViewClick = (rowInfo) => {
    navigate('/ticketForm', {
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
      Ticket_No: 'SE-BR-EQ-23-09-01-15',
      Outlet_Name: 'Tn-Mdu-Villapuram',
      Service_For: 'Equipement',
      Ticket_Description: 'AC Repair',
      Asset_Group: 'Air Conditioner',
      Ticket_status: 'Waiting @ Vendor Assignment',
      Payment_status: '-',
      Ticket_Date: '01-Oct-22',
      Aging: 6,
    },
    {
      'S.No': 2,
      Ticket_No: 'SE-BR-PO-23-09-01-01',
      Outlet_Name: 'Tn-Mdu-Annanagar',
      ServiceFor: 'POS',
      Ticket_Description: 'Stock Issue',
      Asset_Group: 'Stock Issue',
      Ticket_status: 'WIP',
      Payment_status: '-',
      Ticket_Date: '01-Oct-22',
      Aging: 5,
    },
  
    {
      'S.No': 3,
      Ticket_No: 'SE-BR-IT-23-09-01-21',
      Outlet_Name: 'Tn-Tpj-Sastri Road',
      ServiceFor: 'IT',
      Ticket_Description: 'Network Issue',
      Asset_Group: 'Internet',
      Ticket_status: 'Issue Resolved',
      Payment_status: 'Waiting @ OH Approval',
      Ticket_Date: '01-Oct-22',
      Aging: 6,
    },
    {
      'S.No': 4,
      Ticket_No: 'SE-BR-EQ-23-09-01-19',
      Outlet_Name: 'Tn-Tuticorin-Bryant Nagar',
      ServiceFor: 'Equipement',
      Ticket_Description: 'Switch On Problem',
      Asset_Group: 'Freezer"',
      Ticket_status: 'Issue Resolved',
      Payment_status: 'Waiting @ AH Approval',
      Ticket_Date: '01-Oct-22',
      Aging: 6,
    },
    
];
  let column = [
    {key: '1', headerName: 'S.No', field: 'S.No', hide: false, width: 70},
    {key: '2', headerName: 'Ticket No', field: 'Ticket_No', hide: false, width: 100},
    {key: '3', headerName: 'Outlet Name', field: 'Outlet_Name', hide: false, width: 130},
    {key: '5', headerName: 'Service For', field: 'ServiceFor', hide: false, width: 130},
    {key: '4', headerName: 'Ticket Description', field: 'Ticket_Description', hide: false, width: 180},
    {key: '6', headerName: 'Asset Group', field: 'Asset_Group', hide: false, width: 130},
    {key: '7', headerName: 'Ticket Status', field: 'Ticket_status', hide: false, width: 130},
    {key: '8', headerName: 'Payment status', field: 'Payment_status', hide: false, width: 130},
    {key: '9', headerName: 'Ticket Date', field: 'Ticket_Date', hide: false, width: 130},
    {key: '9', headerName: 'Aging', field: 'Aging', hide: false, width: 130},

    { key: '7', headerName: 'Action', field: 'btnfields', hide: false, width: 180 ,renderCell: (params) => {
      if (params.row.id === 1) { // check if this is the row that should have the button
        return (
          <>
          <div dangerouslySetInnerHTML={{__html: params.value}}></div>
          <button className='orangeFactory btn' onClick={() => formticket1(params.row.id)}>
            Update
          </button>
          </>
        );
      } 
      if (params.row.id === 2) { // check if this is the row that should have the button
        return (
          <>
          <div dangerouslySetInnerHTML={{__html: params.value}}></div>
          <button className='orangeFactory btn' onClick={() => formticket2(params.row.id)}>
            Update
          </button>
          </>
        );
      } if (params.row.id === 3) { // check if this is the row that should have the button
        return (
          <>
          <div dangerouslySetInnerHTML={{__html: params.value}}></div>
          <button className='orangeFactory btn' onClick={() => formticket3(params.row.id)}>
            Update
          </button>
          </>
        );
      }if (params.row.id === 4) { // check if this is the row that should have the button
        return (
          <>
          <div dangerouslySetInnerHTML={{__html: params.value}}></div>
          <button className='orangeFactory btn' onClick={() => formticket4(params.row.id)}>
            Update
          </button>
          </>
        );
      } else {
        return <span />;
      }
    }, } 
  ];
  return (
    <div className='h-screen lasthide apphide'>
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
              
      {/* <Button className='orangeFactory text-white mt-3' type='primary' htmlType='submit' {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}>
                         {isExpanded ? 'Hide Filters' : 'Show Filters'}
                      </Button> */}
                      <Collapse
      bordered={false}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
     
    >
      <Panel header="Show Filters" key="1" >
      <section> <Row gutter={[15, 0]}>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='zone' label='Zone'>
                    <Select
                      placeholder='Select'
                      //   loading={gettingState}
                      //   disabled={savingCity}
                      showSearch
                      // onChange={handleOnChange}
                      // filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                    >
                      {/* {CREATE_TICKET_FORM_DATA?.priority?.map((el) => (
                        <Option key={el} value={el}>
                          {el}
                        </Option>
                      ))} */}
                    </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='subZone' label='SubZone'>
                    <Select
                      placeholder='Select'
                      //   loading={gettingState}
                      //   disabled={savingCity}
                      showSearch
                      // onChange={handleOnChange}
                      // filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                    >
                      {/* {CREATE_TICKET_FORM_DATA?.priority?.map((el) => (
                        <Option key={el} value={el}>
                          {el}
                        </Option>
                      ))} */}
                    </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='outlet' label='Outlet'>
                    <Select
                      placeholder='Select'
                      //   loading={gettingState}
                      //   disabled={savingCity}
                      showSearch
                      // onChange={handleOnChange}
                      // filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                    >
                      {/* {CREATE_TICKET_FORM_DATA?.priority?.map((el) => (
                        <Option key={el} value={el}>
                          {el}
                        </Option>
                      ))} */}
                    </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='serviceFor' label='Service For'>
                    <Select
                      placeholder='Select'
                      //   loading={gettingState}
                      //   disabled={savingCity}
                      showSearch
                      // onChange={handleOnChange}
                      // filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                    >
                      {/* {CREATE_TICKET_FORM_DATA?.priority?.map((el) => (
                        <Option key={el} value={el}>
                          {el}
                        </Option>
                      ))} */}
                    </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='assetGroup' label='Asset Group'>
                    <Select
                      placeholder='Select'
                      //   loading={gettingState}
                      //   disabled={savingCity}
                      showSearch
                      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                      {/* {CREATE_TICKET_FORM_DATA?.[service]?.map((el) => (
                        <Option key={el} value={el}>
                          {el}
                        </Option>
                      ))} */}
                    </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='ticketStatus' label='Ticket Status'>
                    <Select
                      placeholder='Select'
                      //   loading={gettingState}
                      //   disabled={savingCity}
                      showSearch
                      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                      {/* {CREATE_TICKET_FORM_DATA?.[assetGroup]?.map((el) => (
                        <Option key={el} value={el}>
                          {el}
                        </Option>
                      ))} */}
                    </Select>
                  </Form.Item>
                </Col>

                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='waitingAt' label='Wating At'>
                    <Select
                      placeholder='Select'
                      //   loading={gettingState}
                      //   disabled={savingCity}
                      showSearch
                      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                      {/* {CREATE_TICKET_FORM_DATA?.service_type?.map((el) => (
                        <Option key={el} value={el}>
                          {el}
                        </Option>
                      ))} */}
                    </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='assignedTo' label='Assigned To'>
                    <Input placeholder='Auto' name='assignTo' />
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item label='From Date' name='fromDate'>
                    <DatePicker format={dateFormat} placeholder='dd/mm/yyyy' style={{width: '100%'}} name='fromDate' onChange={handleOnChange} />
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item label='To Date' name='toDate'>
                    <DatePicker format={dateFormat} placeholder='dd/mm/yyyy' style={{width: '100%'}} name='toDate' onChange={handleOnChange} />
                  </Form.Item>
                </Col>
                  <Col span={12} style={{ textAlign: 'right' }} className='d-flex align-items-center justify-content-end mt-3'>
                    <Form.Item className='mx-2'>
                      <Button className='orangeFactory' type='primary' htmlType='submit' >
                        View
                      </Button>
                    </Form.Item>
                    </Col>
              </Row></section></Panel>
             </Collapse>
            </Form>
          </Col>
        </Row>
      </Card>
      <CustomTable
        showHeader={false}
        showEdit={false}
        loading={gettingOutletMaster}
        dataSource={data}
        column={column}
        handleViewClick={handleViewClick}
        onClickAdd={onClickAdd}
        title={'Create List'}
      />
    </div>
  );
}

export default TicketHandling;
