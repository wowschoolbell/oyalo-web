/* eslint-disable no-unused-vars */
import { Card, Col, Form, Input, Row, Select, Button } from 'antd';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { getEmployeeMaster } from '../../../@app/master/masterSlice';
import { ConverToReactSelect } from '../../../util';
import { getAssetGroupSpare, updateTicketHandling } from '../../../@app/service/serviceSlice';
import { MultiUploadButton } from '../../../components/multiUploadButton/MultiUploadButton';
import messageToast from '../../../components/messageToast/messageToast';

const OPTIONS = {
  vendorType: [{ value: "Internal", label: "Internal" }, { value: "External", label: "External" }],
  workdoneBy: [{ value: "Service with spare", label: "Service with spare" }, { value: "Service without spare", label: "Service without spare" }],
  costInvolved: [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }],
  issueResolved: [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }],
  paymentMode: [{ value: "Pettycash", label: "Pettycash" }, { value: "Online", label: "Online" }],
  quotation: [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }],
  advance: [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }],
  issueClosed: [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }],
}

function TicketHandlingForm() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state: { data: defaultValue } } = useLocation();
  const { gettingEmployeMaster: gettingEmployeeList, getEmployeeMasterResponse: { data: employeeList } } = useSelector((state) => { return state.master });
  const { gettingAssetGroupSpare, getAssetGroupSpareResponse: { data: assetSpares }, } = useSelector((state) => { return state.service });
  const { updatingTicketHandling } = useSelector((state) => { return state.service });

  const [form] = Form.useForm();
  const vendorType = Form.useWatch('vendor_type', form);
  const costInvolved = Form.useWatch('cost_involved', form);
  const workdoneBy = Form.useWatch('workdone_by', form);
  const paymentMode = Form.useWatch('payment_mode', form);
  const quotation = Form.useWatch('quotation', form);
  const advance = Form.useWatch('advance', form);
  const advancePercentage = Form.useWatch('advance_percentage', form);
  const spendAmount = Form.useWatch('spend_amount', form);

  const [employee, setEmployee] = useState({});

  const onFinish = (data) => {
    dispatch(updateTicketHandling({
      data: {
        ...data,
        id: defaultValue?.id,
        existing_photo: JSON.stringify(data?.existing_photo ?? []) ?? "[]",
        new_photo: JSON.stringify(data?.new_photo ?? []) ?? "[]",
        document_copy: JSON.stringify(data?.document_copy ?? []) ?? "[]",
        quotation_copy: JSON.stringify(data?.quotation_copy ?? []) ?? "[]",
      }
    })).then(
      ({ message, status, statusText }) => {
        messageToast({ message: message ?? statusText, status, title: 'Ticket Updated' });
        if (status === 200) {
          form.resetFields();
          navigate('/handleTicket');
        }
      }
    );
  };

  const canIshowIssueResolved = () => {
    if (costInvolved === OPTIONS.costInvolved[1].value) {
      return true;
    }
    return false;
  }

  const canIshowIssueClosed = () => {
    if (costInvolved === OPTIONS.costInvolved[1].value && paymentMode && quotation === OPTIONS.quotation[0].value) {
      return true
    }
    return true;
  }

  const handleClickBack = () => {
    navigate(-1);
  }


  const giveMeEmployeeOptions = useCallback(() => {
    return ConverToReactSelect(employeeList, "id", "name")
  }, [employeeList])

  const giveMeAdvanceAmount = () => {
    let spendAmount = form.getFieldValue('spend_amount') ?? 0;
    return spendAmount * (advancePercentage / 100);
  }

  const giveMeAssetSpares = useCallback(() => {
    return ConverToReactSelect(assetSpares?.filter(_ => defaultValue.asset_group === _.asset_group_id.toString())?.[0]?.assetspares, "name", "name")
    // eslint-disable-next-line
  }, [assetSpares])

  useEffect(() => {
    if (vendorType === OPTIONS.vendorType[0].value && !employeeList?.length)
      dispatch(getEmployeeMaster());

    // eslint-disable-next-line
  }, [vendorType]);

  useEffect(() => {
    form.setFieldsValue({ employee_contact_no: employee?.contact })
    // eslint-disable-next-line
  }, [employee]);

  useEffect(() => {
    form.setFieldsValue({ advance_amount: giveMeAdvanceAmount() })
    // eslint-disable-next-line
  }, [advancePercentage, spendAmount]);

  useEffect(() => {
    if (workdoneBy === OPTIONS.workdoneBy[0].value && !assetSpares?.length)
      dispatch(getAssetGroupSpare())

    form.setFieldsValue({ covered_in_amc: "Auto" })
    // eslint-disable-next-line
  }, [workdoneBy])

  return (
    <>
      <Card>
        <Row>
          <Col span={24}>
            <Form
              name='update_ticket_handling'
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              onFinish={onFinish}
              autoComplete='off'
              form={form}
              initialValues={{
                ...defaultValue
              }}
            >
              {/* Vendor Type */}
              <Row gutter={[15, 0]}>
                <Col md={{ span: 6 }} xs={{ span: 24 }}>
                  <Form.Item name='vendor_type' label='Vendor Type'>
                    <Select placeholder='Select Vendor Type' options={OPTIONS.vendorType} />
                  </Form.Item>
                </Col>
              </Row>

              {/* Vendor Details */}
              <Row gutter={[15, 0]}>
                {/* If Vendor Type is Internal */}
                {vendorType === OPTIONS.vendorType[0].value && <>
                  {/* Employee Name */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='employee_name' label='Employee Name'>
                      <Select
                        loading={gettingEmployeeList}
                        placeholder='Select Employee Name'
                        options={giveMeEmployeeOptions()}
                        onChange={(value, option) => {
                          setEmployee(option);
                        }}
                      />
                    </Form.Item>
                  </Col>
                  {/* Employee Mobile */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='employee_contact_no' label='Contact No.'>
                      <Input disabled placeholder='Enter contact no' name='employee_contact_no' />
                    </Form.Item>
                  </Col>
                </>}

                {/* If Vendot Type is External */}
                {vendorType === OPTIONS.vendorType[1].value && <>
                  {/* Vendor Name */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='vendor_name' label='Vendor Name'>
                      <Input placeholder='Enter Vendor Name' name='vendor_name' />
                    </Form.Item>
                  </Col>
                  {/* Vendor Mobile */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='vendor_contact_no' label='Contact No.'>
                      <Input placeholder='Enter contact no' name='vendor_contact_no' />
                    </Form.Item>
                  </Col>
                </>}
              </Row>

              {/* Workdone */}
              <Row gutter={[15, 0]}>
                <Col md={{ span: 6 }} xs={{ span: 24 }}>
                  <Form.Item name='workdone_by' label='Workdone By'>
                    <Select placeholder='Select Workdone' options={OPTIONS.workdoneBy} />
                  </Form.Item>
                </Col>
              </Row>

              {/* If Workdone By is Service with Spare */}
              {workdoneBy === OPTIONS.workdoneBy[0].value && <>
                <Row gutter={[15, 0]}>
                  {/* Spare */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='spare' label='Spare'>
                      <Select loading={gettingAssetGroupSpare} placeholder='Select' options={giveMeAssetSpares()} />
                    </Form.Item>
                  </Col>

                  {/* Covered in AMC */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='covered_in_amc' label='Covered in AMC'>
                      <Input disabled placeholder='Enter' name='covered_in_amc' />
                    </Form.Item>
                  </Col>
                </Row>

                {/* Spare Upload */}
                <Row gutter={[15, 0]}>
                  {/* Existing Spare Photo */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='existing_photo' label='Existing Spare Photo'>
                      <MultiUploadButton url={'ticket-imageupload'} onSuccess={(files) => {
                        form.setFieldsValue({ 'existing_photo': files?.map?.(file => JSON.parse(file?.response?.filename ?? "['']")?.[0] ?? "") ?? "" })
                      }} />
                    </Form.Item>
                  </Col>

                  {/* New Spare Photo */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='new_photo' label='New Spare Photo'>
                      <MultiUploadButton url={'ticket-imageupload'} onSuccess={(files) => {
                        form.setFieldsValue({ 'new_photo': files?.map?.(file => JSON.parse(file?.response?.filename ?? "['']")?.[0] ?? "") ?? "" })
                      }} />
                    </Form.Item>
                  </Col>

                  {/* Document Copy */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='document_copy' label='Document Copy'>
                      <MultiUploadButton url={'ticket-imageupload'} onSuccess={(files) => {
                        form.setFieldsValue({ 'document_copy': files?.map?.(file => JSON.parse(file?.response?.filename ?? "['']")?.[0] ?? "") ?? "" })
                      }} />
                    </Form.Item>
                  </Col>
                </Row>

                {/* Tentative Date */}
                <Row gutter={[15, 0]}>
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='tentative_date' label='Tentative Date'>
                      <Input type='date' placeholder='Select' name='tentative_date' />
                    </Form.Item>
                  </Col>
                </Row>
              </>}

              {/* Cost Involved */}
              <Row gutter={[15, 0]}>
                <Col md={{ span: 6 }} xs={{ span: 24 }}>
                  <Form.Item name='cost_involved' label='Cost Involved'>
                    <Select placeholder='Select' options={OPTIONS.costInvolved} />
                  </Form.Item>
                </Col>
              </Row>

              {/* If Cost Involved is Yes */}
              {costInvolved === OPTIONS.costInvolved[0].value && <>
                {/* Mode of Payment */}
                <Row gutter={[15, 0]}>
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='payment_mode' label='Mode of Payment'>
                      <Select placeholder='Select' options={OPTIONS.paymentMode} />
                    </Form.Item>
                  </Col>
                </Row>

                {/* Quotation */}
                {paymentMode && <Row gutter={[15, 0]}>
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='quotation' label='Quotation'>
                      <Select placeholder='Select' options={OPTIONS.quotation} />
                    </Form.Item>
                  </Col>

                  {/* Spend Amount */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='spend_amount' label='Spend Amount' rules={[{ required: true }]}>
                      <Input type='number' placeholder='Enter' name='spend_amount' />
                    </Form.Item>
                  </Col>
                </Row>}

                {/* If Mode of Payment is Pettycash */}
                {paymentMode === OPTIONS.paymentMode[0].value && <>
                  {/* If Quotation is Yes */}
                  {quotation === OPTIONS.quotation[0].value && <>
                    <Row gutter={[15, 0]}>
                      {/* Quotation Number */}
                      <Col md={{ span: 6 }} xs={{ span: 24 }} rules={[{ required: true }]}>
                        <Form.Item name='quotation_no' label='Quotation No'>
                          <Input placeholder='Enter' name='quotation_no' />
                        </Form.Item>
                      </Col>

                      {/* Quotation Copy */}
                      <Col md={{ span: 6 }} xs={{ span: 24 }}>
                        <Form.Item name='quotation_copy' label='Quotation Copy'>
                          <MultiUploadButton url={'ticket-imageupload'} onSuccess={(files) => {
                            form.setFieldsValue({ 'quotation_copy': files?.map?.(file => JSON.parse(file?.response?.filename ?? "['']")?.[0] ?? "") ?? "" })
                          }} />
                        </Form.Item>
                      </Col>
                    </Row>
                  </>}
                </>}

                {/* If Mode of Payment is Online */}
                {paymentMode === OPTIONS.paymentMode[1].value && <>
                  {/* Advance */}
                  <Row gutter={[15, 0]}>
                    <Col md={{ span: 6 }} xs={{ span: 24 }}>
                      <Form.Item name='advance' label='Advance'>
                        <Select placeholder='Select' options={OPTIONS.advance} />
                      </Form.Item>
                    </Col>
                  </Row>

                  {/* If Advance is yes */}
                  {advance === OPTIONS.advance[0].value && <>
                    <Row gutter={[15, 0]}>
                      {/* Advance Percentage */}
                      <Col md={{ span: 6 }} xs={{ span: 24 }}>
                        <Form.Item name='advance_percentage' label='Advance Percentage'>
                          <Input placeholder='Enter' name='advance_percentage' />
                        </Form.Item>
                      </Col>

                      {/* Advance Amount */}
                      <Col md={{ span: 6 }} xs={{ span: 24 }}>
                        <Form.Item name='advance_amount' label='Advance Amount'>
                          <Input disabled placeholder='Enter' name='advance_amount' />
                        </Form.Item>
                      </Col>
                    </Row>
                  </>}
                </>}
              </>}

              {/* Issue Closed */}
              {canIshowIssueClosed() && <Row gutter={[15, 0]}>
                <Col md={{ span: 6 }} xs={{ span: 24 }}>
                  <Form.Item name='issue_closed' label='Issue Closed'>
                    <Select placeholder='Select' options={OPTIONS.issueClosed} />
                  </Form.Item>
                </Col>
              </Row>}

              {/* Issue Resolved */}
              {canIshowIssueResolved() && <Row gutter={[15, 0]}>
                <Col md={{ span: 6 }} xs={{ span: 24 }}>
                  <Form.Item name='issue_resolved' label='Issue Resolved'>
                    <Select placeholder='Select' options={OPTIONS.issue} />
                  </Form.Item>
                </Col>
              </Row>}

              <Row gutter={[15, 0]}>
                <Col span={24}>
                  <Row gutter={[15, 15]} style={{ justifyContent: 'end' }}>
                    <Col span={12} style={{ textAlign: 'right' }} className='d-flex align-items-center justify-content-end mt-3'>
                      <Form.Item className='mx-2'>
                        <Button loading={updatingTicketHandling} disabled={updatingTicketHandling} className='orangeFactory' type='primary' htmlType='submit'>
                          {"Update"}
                        </Button>
                      </Form.Item>

                      <Form.Item>
                        <Button disabled={updatingTicketHandling} onClick={handleClickBack}>
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
      </Card >
    </>
  );
}

export default memo(TicketHandlingForm);
