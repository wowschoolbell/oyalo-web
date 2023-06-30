/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Input,
  Card,
  Select,
  Button,
  Radio,
  Col,
  Row,
  Form,
  Space,
  DatePicker,
  Upload,
} from "antd";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { transStatus } from "../../../util/transStatus";
import {
  addAuditSubCategory,
  getAuditCategory,
  getOutletMaster,
  updateAuditSubCategory,
} from "../../../@app/master/masterSlice";
import { map } from "ramda";
import {
  getAssetGroup,
  getAssetMaster,
  saveAssetMaster,
  saveNewAssetMaster,
  updateAssetMaster,
  updateNewAssetMaster,
  uploadCsvFile,
} from "../../../@app/service/serviceSlice";
import dayjs from "dayjs";
import ConfirmOnExit from "../../../components/confirmOnExit/ConfirmOnExit";
import messageToast from "../../../components/messageToast/messageToast";

const { Option } = Select;

function NewAssetMasterUpdateFormCsv() {
  const {
    state: { data: defaultValue = {}, isEdit = false },
  } = useLocation();

  const fileReader = new FileReader();

  const [status, setStatus] = useState(defaultValue?.status ?? 1);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [array, setArray] = useState([]);

  const [form] = Form.useForm();

  const [showDialog, setShowDialog] = useState(false);
  const [selectedOutlet, setSelectedOutlet] = useState();

  const {
    gettingAssetGroup,
    savingAssetMaster,
    getAssetGroupResponse: { data: assetGroups },
  } = useSelector((state) => {
    return state.service;
  });

  const {
    getOutletMasterResponse: { data: outletData },
  } = useSelector((state) => {
    return state.master;
  });

  const outletList = outletData?.map((o) => ({
    ...o,
    outlet_code: `${o?.outlet_code} - ${o?.name}`,
  }));

  useEffect(() => {
    if (array) {
      var formData = new FormData();
      //append formdata
      formData.append("myfiles", array[0]);

      //dispatch(uploadCsvFile(formData));
      //fetch request
      fetch("https://mobile.wowschoolbell.in/api/upload-new-asset-master", {
        method: "POST",
        body: formData,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          //console.log(res)
        });
    }
  }, [array]);

  useEffect(() => {
    dispatch(getAssetGroup());
    dispatch(getOutletMaster());
  }, [dispatch]);

  const handleClickBack = () => {
    navigate("/assetMaster");
  };
  const dateFormat = ["DD/MM/YYYY", "DD/MM/YY"];
  const onFinish = (data) => {
    if (data?.asset_file) {
      fileReader.onload = function (event) {
        const text = data?.asset_file;
        /// csvFileToArray(text);
      };

      fileReader.readAsText(data?.asset_file);
    }

    setShowDialog(false);
    console.log(data, ":data");
    // const outletCode = defaultValue?.id
    //   ? defaultValue.outlet_code
    //   : (outletData ?? []).find(
    //       (outletData) => outletData?.id === selectedOutlet
    //     )?.outlet_code;
    // const asset_warranty_end_date =
    //   data["asset_warranty_end_date"]?.format("YYYY-MM-DD");
    // const spares_list = (data.spares_list ?? []).map((spares_list) => {
    //   return {
    //     ...spares_list,
    //     spare_warranty_end_date:
    //       spares_list.spare_warranty_end_date?.format("YYYY-MM-DD"),
    //   };
    // });

    // let payload = {
    //   assets: data.assets?.map((_) => ({
    //     company_code: data.company_code,
    //     plant_code: data.plant_code,
    //     outlet_code: outletCode,
    //     asset_warranty_end_date,
    //     spares_list,
    //     asset_group: data?.asset_group,
    //     ..._,
    //   })),
    // };

    // dispatch(
    //   defaultValue?.id
    //     ? updateNewAssetMaster({
    //         data: {
    //           ...payload,
    //           id: defaultValue.id,
    //         },
    //       })
    //     : saveNewAssetMaster({
    //         data: payload,
    //       })
    // ).then(({ message, status, statusText }) => {
    //   if (status === 200) {
    //     form.resetFields();
    //     navigate("/assetMaster");
    //     messageToast({
    //       message: message ?? statusText,
    //       status,
    //       title: "Asset group Master",
    //     });
    //   } else {
    //     messageToast({ message: message, status, title: "Asset Group Master" });
    //   }
    // });
  };

  // const csvFileToArray = (string) => {
  //   const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
  //   const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

  //   const array = csvRows.map((i) => {
  //     const values = i.split(",");
  //     const obj = csvHeader.reduce((object, header, index) => {
  //       object[header] = values[index];
  //       return object;
  //     }, {});
  //     return obj;
  //   });

  //   setArray(array);
  // };

  const headerKeys = Object.keys(Object.assign({}, ...array));

  return (
    <>
      <Card>
        <ConfirmOnExit showModel={showDialog} />
        <Row style={{ justifyContent: "center" }}>
          <Col span={24}>
            <Form
              name="basic"
              onFieldsChange={() => setShowDialog(true)}
              labelCol={{ span: 24 }}
              form={form}
              disabled={savingAssetMaster}
              wrapperCol={{ span: 24 }}
              onFinish={onFinish}
              autoComplete="off">
              <Row gutter={[25, 0]}>
                <Col md={{ span: 4 }} xs={{ span: 16 }}>
                  <Upload
                    accept=".xlsx"
                    name="logo"
                    multiple=""
                    showUploadList={{ showPreviewIcon: false }}
                    //action="https://mobile.wowschoolbell.in/api/upload-new-asset-master"
                    onChange={(filesData) => {
                      let fileList = [];

                      //foreach files in filelist from antd upload
                      filesData.fileList.forEach((file) => {
                        fileList.push(file.originFileObj); //pushing File object
                      });
                      console.log(fileList, "fileList");
                      setArray(fileList);

                      //set value to formik
                      //setFieldValue("design_images", fileList);
                    }}
                    listType="xlsx"
                    maxCount={1}
                    withCredentials //this is what limits the number of files uploaded
                  >
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                  </Upload>
                </Col>
                {/* <Form.Item
                    name="asset_file"
                    label="Asset file"
                    rules={[
                      // {
                      //   pattern: /^[a-zA-Z0-9' '  ]*$/,
                      //   message: "Invalid value",
                      // },
                      { required: true, message: "Please enter CSV File " },
                    ]}
                    disabled={savingAssetMaster}>
                    <Input
                      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                      type="file"
                      name="asset_file"
                      placeholder="Asset No in SAP"
                    />
                  </Form.Item>
                </Col> */}

                <Col span={24}>
                  <Row gutter={[15, 15]} style={{ justifyContent: "end" }}>
                    <Col
                      span={12}
                      className="d-flex justify-content-end align-items-center">
                      <Form.Item className="mx-2">
                        <Button
                          className="orangeFactory"
                          type="primary"
                          htmlType="submit"
                          loading={savingAssetMaster}
                          disabled={savingAssetMaster}>
                          {isEdit ? "Update" : "Add"}
                        </Button>
                      </Form.Item>

                      <Form.Item>
                        <Button
                          disabled={savingAssetMaster}
                          onClick={handleClickBack}>
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

export default NewAssetMasterUpdateFormCsv;
