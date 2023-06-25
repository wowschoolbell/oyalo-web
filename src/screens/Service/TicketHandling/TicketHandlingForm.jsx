/* eslint-disable no-unused-vars */
import { Card, Col, Form, Input, Row, Select, Button, Image, Descriptions, Modal } from 'antd';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { getEmployeeMaster } from '../../../@app/master/masterSlice';
import { ConverToReactSelect } from '../../../util';
import { getAssetGroupSpare, updateOHTicketHandling, updateTicketHandling } from '../../../@app/service/serviceSlice';
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
  const workdoneBy = Form.useWatch('workdone', form);
  const paymentMode = Form.useWatch('payment_mode', form);
  const quotation = Form.useWatch('quotation', form);
  const advance = Form.useWatch('advance', form);
  const advancePercentage = Form.useWatch('advance_percentage', form);
  const spendAmount = Form.useWatch('spend_amount', form);

  const [employee, setEmployee] = useState(defaultValue.id ? defaultValue.employee_name : {});
  const [state, updateState] = useState({ isOpen: false, title: "Title", images: [] });

  const openModal = (title, images = []) => {
    updateState({ ...state, title, isOpen: true, images })
  };

  const OHStatus = ['OH Approved', 'OH Rejected', 'OHApproved', 'PO processed', 'Waiting @ PO'].includes(defaultValue.ticket_status);

  const onFinish = (data) => {
    if (OHStatus) {
      dispatch(updateOHTicketHandling({
        data: {
          ...data,
          id: defaultValue?.id
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
    } else {
      dispatch(updateTicketHandling({
        data: {
          ...data,
          covered_in_amc: "Auto",
          id: defaultValue?.id,
          employee_id: employee?.id,
          balance_amount: `${parseInt(data.spend_amount) - parseInt(data.advance)}`
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
    }
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
    return ConverToReactSelect(assetSpares?.filter(_ => defaultValue?.asset_group_details?.toString() === _?.asset_group_id?.toString())?.[0]?.assetspares, "name", "name")
    // eslint-disable-next-line
  }, [assetSpares])

  useEffect(() => {
    if (vendorType === OPTIONS.vendorType[0].value && !employeeList?.length)
      dispatch(getEmployeeMaster());

    // eslint-disable-next-line
  }, [vendorType]);

  useEffect(() => {
    form.setFieldsValue({ emp_contact_no: employee?.contact })
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
        <Descriptions title="Ticket Info" bordered size='small' >
          <Descriptions.Item label={"Ticket No"}>{defaultValue.ticket_no}</Descriptions.Item>
          <Descriptions.Item label={"Ticket Description"}>{defaultValue.problem_description}</Descriptions.Item>
          <Descriptions.Item label={"Service For"}>{defaultValue.service_for}</Descriptions.Item>
          <Descriptions.Item label={"Asset Group"}>{defaultValue.asset_group}</Descriptions.Item>
          <Descriptions.Item label={"Asset"}>{defaultValue.asset}</Descriptions.Item>
          <Descriptions.Item label={"ORL Name"}>{defaultValue.orl_name}</Descriptions.Item>
          <Descriptions.Item label={"ORL Number"}>{defaultValue.contact_no}</Descriptions.Item>
          <Descriptions.Item label={"Assigned To"}>{defaultValue.assigned_to}</Descriptions.Item>
          <Descriptions.Item label={"Contact No"}>{defaultValue.contact_no}</Descriptions.Item>
          <Descriptions.Item label={"Attachement"}>{<Button type='link' color='primary' onClick={() => openModal("Ticket Attachement", typeof defaultValue.attachments !== "string" ? defaultValue?.attachments : [])} >View</Button>}</Descriptions.Item>
        </Descriptions>
      </Card>

      <Card style={{ marginTop: "8px" }} >
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
                ...defaultValue,
                employee_id: defaultValue.id && defaultValue.employee_name ? { value: defaultValue.employee_name.id, label: defaultValue.employee_name.name, ...defaultValue.employee_name } : "",
              }}
            >
              {/* Vendor Type */}
              <Row gutter={[15, 0]}>
                <Col md={{ span: 6 }} xs={{ span: 24 }}>
                  <Form.Item name='vendor_type' label='Vendor Type' rules={[{ required: true, message: 'Please select vendor type' }]}>
                    <Select allowClear disabled={OHStatus} placeholder='Select Vendor Type' options={OPTIONS.vendorType} />
                  </Form.Item>
                </Col>

                {/* Vendor Details */}
                {/* If Vendor Type is Internal */}
                {vendorType === OPTIONS.vendorType[0].value && <>
                  {/* Employee Name */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='employee_id' label='Employee Name' rules={[{ required: true, message: 'Please select employee name' }]}>
                      <Select allowClear
                        loading={gettingEmployeeList}
                        placeholder='Select Employee Name'
                        options={giveMeEmployeeOptions()}
                        onChange={(value, option) => {
                          setEmployee(option);
                        }}
                        disabled={OHStatus}
                      />
                    </Form.Item>
                  </Col>
                  {/* Employee Mobile */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='emp_contact_no' label='Contact No.'>
                      <Input disabled placeholder='Enter contact no' name='emp_contact_no' />
                    </Form.Item>
                  </Col>
                </>}

                {/* If Vendot Type is External */}
                {vendorType === OPTIONS.vendorType[1].value && <>
                  {/* Vendor Name */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='vendor_name' label='Vendor Name' rules={[{ required: true, message: 'Please enter vendor name' }]}>
                      <Input disabled={OHStatus} placeholder='Enter Vendor Name' name='vendor_name' />
                    </Form.Item>
                  </Col>
                  {/* Vendor Mobile */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='vendor_contact_no' label='Contact No.'>
                      <Input disabled={OHStatus} placeholder='Enter contact no' name='vendor_contact_no' />
                    </Form.Item>
                  </Col>
                </>}

                {/* Workdone */}
                {defaultValue.service_for !== 'POS' && <Col md={{ span: 6 }} xs={{ span: 24 }}>
                  <Form.Item name='workdone' label='Workdone By'>
                    <Select allowClear disabled={OHStatus} placeholder='Select Workdone' options={OPTIONS.workdoneBy} />
                  </Form.Item>
                </Col>}

                {/* If Workdone By is Service with Spare */}
                {workdoneBy === OPTIONS.workdoneBy[0].value && <>
                  {/* Spare */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='spare_id' label='Spare'>
                      <Select allowClear disabled={OHStatus} loading={gettingAssetGroupSpare} placeholder='Select' options={giveMeAssetSpares()} />
                    </Form.Item>
                  </Col>

                  {/* Covered in AMC */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='covered_in_amc' label='Covered in AMC'>
                      <Input disabled placeholder='Enter' name='covered_in_amc' />
                    </Form.Item>
                  </Col>

                  {/* Spare Upload */}
                  {/* Existing Spare Photo */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='existing_photo' label='Existing Spare Photo'>
                      <Row>
                        <Col>
                          {!OHStatus && <MultiUploadButton url={'ticket-imageupload'} onSuccess={(files) => {
                            form.setFieldsValue({ 'existing_photo': files?.map?.(file => JSON.parse(file?.response?.filename ?? "['']")?.[0] ?? "") ?? "" })
                          }} />}
                        </Col>
                        <Col>
                          <Button type='link' color='primary' onClick={() => openModal("Existing Spare Photo", typeof defaultValue.existing_photo !== "string" ? defaultValue?.existing_photo : [])} >View</Button>
                        </Col>
                      </Row>
                    </Form.Item>
                  </Col>

                  {/* New Spare Photo */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='new_photo' label='New Spare Photo'>
                      <Row>
                        <Col>
                          {!OHStatus && <MultiUploadButton url={'ticket-imageupload'} onSuccess={(files) => {
                            form.setFieldsValue({ 'new_photo': files?.map?.(file => JSON.parse(file?.response?.filename ?? "['']")?.[0] ?? "") ?? "" })
                          }} />}
                        </Col>
                        <Col>
                          <Button type='link' color='primary' onClick={() => openModal("New Spare Photo", typeof defaultValue.new_photo !== "string" ? defaultValue?.new_photo : [])} >View</Button>
                        </Col>
                      </Row>
                    </Form.Item>
                  </Col>

                  {/* Document Copy */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='document_copy' label='Document Copy'>
                      <Row>
                        <Col>
                          {!OHStatus && <MultiUploadButton url={'ticket-imageupload'} onSuccess={(files) => {
                            form.setFieldsValue({ 'document_copy': files?.map?.(file => JSON.parse(file?.response?.filename ?? "['']")?.[0] ?? "") ?? "" })
                          }} />}
                        </Col>
                        <Col>
                          <Button type='link' color='primary' onClick={() => openModal("New Spare Photo", typeof defaultValue.document_copy !== "string" ? defaultValue?.document_copy : [])} >View</Button>
                        </Col>
                      </Row>
                    </Form.Item>
                  </Col>

                  {/* Tentative Date */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='tentative_date' label='Tentative Date'>
                      <Input disabled={OHStatus} type='date' placeholder='Select' name='tentative_date' />
                    </Form.Item>
                  </Col>
                </>}

                {/* Cost Involved */}
                {defaultValue.service_for !== 'POS' && <Col md={{ span: 6 }} xs={{ span: 24 }}>
                  <Form.Item name='cost_involved' label='Cost Involved'>
                    <Select allowClear disabled={OHStatus} placeholder='Select' options={OPTIONS.costInvolved} />
                  </Form.Item>
                </Col>}

                {/* If Cost Involved is Yes */}
                {costInvolved === OPTIONS.costInvolved[0].value && <>
                  {/* Mode of Payment */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='payment_mode' label='Mode of Payment'>
                      <Select allowClear disabled={OHStatus} placeholder='Select' options={OPTIONS.paymentMode} />
                    </Form.Item>
                  </Col>

                  {/* Quotation */}
                  {paymentMode && <>
                    <Col md={{ span: 6 }} xs={{ span: 24 }}>
                      <Form.Item name='quotation' label='Quotation'>
                        <Select allowClear disabled={OHStatus} placeholder='Select' options={OPTIONS.quotation} />
                      </Form.Item>
                    </Col>

                    {/* Estimated Amount */}
                    <Col md={{ span: 6 }} xs={{ span: 24 }}>
                      <Form.Item name='spend_amount' label='Estimated Amount Rs' rules={[{ required: true, message: 'Please enter Estimated Amount rupees' }]}>
                        <Input min={0} disabled={OHStatus} type='number' placeholder='Enter' name='spend_amount' />
                      </Form.Item>
                    </Col>
                  </>}

                  {/* If Mode of Payment is Pettycash */}
                  {paymentMode === OPTIONS.paymentMode[0].value && <>
                    {/* If Quotation is Yes */}
                    {quotation === OPTIONS.quotation[0].value && <>
                      {/* Quotation Number */}
                      <Col md={{ span: 6 }} xs={{ span: 24 }} rules={[{ required: true, message: 'Please enter quotation number' }]}>
                        <Form.Item name='quotation_no' label='Quotation No'>
                          <Input disabled={OHStatus} placeholder='Enter' name='quotation_no' />
                        </Form.Item>
                      </Col>

                      {/* Quotation Copy */}
                      <Col md={{ span: 6 }} xs={{ span: 24 }}>
                        <Form.Item name='quotation_copy' label='Quotation Copy'>
                          {!OHStatus && <MultiUploadButton url={'ticket-imageupload'} onSuccess={(files) => {
                            form.setFieldsValue({ 'quotation_copy': files?.map?.(file => JSON.parse(file?.response?.filename ?? "['']")?.[0] ?? "") ?? "" })
                          }} />}
                          <Image.PreviewGroup>
                            {form.getFieldValue('quotation_copy')?.map(_ => <Image
                              width={200}
                              src={`${defaultValue.pathfor_attachments}/${_}`}
                            />)}
                          </Image.PreviewGroup>
                        </Form.Item>
                      </Col>
                    </>}
                  </>}

                  {/* If Mode of Payment is Online */}
                  {paymentMode === OPTIONS.paymentMode[1].value && <>
                    {/* Advance */}
                    <Col md={{ span: 6 }} xs={{ span: 24 }}>
                      <Form.Item name='advance' label='Advance'>
                        <Select allowClear disabled={OHStatus} placeholder='Select' options={OPTIONS.advance} />
                      </Form.Item>
                    </Col>

                    {/* If Advance is yes */}
                    {advance === OPTIONS.advance[0].value && <>
                      {/* Advance Percentage */}
                      <Col md={{ span: 6 }} xs={{ span: 24 }}>
                        <Form.Item name='advance_percentage' label='Advance Percentage'>
                          <Input min={0} type='number' disabled={OHStatus} placeholder='Enter' name='advance_percentage' />
                        </Form.Item>
                      </Col>

                      {/* Advance Amount */}
                      <Col md={{ span: 6 }} xs={{ span: 24 }}>
                        <Form.Item name='advance_amount' label='Advance Amount'>
                          <Input min={0} type='number' disabled placeholder='Enter' name='advance_amount' />
                        </Form.Item>
                      </Col>
                    </>}
                  </>}
                </>}

                {/* PO Details */}
                {OHStatus && <>
                  {/* PO No */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='po_no' label='PO No'>
                      <Input placeholder='Enter' name='po_no' />
                    </Form.Item>
                  </Col>

                  {/* Vendor Name */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='vendor_name_po' label='Vendor Name'>
                      <Input placeholder='Enter' name='vendor_name_po' />
                    </Form.Item>
                  </Col>

                  {/* PO Value */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='po_value' label='PO Value'>
                      <Input min={0} type='number' placeholder='Enter' name='po_value' />
                    </Form.Item>
                  </Col>

                  {/* Advance Paid */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='advance_paid' label='Advance Paid'>
                      <Select allowClear placeholder='Select' options={OPTIONS.issueClosed} />
                    </Form.Item>
                  </Col>

                  {/* PO Copy */}
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Form.Item name='po_copy' label='PO Copy'>
                      <Row>
                        <Col>
                          <MultiUploadButton url={'ticket-imageupload'} onSuccess={(files) => {
                            form.setFieldsValue({ 'po_copy': files?.map?.(file => JSON.parse(file?.response?.filename ?? "['']")?.[0] ?? "") ?? "" })
                          }} />
                        </Col>
                        <Col>
                          <Button type='link' color='primary' onClick={() => openModal("Document Copy", typeof defaultValue.po_copy !== "string" ? defaultValue?.po_copy : [])} >View</Button>
                        </Col>
                      </Row>
                    </Form.Item>
                  </Col>
                </>}

                {/* Issue Closed */}
                {canIshowIssueClosed() && <Col md={{ span: 6 }} xs={{ span: 24 }}>
                  <Form.Item name='issue_closed' label='Issue Closed'>
                    <Select allowClear placeholder='Select' options={OPTIONS.issueClosed} />
                  </Form.Item>
                </Col>}

                {/* Issue Resolved */}
                {canIshowIssueResolved() && <Col md={{ span: 6 }} xs={{ span: 24 }}>
                  <Form.Item name='issue_resolved' label='Issue Resolved'>
                    <Select allowClear placeholder='Select' options={OPTIONS.issueResolved} />
                  </Form.Item>
                </Col>}

              </Row>
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

      <Modal title={state.title} open={state.isOpen} footer={null} onCancel={() => updateState({ ...state, isOpen: false })}>
        <Image.PreviewGroup>
          {state.images.map(_ => <Image
            width={100}
            src={`${defaultValue.pathfor_attachments}/${_}`}
          />)}
        </Image.PreviewGroup>
      </Modal>
    </>
  );
}

export default memo(TicketHandlingForm);
