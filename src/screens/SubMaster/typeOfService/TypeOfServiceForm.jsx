import React, {useState} from 'react';
import {Card, Button, Col, Row, Form, Input} from 'antd';
import {useLocation, useNavigate} from 'react-router';
import {useSelector} from 'react-redux';

function TypeOfServiceForm() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const {
    state: {data: defaultValue}
  } = useLocation();

  // eslint-disable-next-line no-unused-vars
  const [status, setStatus] = useState(defaultValue?.status ?? 1);

  const {savingEmployeeLevel} = useSelector((state) => {
    return state.subMaster;
  });

  const onFinish = () => {
    // dispatch(defaultValue?.id ? updateEmployeeLevel({data: {...data, status: transStatus({status}), id: defaultValue.id}}) : saveEmployeeLevel({data})).then(
    //   ({message, status, statusText}) => {
    //     if (status === 200) {
    //       form.resetFields();
    //     }
    //     messageToast({message: message ?? statusText, status, title: 'Employee Level Master'});
    //     if (defaultValue?.id) {
    //       navigate('/employeeLevel');
    //     }
    //   }
    // );
  };

  const handleClickBack = () => {
    navigate('/typeOfService');
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
                  <Form.Item name='name' label='Type Of Service' rules={[{required: true, message: 'Please add ype Of Service'}]}>
                    <Input name='name' placeholder='Type Of Service' disabled={savingEmployeeLevel} />
                  </Form.Item>
                </Col>

                {/* <Col span={24}>
                  <Form.Item name='status' label='Status ' rules={[{required: true, message: 'Please slect your status'}]}>
                    <Col span={24}>
                      <Radio.Group
                        buttonStyle='solid'
                        onChange={(e) => {
                          setStatus(e?.target?.value);
                        }}
                        size='small'
                        defaultValue={defaultValue?.status === 'In Active' ? 0 : 1}>
                        <Radio.Button className='active' value={1}>
                          Active
                        </Radio.Button>
                        <Radio.Button className='in-active' value={0}>
                          In-Active
                        </Radio.Button>
                      </Radio.Group>
                    </Col>
                  </Form.Item>
                </Col> */}
                <Col span={24}>
                  <Row gutter={[15, 15]} style={{justifyContent: 'end'}}>
                    <Col span={12} style={{textAlign: 'right'}} className='d-flex align-items-center justify-content-end mt-3'>
                      <Form.Item className='mx-2'>
                        <Button className='orangeFactory' type='primary' htmlType='submit' disabled={savingEmployeeLevel} loading={savingEmployeeLevel}>
                          Submit
                        </Button>
                      </Form.Item>
                      {/* </Col>
                    <Col span={12}> */}
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

export default TypeOfServiceForm;
