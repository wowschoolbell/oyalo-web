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

function TicketHandling() {
  // const dispatch = useDispatch();

  const data = [
    {
      'S.No': 1,
      id: 1,
      outlet: 'select',
      ticket_description: 'ticket description',
      service_for: 'ticket service',
      asset_group: 'asset group',
      ticket_status: 'open',
      current_status: 'open',
      ticket_date: 'ticket date',
      aging: 'agingd'
    },
    {
      'S.No': 2,
      id: 2,
      outlet: 'select',
      ticket_description: 'ticket description',
      service_for: 'ticket service',
      asset_group: 'asset group',
      ticket_status: 'open',
      current_status: 'assign',
      ticket_date: 'ticket date',
      aging: 'agingd'
    }
  ];

  const navigate = useNavigate();

  const onClickAdd = () => {
    navigate('/createTicket/addForm');
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
  let column = [
    {key: '1', headerName: 'S.No', field: 'S.No', hide: false, width: 70},
    {key: '2', headerName: 'Ticket No', field: 'id', hide: false, width: 100},
    {key: '3', headerName: 'Outlet Name', field: 'outlet', hide: false, width: 130},
    {key: '4', headerName: 'Ticket Description', field: 'ticket_description', hide: false, width: 180},
    {key: '5', headerName: 'Service For', field: 'service_for', hide: false, width: 130},
    {key: '6', headerName: 'Asset Group', field: 'asset_group', hide: false, width: 130},
    {key: '7', headerName: 'Ticket Status', field: 'ticket_status', hide: false, width: 130},
    {key: '8', headerName: 'Current Status', field: 'current_status', hide: false, width: 130},
    {key: '9', headerName: 'Ticket Date', field: 'ticket_date', hide: false, width: 130},
    {key: '9', headerName: 'Aging', field: 'aging', hide: false, width: 130}
  ];
  return (
    <div className='h-screen'>
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
              </Row>
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
