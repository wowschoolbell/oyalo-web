/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Input, Card, DatePicker, Button, Col, Row, Form, Select} from 'antd';
import {
  saveOutletMaster,
  getStates,
  getSubZonal,
  getZonal,
  updateOutletMaster,
  getCity,
  getOutletMaster,
  getEmployeeMaster,
  getEmployeeMapping
} from '../../../@app/master/masterSlice';
// import {map} from 'ramda';
import {useLocation, useNavigate} from 'react-router';
// import dayjs from 'dayjs';
import messageToast from '../../../components/messageToast/messageToast';
import {transStatus} from '../../../util/transStatus';
// import { Input } from 'antd';
import {getFormData, CREATE_TICKET_FORM_DATA} from './createTicket.constants';
import {includes, map} from 'ramda';
import {getAssetGroup, getAssetMaster, getPriority, getServiceFor, getTypeOfService, saveTickets, updateTickets, getAssetGroupIssue} from '../../../@app/service/serviceSlice';
import typesOfIssue from './typesOfIssue.constant';
import {MultiUploadButton} from '../../../components/multiUploadButton/MultiUploadButton';
const {TextArea} = Input;

const {Option} = Select;
const CreateTicketForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const {
    state: {data: defaultValue}
  } = useLocation();

  const {
    getOutletMasterResponse: {data: outletData},
    gettingEmployeeMapping,
    getEmployeeMappingResponse: {data: employeeMapping = []},
    getEmployeeMasterResponse: {data: Employees}
  } = useSelector((state) => {
    return state.master;
  });

  const outletList = outletData?.map((o) => ({
    ...o,
    outlet_code: `${o?.outlet_code} - ${o?.name}`
  }));

  const {
    savingTickets,
    gettingPriority,
    getPriorityResponse: {data: priorityData},
    gettingServiceFor,
    getServiceForResponse: {data: getServiceForData},
    gettingAssetGroup,
    getAssetGroupResponse: {data: assetGroups},
    gettingNewAssetMaster,
    getAssetMasterResponse: {data: assetMasters},
    gettingTypeOfService,
    getTypeOfServiceResponse: {data: typeOfServices},
    //getAssetGroupIssueResponse: {data: typesOfIssue}
  } = useSelector((state) => {
    return state.service;
  });

  const serviceFor = Form.useWatch('service_for', form);
  const assetGroup = Form.useWatch('asset_group', form);
  const selectedOutlet = Form.useWatch('outlet_code', form);
  const selectedAssignedTo = Form.useWatch('assigned_to', form);

  const service = (getServiceForData ?? []).find((ServiceFor) => ServiceFor?.id === serviceFor)?.name;

  const assignedTo = employeeMapping?.filter((e) => {
    if (service === 'POS' || service === 'Equipment' || service === 'IT') {
      return e?.submodule?.find((sm) => sm.name === service);
    }
    return true;
  });

  useEffect(() => {
    dispatch(getOutletMaster());
    dispatch(getPriority());
    dispatch(getServiceFor());
    dispatch(getAssetGroup());
    dispatch(getAssetMaster());
    dispatch(getTypeOfService());
    dispatch(getEmployeeMapping());
    dispatch(getEmployeeMaster());
    dispatch(getAssetGroupIssue());
  }, [dispatch]);

  useEffect(() => {
    console.log("DATA", outletData)
    form.setFieldsValue({
      orl_name: (outletData ?? []).find((outletData) => outletData?.id === selectedOutlet)?.orl_name,
      contact_no: (outletData ?? []).find((outletData) => outletData?.id === selectedOutlet)?.orl_cug_no
    });
  }, [selectedOutlet]);

  useEffect(() => {
    // console.log((Employees ?? []).find((eM) => eM?.id === selectedAssignedTo)?.contact);
    form.setFieldsValue({
      phone_no: (Employees ?? []).find((eM) => eM?.id === selectedAssignedTo)?.contact ?? ''
    });
  }, [selectedAssignedTo]);

  const handleClickBack = () => {
    navigate('/createTicket');
  };

  const onFinish = (data) => {
    const outletCode = defaultValue?.id ? defaultValue.outlet_code : (outletData ?? []).find((outletData) => outletData?.id === selectedOutlet)?.outlet_code;
    // setShowDialog(false);
    dispatch(defaultValue?.mode === 'edit' ? updateTickets({data, id: defaultValue?.id}) : saveTickets({data: {...data, outlet_code: outletCode}})).then(
      ({message, status, statusText}) => {
        messageToast({message: message ?? statusText, status, title: 'Ticket creation'});
        if (status === 200) {
          form.resetFields();
          navigate('/createTicket');
        }
      }
    );
  };

  const dateFormat = ['DD/MM/YYYY', 'DD/MM/YY'];

  return (
    <>
      <Card>
        <Row>
          <Col span={24}>
            <Form disabled={savingTickets} name='basic' labelCol={{span: 24}} wrapperCol={{span: 24}} onFinish={onFinish} autoComplete='off' form={form}
            initialValues={{
              ...defaultValue
            }}>
              <Row gutter={[15, 0]}>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='outlet_code' label='Outlet Name' rules={[{required: true, message: 'Please select Outlet code'}]}>
                    <Select placeholder='select Outlet Name' showSearch filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                      {map(
                        (outlet) => {
                          return (
                            <Option key={outlet?.id} value={outlet?.id}>
                              {outlet?.outlet_code}
                            </Option>
                          );
                        },
                        outletList ? outletList : []
                      )}
                    </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='orl_name' label='ORL Name'>
                    <Input disabled placeholder='Enter ORL Name' name='orl_name' />
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='contact_no' label='Contact No'>
                    <Input disabled placeholder='Enter Contact No' name='contact_no' />
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='priority' label='Priority' rules={[{required: true, message: 'Please select Priority'}]}>
                    <Select placeholder='Select' loading={gettingPriority} showSearch>
                      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                      {map(
                        (priority) => {
                          return (
                            <Option key={priority?.id} value={priority?.id}>
                              {priority?.name}
                            </Option>
                          );
                        },
                        priorityData ? priorityData : []
                      )}
                    </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='service_for' label='Service For' rules={[{required: true, message: 'Please select Service for'}]}>
                    <Select
                      placeholder='Select'
                      loading={gettingServiceFor}
                      showSearch
                      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                      {map(
                        (getServiceFor) => {
                          return (
                            <Option key={getServiceFor?.id} value={getServiceFor?.id}>
                              {getServiceFor?.name}
                            </Option>
                          );
                        },
                        getServiceForData ? getServiceForData : []
                      )}
                    </Select>
                  </Form.Item>
                </Col>
                {['Equipment', 'IT'].includes(service) && (
                  <>
                    <Col md={{span: 6}} xs={{span: 24}}>
                      <Form.Item name='asset_group' label='Asset Group'>
                        <Select
                          placeholder='Select'
                          //   loading={gettingState}
                          showSearch
                          filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                          {map(
                            (assetGroup) => {
                              if (assetGroup.servicefor_id === serviceFor){
                              return (
                                <Option key={assetGroup?.id} value={assetGroup?.id}>
                                  {assetGroup?.name}
                                </Option>
                              );
                            }
                            },
                            assetGroups ? assetGroups : []
                          )}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col md={{span: 6}} xs={{span: 24}}>
                      <Form.Item name='asset' label='Asset'>
                        <Select
                          placeholder='Select'
                          //   loading={gettingState}
                          showSearch
                          filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                          {map(
                            (assetMaster) => {
                               console.log(assetMaster,"assetMaster")
                              if (assetMaster.asset_group_id === assetGroup) {
                              return (
                                <Option key={assetMaster?.asset_group_id} value={assetMaster?.asset_group_id}>
                                  {assetMaster?.asset_name_sap}
                                </Option>
                              );
                            }
                            },
                            assetMasters ? assetMasters : []
                          )}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='types_of_issue' label='Types of Issue-s' rules={[{required: true, message: 'Please select Types of Issue'}]}>
                    <Select
                      placeholder='Select'
                      //   loading={gettingState}
                      showSearch
                      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                      {map(
                            (typesOfIssue) => {
                              // if (typesOfIssue.asset_group_id === assetGroup) {
                              //  // console.log(typesOfIssue)
                              // let issues=typesOfIssue.groupissues;
                              // // console.log(j)
                              // console.log(issues)
                              // // console.log(assetGroup)
                              // issues.map((data,i)=>{
                              //   console.log("i",data)
                              //   return (
                              //     <Option key={i} value={i}>
                              //       {data?.name}
                              //     </Option>
                              //   );
                              // })
                              
                              // }
                              return (
                                <Option key={typesOfIssue?.id} value={typesOfIssue?.id}>
                                  {typesOfIssue?.name}
                                </Option>
                              );

                            },
                            typesOfIssue ? typesOfIssue : []
                          )}
                    </Select>
                  </Form.Item>
                </Col>

                    <Col md={{span: 6}} xs={{span: 24}}>
                      <Form.Item
                        name='service_type'
                        label='Type Of Services'
                        rules={[{required: ['Equipment', 'IT'].includes(service), message: 'Please select Type Of Services'}]}>
                        <Select
                          placeholder='Select'
                          //   loading={gettingState}
                          typeOfServices
                          showSearch
                          filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                          {map(
                            (typeOfService) => {
                              return (
                                <Option key={typeOfService?.id} value={typeOfService?.id}>
                                  {typeOfService?.name}
                                </Option>
                              );
                            },
                            typeOfServices ? typeOfServices : []
                          )}
                        </Select>
                      </Form.Item>
                    </Col>
                  </>
                )}

                

                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='assigned_to' label='Assigned To' rules={[{required: true, message: 'Please select Service for'}]}>
                    <Select
                      placeholder='Select'
                      //   loading={gettingState}
                      showSearch
                      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                      {map(
                        (assigned) => {
                          return (
                            <Option key={assigned?.employee_id} value={assigned?.employee_id}>
                              {assigned?.name}
                            </Option>
                          );
                        },
                        assignedTo ? assignedTo : []
                      )}
                    </Select>
                  </Form.Item>
                </Col>
                
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='phone_no' label='Phone No'
                  rules={[
                    {required: true, message: 'Please select Phone No'},
                  ]}>
                    <Input name='phone_no' placeholder='Enter Phone No'  disabled/>
                  </Form.Item>
                </Col>

                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='problem_description' label='Problem Description'>
                    <TextArea rows={4} placeholder='' />
                  </Form.Item>
                </Col>

                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='attachments' label='Attachment'>
                    <MultiUploadButton />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Row gutter={[15, 15]} style={{justifyContent: 'end'}}>
                    <Col span={12} style={{textAlign: 'right'}} className='d-flex align-items-center justify-content-end mt-3'>
                      <Form.Item className='mx-2'>
                        <Button loading={savingTickets} disabled={savingTickets} className='orangeFactory' type='primary' htmlType='submit'>
                          Submit
                        </Button>
                      </Form.Item>

                      <Form.Item>
                        <Button disabled={savingTickets} onClick={handleClickBack}>
                          Back
                        </Button>
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
};

export default CreateTicketForm;
