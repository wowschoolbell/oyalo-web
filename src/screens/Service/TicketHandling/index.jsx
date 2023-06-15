/* eslint-disable no-unused-vars */
import { CaretRightOutlined } from '@ant-design/icons';
import { Button, Card, Col, Collapse, DatePicker, Form, Input, Row, Select } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import CustomTable from '../../../components/CustomTable';
import { getTicketForHadling } from '../../../@app/service/serviceSlice';
import { column } from './column';

function TicketHandling(props) {
  const { Panel } = Collapse;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickAdd = () => {
    navigate('/createTicket/addEditForm');
  };

  const handleViewClick = (rowInfo) => {
    navigate('/ticketHandling', {
      state: { data: rowInfo }
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
    getOutletMasterResponse: { data: dataSource }
  } = useSelector((state) => {
    return state.master;
  });

  const {
    gettingTicketHandling,
    getTicketHandlingResponse: { data },
  } = useSelector((state) => {
    return state.service;
  });

  const onSelectChange = () => {

  };

  const dateFormat = ['DD/MM/YYYY', 'DD/MM/YY'];

  useEffect(() => {
    props.setTopTitle("Tickets")
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    dispatch(getTicketForHadling());
  }, [dispatch]);

  return (
    <div className='h-screen lasthide apphide'>
      <Card>
        <Row>
          <Col span={24}>
            <Form
              name='basic'
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              onValuesChange={onSelectChange}
              onFinish={onFinish}
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
                    <Col md={{ span: 6 }} xs={{ span: 24 }}>
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
                    <Col md={{ span: 6 }} xs={{ span: 24 }}>
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
                    <Col md={{ span: 6 }} xs={{ span: 24 }}>
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
                    <Col md={{ span: 6 }} xs={{ span: 24 }}>
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
                    <Col md={{ span: 6 }} xs={{ span: 24 }}>
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
                    <Col md={{ span: 6 }} xs={{ span: 24 }}>
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

                    <Col md={{ span: 6 }} xs={{ span: 24 }}>
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
                    <Col md={{ span: 6 }} xs={{ span: 24 }}>
                      <Form.Item name='assignedTo' label='Assigned To'>
                        <Input placeholder='Auto' name='assignTo' />
                      </Form.Item>
                    </Col>
                    <Col md={{ span: 6 }} xs={{ span: 24 }}>
                      <Form.Item label='From Date' name='fromDate'>
                        <DatePicker format={dateFormat} placeholder='dd/mm/yyyy' style={{ width: '100%' }} name='fromDate' onChange={handleOnChange} />
                      </Form.Item>
                    </Col>
                    <Col md={{ span: 6 }} xs={{ span: 24 }}>
                      <Form.Item label='To Date' name='toDate'>
                        <DatePicker format={dateFormat} placeholder='dd/mm/yyyy' style={{ width: '100%' }} name='toDate' onChange={handleOnChange} />
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
        loading={gettingTicketHandling}
        dataSource={data}
        column={column(handleViewClick)}
        handleViewClick={handleViewClick}
        hideActionBtn={true}
        onClickAdd={onClickAdd}
        title={'Create List'}
      />
    </div>
  );
}

export default TicketHandling;
