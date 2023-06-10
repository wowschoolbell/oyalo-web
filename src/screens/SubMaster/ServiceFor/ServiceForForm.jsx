import React from 'react';
import {Card, Button, Col, Row, Form, Input} from 'antd';
import {useLocation, useNavigate} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import messageToast from '../../../components/messageToast/messageToast';
import {saveServiceFor, updateServiceFor} from '../../../@app/service/serviceSlice';

function ServiceForForm() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    state: {data: defaultValue}
  } = useLocation();

  const {savingServiceFor} = useSelector((state) => {
    return state.service;
  });

  const onFinish = (data) => {
    dispatch(defaultValue?.id ? updateServiceFor({data: {...data, id: defaultValue.id}}) : saveServiceFor({data})).then(({message, status, statusText}) => {
      if (status === 200) {
        form.resetFields();
      }
      messageToast({message: message ?? statusText, status, title: 'Service for'});
      navigate('/serviceFor');
    });
  };

  const handleClickBack = () => {
    navigate('/serviceFor');
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
                  <Form.Item name='name' label='Service For' rules={[{required: true, message: 'Please add Service'}]}>
                    <Input name='name' placeholder='Service For' disabled={savingServiceFor} />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Row gutter={[15, 15]} style={{justifyContent: 'end'}}>
                    <Col span={12} style={{textAlign: 'right'}} className='d-flex align-items-center justify-content-end mt-3'>
                      <Form.Item className='mx-2'>
                        <Button className='orangeFactory' type='primary' htmlType='submit' disabled={savingServiceFor} loading={savingServiceFor}>
                          Submit
                        </Button>
                      </Form.Item>
                      <Form.Item>
                        <Button onClick={handleClickBack} disabled={savingServiceFor}>
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

export default ServiceForForm;
