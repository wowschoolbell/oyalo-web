/ eslint-disable no-unused-vars /
import React from 'react';
import {useNavigate} from 'react-router';
import CustomTable from '../../../components/CustomTable';
import {Input, Button, Col, Row, Form, Select, Card} from 'antd';
// import {saveOutletMaster, getStates, getSubZonal, getZonal, updateOutletMaster, getCity} from '../../../@app/master/masterSlice';
// import {map} from 'ramda';
// import {useLocation, useNavigate} from 'react-router';
// import dayjs from 'dayjs';
// import messageToast from '../../../components/messageToast/messageToast';
// import {transStatus} from '../../../util/transStatus';
// import { Input } from 'antd';
// import {getFormData, CREATE_TICKET_FORM_DATA} from './createTicket.constants';


function Mspcrequestreport() {
  // const dispatch = useDispatch();
  const {Option} = Select;

  

  const navigate = useNavigate();

  const onClickAdd = () => {
    navigate('/pccliamorlreportForm');
  };

  

  // const {
  //   getOutletMasterResponse: {data: dataSource}
  // } = useSelector((state) => {
  //   return state.master;
  // });

  const onSelectChange = () => {
    // eslint-disable-next-line no-console
    console.log('change');
  };


  //   useEffect( () => {
  //     dispatch( getOutletMaster() );
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [] );
  const data = [
    
      {
        's.no': '1',
        request_doc_no: 'AD-RQ-23-03-01-001',
        request_date: '01-03-2023',
        fi_payment_doc_no: '1600000182',
        request_amount: '500',
        approved_amount: '200',
        status: 'Cash Received'
      },
      {
        's.no': '2',
        request_doc_no: 'AD-RQ-23-03-02-002',
        request_date: '02-03-2023',
        fi_payment_doc_no: '1600000183',
        request_amount: '800',
        approved_amount: '800',
        status: 'Waiting @ Receipt Confirmation'
      },
      {
        's.no': '3',
        request_doc_no: 'AD-RQ-23-03-03-003',
        request_date: '03-03-2023',
        fi_payment_doc_no: '-',
        request_amount: '1500',
        approved_amount: '-',
        status: 'Waiting @ AH Approval'
      },
      {
        's.no': '4',
        request_doc_no: 'AD-RQ-23-03-04-004',
        request_date: '04-03-2023',
        fi_payment_doc_no: '-',
        request_amount: '500',
        approved_amount: '-',
        status: 'Waiting @ OH Approval'
      },
      {
        's.no': '5',
        request_doc_no: 'AD-RQ-23-03-05-005',
        request_date: '05-03-2023',
        fi_payment_doc_no: '-',
        request_amount: '500',
        approved_amount: '-',
        status: "Waiting @ AH Approval"
      },
      {
        's.no': '6',
        request_doc_no: 'AD-RQ-23-03-06-006',
        request_date: '06-03-2023',
        fi_payment_doc_no: '-',
        request_amount: '500',
        approved_amount: '-',
        status: 'Ah Rejected'
      },
      {
        's.no': '7',
        request_doc_no: 'AD-RQ-23-03-07-007',
        request_date:'07-03-2023',
        fi_payment_doc_no: '-',
        request_amount: '1000',
        approved_amount: '-',
        status: 'OH Rejected'
      },
      {
        's.no': '8',
        request_doc_no: 'AD-RQ-23-03-07-007',
        request_date: '07-03-2023',
        fi_payment_doc_no: '-',
        request_amount: '1000',
        approved_amount: '-',
        status: 'OH Rejected'
      }
    
   
  ];
  let column = [
    { key: '1', headerName: 'S.No', field: 's.no', hide: false, width: 70 },
    { key: '2', headerName: 'Request doc no	', field: 'request_doc_no', hide: false, width: 300 },
    { key: '3', headerName: 'Request date', field: 'request_date', hide: false, width: 300 },
    { key: '4', headerName: 'FI Payment Doc No', field: 'fi_payment_doc_no', hide: false, width: 300 },
    { key: '5', headerName: 'Request Amount', field: 'request_amount', hide: false, width: 180 },
    { key: '6', headerName: 'Approved Amount', field: 'approved_amount', hide: false, width: 300 },
    { key: '7', headerName: 'Status', field: 'status', hide: false, width: 180 ,renderCell: (params) => {
      if (params.row.id === 1) { // check if this is the row that should have the button
        return (
          <>
         <span>
         Cash Received
      </span>
          </>
        );
      } 
      if (params.row.id === 2) { // check if this is the row that should have the button
        return (
          <>
         <span>
         Waiting @ Receipt Confirmation
      </span>
        
          </>
        );
      }if (params.row.id === 3) { // check if this is the row that should have the button
        return (
          <>
         <span>
         Waiting @ AH Approval
      </span>
        
          </>
        );
      }if (params.row.id === 4) { // check if this is the row that should have the button
        return (
          <>
         <span>
         Waiting @ OH Approval
      </span>
        
          </>
        );
      }if (params.row.id === 5) { // check if this is the row that should have the button
        return (
          <>
         <span>
         Waiting @ AH Approval
      </span>
        
          </>
        );
      } if (params.row.id === 6) { // check if this is the row that should have the button
        return (
          <>
         <span>
         Ah Rejected
      </span>
        
          </>
        );
      }if (params.row.id === 7) { // check if this is the row that should have the button
        return (
          <>
         <span>
         OH Rejected
      </span>
        
          </>
        );
      }if (params.row.id === 7) { // check if this is the row that should have the button
        return (
          <>
         <span>
         AH Rejected
      </span>
        
          </>
        );
      } else {
        return <span />;
      }
    }, }  
    ];
  return (
    <div className='h-screen apphide appactionhide lasthide'>
      <Card>
        <Row>
          <Col span={24}>
            <Form
              name='basic'
              labelCol={{span: 24}}
              wrapperCol={{span: 24}}
              onValuesChange={onSelectChange}
             
              // onFinishFailed={onFinishFailed}
              autoComplete='off'
              // form={form}
            >
              <Row gutter={[15, 0]}>
              
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='Zone' label='Zone'>
                   <Select >
                    <Option>select</Option>
                   </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='Sub Zone' label='Sub Zone'>
                   <Select >
                    <Option>select</Option>
                   </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='Outlet' label='Outlet'>
                   <Select >
                    <Option>select</Option>
                   </Select>
                  </Form.Item>
                </Col>
               
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='Waiting @' label='Waiting @'>
                   <Select >
                    <Option>select</Option>
                   </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='From Date ' label='From Date '>
                    <Input placeholder='' type='date' name='From Date ' />
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='To Date ' label='To Date '>
                    <Input placeholder='' type='date' name='To Date ' />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Row gutter={[15, 15]} style={{justifyContent: 'end'}}>
                    <Col span={12} style={{textAlign: 'right'}} className='d-flex align-items-center justify-content-end mt-3'>
                      <Form.Item className='mx-2'>
                        <Button className='orangeFactory' type='primary' htmlType='submit'>
                          View
                        </Button>
                      </Form.Item>
                      </Col>
                      </Row>
                      </Col>

                {/* <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='Cash in Hand' label='Cash in Hand'>
                  <Input placeholder='1000' name='Cash in Hand' />
                  </Form.Item>
                </Col>
               
               
              

              
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='Yet to confirm by accounts ' label='Yet to confirm by accounts '>
                    <Input placeholder='3000' name='Yet to confirm by accounts ' />
                  </Form.Item>
                </Col> */}
               
              </Row>
            </Form>
          </Col>
        </Row>
      </Card>
      <CustomTable
        showHeader={false}
        showEdit={false}
        dataSource={data}
        column={column}
        // handleViewClick={handleViewClick}
        onClickAdd={onClickAdd}
        title={'Approval List'}
      />
    </div>
  );
}

export default Mspcrequestreport;
