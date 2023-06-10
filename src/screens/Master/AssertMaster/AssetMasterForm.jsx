/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import {Input, Card, Select, Button, Radio, Col, Row, Form, Space, DatePicker} from 'antd';
import {useLocation, useNavigate} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {transStatus} from '../../../util/transStatus';
import {addAuditSubCategory, getAuditCategory, updateAuditSubCategory} from '../../../@app/master/masterSlice';
import {map} from 'ramda';
const {Option} = Select;

function AssetMasterForm() {
  const {
    state: {data: defaultValue = {}}
  } = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [status, setStatus] = useState(defaultValue?.status ?? 1);

  const {
    savingAuditSubCategory,
    getAuditCategoryResponse: {data: AuditCategory}
  } = useSelector((state) => {
    return state.master;
  });

  useEffect(() => {
    dispatch(getAuditCategory());
  }, [dispatch]);

  const handleClickBack = () => {
    navigate('/AssetMaster');
  };
  const dateFormat = ['DD/MM/YYYY', 'DD/MM/YY'];
  const onFinish = () => {
    //dispatch(
    //   defaultValue?.id
    //     ? updateAuditSubCategory( { data: { ...restOfData, status: transStatus( { status } ), auditsubcategory_ID: defaultValue?.id, auditcategory_ID: defaultValue.auditcategory_id } } )
    //     : addAuditSubCategory( { data: { ...restOfData, status: transStatus( { status } ) } } )
    // ).then( ( { status } ) => {
    //   if ( status === 200 ) {
    //     form.resetFields();
    //   }
    //   if ( defaultValue?.id && status === 200 ) {
    //     navigate( '/auditSubCategory' );
    //   }
    // } );
  };


  const formItemLayout = {
    labelCol: {
      xs: {span: 24},
      sm: {span: 4}
    },
    wrapperCol: {
      xs: {span: 24},
      sm: {span: 20}
    }
  };
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: {span: 24, offset: 0},
      sm: {span: 20, offset: 0}
    }
  };

  return (
    <>
      <Card>
        <Row style={{justifyContent: 'center'}}>
          <Col span={24}>
            <Form
              name='basic'
              labelCol={{span: 24}}
              form={form}
              wrapperCol={{span: 24}}
              initialValues={{
                status: defaultValue?.status ?? 1,
                auditcategory_ID: defaultValue?.auditcategory_id,
                name: defaultValue?.audit_subcategory,
                ...defaultValue
              }}
              onFinish={onFinish}
              autoComplete='off'>
              <Row gutter={[15, 0]}>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='code' label='Outlet Code' rules={[{required: true, message: 'Please select Outlet Code'}]} disabled={savingAuditSubCategory}>
                    <Select
                      placeholder='select Outlet Code'
                      disabled={savingAuditSubCategory}
                      showSearch
                      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                      <Option>Code 1</Option>
                      <Option>Code 2</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item
                    name='Asset_No_in_SAP'
                    label='Outlet Name'
                    rules={[
                      {
                        required: true,
                        message: 'Please select Outlet Name'
                      }
                    ]}
                    disabled={savingAuditSubCategory}>
                    <Select
                      placeholder='select Outlet Name'
                      disabled={savingAuditSubCategory}
                      showSearch
                      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                      {map(
                        (AuditCategory) => {
                          return (
                            <Option key={AuditCategory.id} value={AuditCategory.id}>
                              {AuditCategory.name}
                            </Option>
                          );
                        },
                        AuditCategory ? AuditCategory : []
                      )}
                    </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item
                    name='Asset_No_in_SAP'
                    label='Asser Group'
                    rules={[
                      {
                        required: true,
                        message: 'Please select Asset Group'
                      }
                    ]}
                    disabled={savingAuditSubCategory}>
                    <Select
                      placeholder='select Asset Group'
                      disabled={savingAuditSubCategory}
                      showSearch
                      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                      {map(
                        (AuditCategory) => {
                          return (
                            <Option key={AuditCategory.id} value={AuditCategory.id}>
                              {AuditCategory.name}
                            </Option>
                          );
                        },
                        AuditCategory ? AuditCategory : []
                      )}
                    </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='name' label='Asset No in SAP' rules={[{required: true, message: 'Please add Asset No in SAP'}]}>
                    <Input name='name' placeholder='Asset No in SAP' />
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='name' label='Asset Name in SAP' rules={[{required: true, message: 'Please add Asset Name in SAPe'}]}>
                    <Input name='vendor_name' placeholder='Asset Name in SAP' />
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='name' label='Asset warranty end date ' rules={[{required: true, message: 'Please add Asset warranty end date '}]}>
                    {/* <Input name='name' placeholder='Asset warranty end date' /> */}
                    <DatePicker format={dateFormat} placeholder='dd/mm/yyyy' name='zomoato_date' style={{width: '100%'}} />
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='name' label='Spare I' rules={[{required: true, message: 'Please add Asset Group Spare Io'}]}>
                    {/* <Input name='name' placeholder='Asset Group Spare I' /> */}
                    <Select
                      placeholder='Select Spare I'
                      // disabled={savingAuditSubCategory}
                      showSearch
                      // filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                      {/* {map(
                        (AuditCategory) => {
                          return ( */}
                      {/* <Option key={AuditCategory.id} value={AuditCategory.id}>
                              {AuditCategory.name}
                            </Option> */}
                      {/* );
                        },
                        AuditCategory ? AuditCategory : []
                      )} */}
                      <Option>Data One</Option>
                      <Option>Data two</Option>
                      <Option>Data three</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='name' label='Spare1 warranty end date ' rules={[{required: true, message: 'Please add Spare1 warranty end date '}]}>
                    {/* <Input name='name' placeholder='Spare1 warranty end date' /> */}
                    <DatePicker format={dateFormat} placeholder='dd/mm/yyyy' name='zomoato_date' style={{width: '100%'}} />
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='name' label='Spare 2' rules={[{required: true, message: 'Please add Spare 2'}]}>
                    {/* <Input name='name' placeholder='Spare 2' /> */}
                    <Select
                      placeholder='Select Spare 2'
                      // disabled={savingAuditSubCategory}
                      showSearch
                      // filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                      {/* {map(
                        (AuditCategory) => {
                          return ( */}
                      {/* <Option key={AuditCategory.id} value={AuditCategory.id}>
                              {AuditCategory.name}
                            </Option> */}
                      {/* );
                        },
                        AuditCategory ? AuditCategory : []
                      )} */}
                      <Option>Data One</Option>
                      <Option>Data two</Option>
                      <Option>Data three</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='name' label='Spare2 warranty end date ' rules={[{required: true, message: 'Please add Spare2 warranty end date'}]}>
                    <DatePicker format={dateFormat} placeholder='dd/mm/yyyy' name='zomoato_date' style={{width: '100%'}} />
                    {/* <Input name='name' placeholder='Spare2 warranty end date ' /> */}
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Row gutter={[15, 15]} style={{justifyContent: 'end'}}>
                    <Col span={12} className='d-flex justify-content-end align-items-center'>
                      <Form.Item className='mx-2'>
                        <Button className='orangeFactory' type='primary' htmlType='submit' disabled={savingAuditSubCategory}>
                          Submit
                        </Button>
                      </Form.Item>
                      {/* </Col>
                    <Col span={12}> */}
                      <Form.Item>
                        <Button disabled={savingAuditSubCategory} onClick={handleClickBack}>
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
}

export default AssetMasterForm;
