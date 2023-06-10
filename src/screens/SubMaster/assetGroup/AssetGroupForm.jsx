import React, {useEffect} from 'react';
import {Card, Button, Col, Row, Form, Input} from 'antd';
import {useLocation, useNavigate} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {Select} from 'antd';
import {getServiceFor, saveAssetGroup, updateAssetGroup} from '../../../@app/service/serviceSlice';
import {map} from 'ramda';
import messageToast from '../../../components/messageToast/messageToast';

function AssetGroupForm() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {Option} = Select;

  const {
    state: {data: defaultValue}
  } = useLocation();

  const {
    getServiceForResponse: {data: dataSource}
  } = useSelector((state) => {
    return state.service;
  });

  useEffect(() => {
    dispatch(getServiceFor());
  }, []);

  const {savingEmployeeLevel} = useSelector((state) => {
    return state.subMaster;
  });

  const onFinish = (data) => {
    dispatch(defaultValue?.id ? updateAssetGroup({data: {...data, id: defaultValue.id}}) : saveAssetGroup({data})).then(({message, status, statusText}) => {
      form.resetFields();

      messageToast({message: message ?? statusText, status, title: 'Employee Level Master'});
      if (defaultValue?.id) {
        navigate('/employeeLevel');
      }
    });
  };

  const handleClickBack = () => {
    navigate('/assetGroup');
  };

  return (
    <>
      <Card>
        <Row style={{justifyContent: 'center'}}>
          <Col span={24}>
            <Form
              name='basic'
              labelCol={{span: 24}}
              wrapperCol={{span: 24}}
              initialValues={{
                status: defaultValue?.status ?? 1,
                ...defaultValue
              }}
              onFinish={onFinish}
              form={form}
              autoComplete='off'>
              <Row gutter={[15, 0]}>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='name' label='Service For' rules={[{required: true, message: 'Please Select Service For'}]}>
                    <Select defaultValue='test' showSearch filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                      {map(
                        (data) => {
                          return (
                            <Option key={data.id} value={data.id}>
                              {data.name}
                            </Option>
                          );
                        },
                        dataSource ? dataSource : []
                      )}
                    </Select>
                  </Form.Item>
                </Col>

                <Col span={6}>
                  <Form.Item name='name' label='Asset Group' rules={[{required: true, message: 'Please add Asset Group'}]}>
                    <Col span={24}>
                      <Input name='name' placeholder='Asset Group' disabled={savingEmployeeLevel} />
                    </Col>
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Row gutter={[15, 15]} style={{justifyContent: 'end'}}>
                    <Col span={12} style={{textAlign: 'right'}} className='d-flex align-items-center justify-content-end mt-3'>
                      <Form.Item className='mx-2'>
                        <Button className='orangeFactory' type='primary' htmlType='submit' disabled={savingEmployeeLevel} loading={savingEmployeeLevel}>
                          Submit
                        </Button>
                      </Form.Item>

                      <Form.Item>
                        <Button onClick={handleClickBack} disabled={savingEmployeeLevel}>
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

export default AssetGroupForm;
