/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import {Input, Card, Select, Button, Radio, Col, Row, Form, Space} from 'antd';
import {useLocation, useNavigate} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {transStatus} from '../../../util/transStatus';
import {addAuditSubCategory, getAuditCategory, updateAuditSubCategory} from '../../../@app/master/masterSlice';
import {map} from 'ramda';
const {Option} = Select;

function AssetGroupSpareForm() {
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
    navigate('/AssetGroupSpare');
  };

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
                <Col md={{span: 6}} xs={{span: 24}} lg={4}>
                  <Form.Item name='auditcategory_ID' label='Add Asset Group ' rules={[{required: true, message: 'Please select Asset Group'}]} disabled={savingAuditSubCategory}>
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
                <Col md={{span: 6}} xs={{span: 24}} lg={8}>
                  <Form.Item name='add_sub_category' label='Add Asset Spare'>
                    <Form.List
                      name='sub'
                      rules={[
                        {
                          validator: async (_, names) => {
                            if (!names || names.length < 1) {
                              return Promise.reject(new Error('At least add 1 Add Sub Category'));
                            }
                          }
                        }
                      ]}>
                      {(fields, {add, remove}, {errors}) => (
                        <div>
                          {fields.map((field, index) => (
                            // <Form.Item {...( index === 0 ? formItemLayout : formItemLayoutWithOutLabel )} required={false} key={field.key}>
                            //   <Form.Item
                            //     {...field}
                            //     validateTrigger={['onChange', 'onBlur']}
                            //     rules={[
                            //       {
                            //         required: true,
                            //         whitespace: true,
                            //         message: 'Please input Add Sub Category or delete this field.'
                            //       }
                            //     ]}
                            //     noStyle>
                            //     <Input placeholder='Add Sub Category' style={{ width: '80%' }} disabled={savingAuditSubCategory} />
                            //   </Form.Item>
                            //   {fields.length > 1 ? <MinusCircleOutlined className='dynamic-delete-button' style={{ paddingLeft: '6px' }} onClick={() => remove( field.name )} /> : null}
                            // </Form.Item>
                            <Space
                              key={field.key}
                              style={{
                                display: 'flex',
                                // marginBottom: 8,
                                justifyContent: 'space-between',
                                alignItems: 'baseline'
                              }}>
                              <Form.Item
                                {...field}
                                name={[field.name, 'sub_name']}
                                validateTrigger={['onChange', 'onBlur']}
                                rules={[
                                  {
                                    required: true,
                                    whitespace: true,
                                    message: 'Please input Add Sub Category or delete this field.'
                                  }
                                ]}>
                                <Input
                                  style={{
                                    width: '100% '
                                  }}
                                  placeholder='Add Asset Spare'
                                  disabled={savingAuditSubCategory}
                                />
                              </Form.Item>
                              <Form.Item
                                align='baseline'
                                noStyle
                                shouldUpdate={(prevValues, curValues) => prevValues.area !== curValues.area || prevValues.sights !== curValues.sights}>
                                {() => (
                                  <Form.Item
                                    {...field}
                                    name={[field.name, 'status']}
                                    rules={[
                                      {
                                        required: true,
                                        message: 'Missing Status'
                                      }
                                    ]}>
                                    <Radio.Group
                                      defaultValue={1}
                                      buttonStyle='solid'
                                      style={{
                                        display: 'flex'
                                      }}>
                                      <Radio.Button value={1} className='active'>
                                        Active
                                      </Radio.Button>
                                      <Radio.Button value={0} className='in-active'>
                                        InActive
                                      </Radio.Button>
                                    </Radio.Group>
                                  </Form.Item>
                                )}
                              </Form.Item>

                              <MinusCircleOutlined onClick={() => remove(field.name)} />
                            </Space>
                          ))}
                          <Form.Item>
                            <Button
                              type='dashed'
                              onClick={() => add()}
                              style={{width: '40%', paddingLeft: '5px', backgroundColor: 'green', color: 'white'}}
                              icon={<PlusOutlined style={{}} />}
                              disabled={savingAuditSubCategory}>
                              Add field
                            </Button>

                            <Form.ErrorList errors={errors} />
                          </Form.Item>
                        </div>
                      )}
                    </Form.List>
                  </Form.Item>
                </Col>

                {/* <Col span={24}>
                  <Form.Item name='status' label='Status'>
                    <Space direction='vertical'>
                      <Col span={24}>
                        <Radio.Group
                          disabled={savingAuditSubCategory}
                          buttonStyle='solid'
                          defaultValue={defaultValue?.status === 'In Active' ? 0 : 1}
                          onChange={( e ) => {
                            setStatus( e?.target?.value );
                          }}
                          size='small'>
                          <Radio.Button className='active' value={1}>
                            Active
                          </Radio.Button>
                          <Radio.Button className='in-active' value={0}>
                            In-Active
                          </Radio.Button>
                        </Radio.Group>
                      </Col>
                    </Space>
                  </Form.Item>
                </Col> */}
                {/* <Col span={24}>
                  <Row gutter={[15, 15]} style={{ justifyContent: 'çenter' }}>
                    <Col span={12} style={{ textAlign: 'right' }}>
                      <Form.Item>
                        <Button className='orangeFactory' type='primary' htmlType='submit' disabled={savingAuditSubCategory}>
                          Submit
                        </Button>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item>
                        <Button disabled={savingAuditSubCategory} onClick={handleClickBack}>
                          Back
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Col> */}

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

export default AssetGroupSpareForm;
