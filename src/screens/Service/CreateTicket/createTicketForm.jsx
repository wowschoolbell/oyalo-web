/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Input, Card, DatePicker, Button, Col, Row, Form, Select} from 'antd';
import {saveOutletMaster, getStates, getSubZonal, getZonal, updateOutletMaster, getCity} from '../../../@app/master/masterSlice';
// import {map} from 'ramda';
import {useLocation, useNavigate} from 'react-router';
// import dayjs from 'dayjs';
import messageToast from '../../../components/messageToast/messageToast';
import {transStatus} from '../../../util/transStatus';
// import { Input } from 'antd';
import {getFormData, CREATE_TICKET_FORM_DATA} from './createTicket.constants';
import {includes} from 'ramda';
const {TextArea} = Input;

const {Option} = Select;
function CreateTicketForm() {
  const handleClickBack = () => {
    navigate('/createTicket');
  };
  const dispatch = useDispatch();
  // const {
  //   saveOutletMasterRequest,
  //   getStatesResponse: {data: states},
  //   gettingState,
  //   getCityResponse: {data: cities},
  //   gettingCity,
  //   getZonalResponse: {data: Zonals},
  //   gettingZonal,
  //   getSubZonalResponse: {data: SubZonals},
  //   gettingSubZonal,
  //   savingCity
  // } = useSelector((state) => {
  //   return state.master;
  // });
  const navigate = useNavigate();

  const {state} = useLocation();

  let defaultValue = state?.data;

  const [form] = Form.useForm();

  const priority = Form.useWatch('priority', form);
  const serviceFor = Form.useWatch('serviceFor', form);
  const assetGroup = Form.useWatch('assetGroup', form);

  const service = serviceFor ? serviceFor : '';

  const onFinish = (values) => {
    let data = {
      state: values.stateID,
      city: values.city_name,
      zone: values.zoneID,
      subzone: values.subzoneID,
      oulet_Code: values.oulet_Code,
      name: values.name,
      zomoato_status: values.zomoato_status,
      zomoatoID: values.zomoatoID,
      zomoato_date: values['zomoato_date']?.format('YYYY-MM-DD'),
      swiggy_status: values.swiggy_status,
      swiggyID: values.swiggyID,
      swiggy_date: values['swiggy_date']?.format('YYYY-MM-DD'),
      dotpe_status: values.dotpe_status,
      dotpeID: values.dotpeID,
      dotpe_date: values.dotpe_date?.format('YYYY-MM-DD'),
      email: values.email,
      latitude: values.latitude,
      longitude: values.longitude,
      address: values.address,
      order_placing_no: values.order_placing_no,
      orl_cug_no: values.orl_cug_no,
      contact: values.contact,
      open_time: values.open_time?.format('HH:mm:ss'),
      close_time: values.close_time?.format('HH:mm:ss'),
      opening_date: values.opening_date?.format('YYYY-MM-DD'),
      profit_center: values.profit_center,
      cost_center: values.cost_center,
      labour_license_no: values.labour_license_no,
      fire_license_no: values.fire_license_no,
      fire_extinguisher_license_no: values.fire_extinguisher_license_no,
      fssai_license_no: values.fssai_license_no,
      status: values.status === 'active' ? 1 : 0
    };

    dispatch(defaultValue?.id ? updateOutletMaster({data: {...data, id: defaultValue.id, status: transStatus({status: data?.status})}}) : saveOutletMaster({data})).then((data) => {
      const {status, message} = data;
      if (status === 200) {
        messageToast({message: data?.statusText, status: status, title: 'Outlet Master'});
        form.resetFields();
      }
      if (data?.exception) {
        messageToast({message: 'Invalid Request', status: 400, title: 'Outlet Master'});
      }
      if (status === 400) {
        if ((message && message?.contact?.length > 0) || (message && message.email?.length > 0) || (message && message.name?.length > 0)) {
          if (message && message.contact) {
            messageToast({message: message?.contact[0], status: status, title: 'Outlet Master'});
          } else if (message && message.email) {
            messageToast({message: message?.email[0], status: status, title: 'Outlet Master'});
          } else if (message && message.name) {
            messageToast({message: message?.name[0], status: status, title: 'Outlet Master'});
          }
          if (message) {
            messageToast({message: message, status: status, title: 'Employee Master'});
          }
        }
      }
      if (status === 200) {
        messageToast({message: message, status: status, title: 'Outlet Master'});
      }
      if (defaultValue?.id) {
        navigate('/createTicket');
      }
    });
  };

  useEffect(() => {
    dispatch(getStates());
  }, [dispatch]);

  const handleOnChange = (e) => {
    return form.setFieldsValue({
      [e.target.name]: e.target.value
    });
  };

  const onSelectChange = (changedValues) => {
    const formFieldName = Object.keys(changedValues)[0];
    if (formFieldName === 'assetGroup') form.setFieldsValue({asset: undefined});
    if (formFieldName === 'serviceFor') form.setFieldsValue({assetGroup: undefined, asset: undefined});
  };

  const dateFormat = ['DD/MM/YYYY', 'DD/MM/YY'];

  return (
    <>
      <Card>
        <Row>
          <Col span={24}>
            <Form name='basic' labelCol={{span: 24}} wrapperCol={{span: 24}} onValuesChange={onSelectChange} onFinish={onFinish} autoComplete='off' form={form}>
              <Row gutter={[15, 0]}>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item
                    name='outlet_name'
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
                  <Form.Item
                    name='orl_name'
                    label='ORL Name'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your ORL name'
                      }
                    ]}>
                    <Input placeholder='Enter ORL Name' name='orl' />
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item
                    name='contact_no'
                    label='Contact No'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your Contact No'
                      }
                    ]}>
                    <Input placeholder='Enter Contact No' name='contact_no' onChange={handleOnChange} />
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='priority' label='Priority' rules={[{required: true, message: 'Please select Priority'}]}>
                    <Select
                      placeholder='Select'
                      //   loading={gettingState}
                      //   disabled={savingCity}
                      showSearch>
                      {CREATE_TICKET_FORM_DATA?.priority?.map((el) => (
                        <Option key={el} value={el}>
                          {el}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='serviceFor' label='Service For' rules={[{required: true, message: 'Please select Service for'}]}>
                    <Select
                      placeholder='Select'
                      //   loading={gettingState}
                      //   disabled={savingCity}
                      showSearch
                      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                      {CREATE_TICKET_FORM_DATA?.service?.map((el) => (
                        <Option key={el} value={el}>
                          {el}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                {['Equipement', 'IT'].includes(service) && (
                  // make is as a component
                  <>
                    <Col md={{span: 6}} xs={{span: 24}}>
                      <Form.Item name='assetGroup' label='Asset Group' rules={[{required: true, message: 'Please select asset group'}]}>
                        <Select
                          placeholder='Select'
                          //   loading={gettingState}
                          //   disabled={savingCity}
                          showSearch
                          filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                          {CREATE_TICKET_FORM_DATA?.[service]?.map((el) => (
                            <Option key={el} value={el}>
                              {el}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col md={{span: 6}} xs={{span: 24}}>
                      <Form.Item name='asset' label='Asset' rules={[{required: true, message: 'Please select Service for'}]}>
                        <Select
                          placeholder='Select'
                          //   loading={gettingState}
                          //   disabled={savingCity}
                          showSearch
                          filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                          {CREATE_TICKET_FORM_DATA?.[assetGroup]?.map((el) => (
                            <Option key={el} value={el}>
                              {el}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>

                    <Col md={{span: 6}} xs={{span: 24}}>
                      <Form.Item name='service_type' label='Type Of Services' rules={[{required: true, message: 'Please select Service for'}]}>
                        <Select
                          placeholder='Select'
                          //   loading={gettingState}
                          //   disabled={savingCity}
                          showSearch
                          filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                          {CREATE_TICKET_FORM_DATA?.service_type?.map((el) => (
                            <Option key={el} value={el}>
                              {el}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                  </>
                )}

                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='issueType' label='Types of Issue' rules={[{required: true, message: 'Please select Phone No'}]}>
                    <Select
                      placeholder='Select'
                      //   loading={gettingState}
                      //   disabled={savingCity}
                      showSearch
                      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                      {getFormData('').map((el) => (
                        <Option key={el} value={el}>
                          {el}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item label='Date' name='opening_date'>
                    <DatePicker format={dateFormat} placeholder='dd/mm/yyyy' style={{width: '100%'}} name='opening_date' onChange={handleOnChange} />
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='stateID' label='Assigned To' rules={[{required: true, message: 'Please select Service for'}]}>
                    <Select
                      placeholder='Select'
                      //   loading={gettingState}
                      //   disabled={savingCity}
                      showSearch
                      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                      <Option>Raja</Option>
                      <Option>Karan</Option>
                      <Option>Krish</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='stateID' label='Phone No' rules={[{required: true, message: 'Please select Phone No'}]}>
                    <Select
                      placeholder='Select'
                      //   loading={gettingState}
                      //   disabled={savingCity}
                      showSearch
                      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                      <Option>499549548</Option>
                      <Option>90903434</Option>
                      <Option>094387434</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='stateID' label='Problem Description' rules={[{required: true, message: 'Please select Phone No'}]}>
                    <TextArea rows={4} placeholder='' />
                  </Form.Item>
                </Col>

                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='stateID' label='Attachment' rules={[{required: true, message: 'Please select Phone No'}]}>
                    <input type={'file'} />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Row gutter={[15, 15]} style={{justifyContent: 'end'}}>
                    <Col span={12} style={{textAlign: 'right'}} className='d-flex align-items-center justify-content-end mt-3'>
                      <Form.Item className='mx-2'>
                        <Button className='orangeFactory' type='primary' htmlType='submit'>
                          Submit
                        </Button>
                      </Form.Item>
                      {/* </Col>
                    <Col span={12}> */}
                      <Form.Item>
                        <Button onClick={handleClickBack}>Back</Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default CreateTicketForm;
