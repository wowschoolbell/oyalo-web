/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { isEmpty } from "ramda";
import "./styles.css";
import {
  FaBook,
  FaBriefcase,
  FaBuilding,
  FaCalculator,
  FaDatabase,
  FaGlobe,
  FaLocationArrow,
  FaMap,
  FaMapMarkedAlt,
  FaServicestack,
  FaSortAmountDown,
  FaStackExchange,
  FaStreetView,
  FaUserAlt,
  FaUserEdit,
  FaUserTag,
} from "react-icons/fa";
import { RiLayoutGridFill } from "react-icons/ri";
import { SiAdobeaudition } from "react-icons/si";
import { ImList2 } from "react-icons/im";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import { Badge, Input, Layout, Menu, notification } from "antd";
import logo from "../../logo.png";
import OutletMaster from "../Master/outletMaster";
import OutletMasterForm from "../Master/outletMaster/OutletMasterForm";
import EmployeeMasterForm from "../Master/employeeMaster/EmployeeMasterForm";
import RoleMasterForm from "../Master/roleMaster/RoleMasterForm";
import EditRoleMasterForm from "../Master/editRoleMaster/EditRoleMasterForm";
import EmployeeMappingForm from "../Master/employeeMaping/EmployeeMappingForm";
import AuditCategoryForm from "../Master/auditCategory/AuditCategoryForm";
import AuditSubCategoryForm from "../Master/auditSubCategory/AuditSubCategoryForm";
import AuditPointMarksForm from "../Master/auditPointMarks/AuditPointMarksForm";
import AuditPointMarksView from "../Master/auditPointMarks/AuditPointMarksView";
import AuditPointListForm from "../Master/auditPointList/AuditPointListForm";
import EmployeeMaster from "../Master/employeeMaster";
import RoleMaster from "../Master/roleMaster";
import EditRoleMaster from "../Master/editRoleMaster";
import EmployeeMaping from "../Master/employeeMaping";
import AuditCategory from "../Master/auditCategory";
import AuditSubCategory from "../Master/auditSubCategory";
import AuditPointMarks from "../Master/auditPointMarks";
import AuditPointList from "../Master/auditPointList";
import StateMaster from "../SubMaster/stateMaster";
import ZoneMaster from "../SubMaster/zoneMaster";
import SubZoneMaster from "../SubMaster/subZoneMaster";
import CityMaster from "../SubMaster/cityMaster";
import Division from "../SubMaster/division";
import Department from "../SubMaster/department";
import Designation from "../SubMaster/designation";
import EmployeeLevel from "../SubMaster/employeeLevel";
import StateMasterForm from "../SubMaster/stateMaster/StateMasterForm";
import ZoneMasterForm from "../SubMaster/zoneMaster/ZoneMasterForm";
import SubZoneMasterForm from "../SubMaster/subZoneMaster/SubZoneMasterForm";
import CityMasterForm from "../SubMaster/cityMaster/CityMasterForm";
import DivisionForm from "../SubMaster/division/DivisionForm";
import DepartForm from "../SubMaster/department/DepartForm";
import DesignationForm from "../SubMaster/designation/DesignationForm";
import EmployeeLevelForm from "../SubMaster/employeeLevel/EmployeeLevelForm";
import TopNavMenu from "./TopNavMenu";
import Footer from "./Footer";
import AuditEntry from "../Audit/auditEntry";
import AuditView from "../Audit/auditEntry/AuditView";
import AuditApproval from "../Audit/auditApproval";
import AuditReport from "../Audit/auditReport";
import AuditRank from "../Audit/auditRank";

import Report from "../Report/Report";
import AuditCAPA from "../Audit/auditSubCAPA";
import AuditEntryForm from "../Audit/auditEntry/AuditForm";
import Approval from "../Audit/auditApproval/Approval";
import CapaView from "../Audit/auditSubCAPA/CapaView";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import apis from "../../api/stateAPI";
import {
  MdCategory,
  MdGroups,
  MdOutlineMiscellaneousServices,
  MdPriorityHigh,
  MdWork,
} from "react-icons/md";
import { BsCash } from "react-icons/bs";
import AssetGroupIssue from "../Master/AssetGroupIssue";
import AssetGroupIssueForm from "../Master/AssetGroupIssue/AssetGroupIssueForm";
import AssetGroupSpare from "../Master/AssetGroupSpare";
import AssetGroupSpareForm from "../Master/AssetGroupSpare/AssetGroupSpareForm";
import VendorMaster from "../Master/VendorMaster";
import VendorMasterForm from "../Master/VendorMaster/VendorMasterForm";
import AssetMaster from "../Master/AssertMaster";
import AssetMasterForm from "../Master/AssertMaster/AssetMasterForm";
import ServiceFor from "../SubMaster/ServiceFor";
import ServiceForForm from "../SubMaster/ServiceFor/ServiceForForm";
import AssetGroup from "../SubMaster/assetGroup";
import AssetGroupForm from "../SubMaster/assetGroup/AssetGroupForm";
import ServiceCategory from "../SubMaster/ServiceCategory";
import ServiceCategoryForm from "../SubMaster/ServiceCategory/ServiceCategoryForm";
import PriorityForm from "../SubMaster/priority/PriorityForm";
import Priority from "../SubMaster/priority";
import TypeOfService from "../SubMaster/typeOfService";
import TypeOfServiceForm from "../SubMaster/typeOfService/TypeOfServiceForm";
import WorkDone from "../SubMaster/workDone";
import WorkDoneForm from "../SubMaster/workDone/WorkDoneForm";
import ModeOfPayment from "../SubMaster/modeOfPayment";
import ModeOfPaymentForm from "../SubMaster/modeOfPayment/ModeOfPaymentForm";
import CreateTicket from "../Service/CreateTicket";
import CreateTicketForm from "../Service/CreateTicket/createTicketForm";
import ShowTicket from "../Service/CreateTicket/showTicket";
import TicketHandling from "../Service/TicketHandling";
import TicketHandlingForm from "../Service/TicketHandling/TicketHandlingForm";
import { loginCheckReducer } from "../../@app/master/authSlice";

const { Sider } = Layout;

function App() {
  const dispatch = useDispatch();
  const { type: userLog, loginStatus } = useSelector((state) => state.auth);
  const userData = useSelector((state) => state.auth.userData.data);
  const badgeCount = useSelector((state) => state.auth.badgeCount);
  const [api, contextHolder] = notification.useNotification();
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setid] = useState("");
  const [pass, setpass] = useState("");
  const [TopTitle, setTopTitle] = useState("Dashboard");

  const loginStato = localStorage.getItem("loginStatus") == "true";
  //console.log(loginStato, "loginStato");

  const screen = userData?.employee_mapping?.module_Screen ?? [];

  const main = {
    dashboard:
      userLog === 1
        ? true
        : screen.findIndex((s) => s.name === "Dashboard") > -1
        ? true
        : false,
    master:
      userLog === 1
        ? true
        : screen.findIndex((s) => s.name === "Master") > -1
        ? true
        : false,
    submaster:
      userLog === 1
        ? true
        : screen.findIndex((s) => s.name === "Sub Master") > -1
        ? true
        : false,
    audit:
      userLog === 1
        ? true
        : screen.findIndex(
            (s) =>
              s.name === "Audit" ||
              "Audit Approval" ||
              "CAPA" ||
              "Report" ||
              "Rank"
          ) > -1
        ? true
        : false,
    report:
      userLog === 1
        ? true
        : screen.findIndex(
            (s) => s.name === "report" || "Report" || "CAPA" || "Report"
          ) > -1
        ? true
        : false,
  };

  const sub = {
    entry:
      userLog === 1
        ? true
        : screen.findIndex((s) => s.name === "Audit") > -1
        ? true
        : false,
    approval:
      userLog === 1
        ? true
        : screen.findIndex((s) => s.name === "Audit Approval") > -1
        ? true
        : false,
    capa:
      userLog === 1
        ? true
        : screen.findIndex((s) => s.name === "CAPA") > -1
        ? true
        : false,
    report:
      userLog === 1
        ? true
        : screen.findIndex((s) => s.name === "Report") > -1
        ? true
        : false,
    rank:
      userLog === 1
        ? true
        : screen.findIndex((s) => s.name === "Rank") > -1
        ? true
        : false,
  };

  useEffect(() => {
    if (userLog === 2) {
      const vL = localStorage.getItem("passchange");
      if (!vL) {
        setIsModalOpen(true);
      }
    }
  }, []);

  const handleOk = () => {
    if (id === "" && pass === "") {
      api.open({
        message: "Fields are Required",
        description: "ID and Password Field Need to Fill",
        type: "error",
      });
    } else {
      apis
        .updatePass({ employee_code: id, Password: pass })
        .then(({ data }) => {
          if (data.statusText === "Password Updated.") {
            api.open({
              message: "SuccussFully",
              description: data.statusText,
              type: "success",
            });
            setIsModalOpen(false);
            localStorage.setItem("passchange", true);
          } else {
            api.open({
              message: "Try Again",
              description: "",
              type: "error",
            });
          }
        });
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    let params = {};
    const empCode = localStorage.getItem("emp_code");
    const loginStato = localStorage.getItem("loginStatus") == "true";
    let interval;
    params = { emp_date: localStorage.getItem("emp_code") };
    console.log(empCode, "empCode");
    console.log(loginStato, "loginStato");
    if (empCode && loginStato) {
      interval = setInterval(function () {
        dispatch(loginCheckReducer({ data: { params }, api }));
      }, 35000);
    } else {
      clearInterval(interval);
    }
  }, []);

  return (
    <>
      <Layout style={{ height: "100vh" }}>
        {contextHolder}
        <Sider
          trigger={null}
          width={150}
          collapsible
          collapsed={collapsed}
          style={{ transition: "0.5s" }}
          className={`${collapsed ? "d-flex" : "d-none"} `}>
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "110%", padding: "35px" }}
              className="nav-logo"></img>
          </div>
          <Menu
            mode="vertical"
            onClick={({ key }) => {
              if (key === "signout") {
                //TODO, sign out feature here
              } else {
                if (key !== "search") navigate(key);
              }
            }}
            style={{ backgroundColor: "black", color: "white" }}>
            {main.dashboard && (
              <Menu.Item key="/dashboard" className="menu side-nav">
                <div className="flex flex-col">
                  <div>
                    <RiLayoutGridFill
                      size={28}
                      color="#f5a60b"
                      className="menu-icon"
                    />
                  </div>
                  <div className="menu-title">Dashbaord</div>
                </div>
              </Menu.Item>
            )}

            {main.master && (
              <Menu.SubMenu
                className="side-nav"
                key="sub1"
                title={
                  <div>
                    <div>
                      <FaDatabase
                        size={20}
                        color="#f5a60b"
                        className="menu-icon"
                      />
                    </div>
                    <div className="menu-title">Master</div>
                  </div>
                }>
                <Menu.Item
                  key={"/outletMaster"}
                  icon={<FaStackExchange size={17} />}>
                  <span>Outlet Master </span>
                  <span className="count">
                    <Badge
                      size="default"
                      count={
                        badgeCount ? badgeCount?.Master?.["Outlet Master"] : 0
                      }
                      showZero
                      color="#3199dc"
                    />
                  </span>
                </Menu.Item>
                <Menu.Item
                  key={"/employeeMaster"}
                  icon={<FaUserAlt size={17} />}>
                  <span> Employee Master </span>
                  <span className="count">
                    <Badge
                      size="default"
                      count={
                        badgeCount
                          ? badgeCount?.["Master"]?.["Employee Master"]
                          : 0
                      }
                      showZero
                      color="#3199dc"
                    />
                  </span>
                </Menu.Item>
                <Menu.Item
                  key={"/roleMaster"}
                  icon={<FaUserTag size={17} />}
                  onClick={() => setTopTitle("Role Master")}>
                  <span>Role Master </span>
                  <span className="count">
                    <Badge
                      size="default"
                      count={
                        badgeCount ? badgeCount?.["Master"]?.["Role Master"] : 0
                      }
                      showZero
                      color="#3199dc"
                    />
                  </span>
                </Menu.Item>
                <Menu.Item
                  key={"/editRoleMaster"}
                  icon={<FaUserEdit size={17} />}>
                  <span>Edit Role Master </span>
                  <span className="count">
                    <Badge
                      size="default"
                      count={
                        badgeCount
                          ? badgeCount?.["Master"]?.["Edit Role Master"]
                          : 0
                      }
                      showZero
                      color="#3199dc"
                    />
                  </span>
                </Menu.Item>
                <Menu.Item
                  key={"/employeeMapping"}
                  icon={<FaStreetView size={17} />}>
                  <span>Employee Mapping </span>
                  <span className="count">
                    <Badge
                      size="default"
                      count={
                        badgeCount
                          ? badgeCount?.["Master"]?.["Employee Mapping"]
                          : 0
                      }
                      showZero
                      color="#3199dc"
                    />
                  </span>
                </Menu.Item>
                <Menu.Item
                  key={"/auditCategory"}
                  icon={<SiAdobeaudition size={17} />}>
                  <span>Audit Category </span>
                  <span className="count">
                    <Badge
                      size="default"
                      count={
                        badgeCount
                          ? badgeCount?.["Master"]?.["Audit Category"]
                          : 0
                      }
                      showZero
                      color="#3199dc"
                    />
                  </span>
                </Menu.Item>
                <Menu.Item
                  key={"/auditSubCategory"}
                  icon={<FaBook size={17} />}>
                  <span>Audit Sub Category </span>
                  <span className="count">
                    <Badge
                      size="default"
                      count={
                        badgeCount
                          ? badgeCount?.["Master"]?.["Audit Sub Category"]
                          : 0
                      }
                      showZero
                      color="#3199dc"
                    />
                  </span>
                </Menu.Item>
                <Menu.Item key={"/auditPointList"} icon={<ImList2 size={17} />}>
                  <span>Audit point list </span>
                  <span className="count">
                    <Badge
                      size="default"
                      count={
                        badgeCount
                          ? badgeCount?.["Master"]?.["Audit Point list"]
                          : 0
                      }
                      showZero
                      color="#3199dc"
                    />
                  </span>
                </Menu.Item>
                <Menu.Item
                  key={"/auditPointMarks"}
                  icon={<FaCalculator size={17} />}>
                  <span>Audit point Marks </span>
                  <span className="count">
                    <Badge
                      size="default"
                      count={
                        badgeCount
                          ? badgeCount?.["Master"]?.["Audit Point Marks"]
                          : 0
                      }
                      showZero
                      color="#3199dc"
                    />
                  </span>
                </Menu.Item>
                {/* <Menu.Item key={'/AssetGroupIssue'} icon={<MdGroups size={17} />} onClick={() => setTopTitle('Asset Group Issue')}>
                  <span>Asset Group Issue</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/AssetGroupSpare'} icon={<MdOutlineMiscellaneousServices size={17} />} onClick={() => setTopTitle('Asset Group Spare')}>
                  <span>Asset Group Spare</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/VendorMaster'} icon={<MdWork size={17} />} onClick={() => setTopTitle('Vendor Master')}>
                  <span>Vendor Master</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/AssetMaster'} icon={<FaServicestack size={17} />} onClick={() => setTopTitle('Asset Master')}>
                  <span>Asset Master</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item> */}
              </Menu.SubMenu>
            )}

            {main.submaster && (
              <Menu.SubMenu
                className="side-nav"
                key="sub2"
                title={
                  <div>
                    <div>
                      <FaDatabase
                        size={20}
                        color="#f5a60b"
                        className="menu-icon"
                      />
                    </div>
                    <div className="menu-title">Sub Master</div>
                  </div>
                }>
                <Menu.Item
                  key={"/stateMaster"}
                  icon={<FaStreetView size={17} />}>
                  <span>State Master</span>
                  <span className="count">
                    <Badge
                      size="default"
                      count={
                        badgeCount
                          ? badgeCount?.["Sub Master"]?.["State Master"]
                          : 0
                      }
                      showZero
                      color="#3199dc"
                    />
                  </span>
                </Menu.Item>
                <Menu.Item
                  key={"/zoneMaster"}
                  icon={<FaLocationArrow size={17} />}>
                  <span>Zone Master</span>
                  <span className="count">
                    <Badge
                      size="default"
                      count={
                        badgeCount
                          ? badgeCount?.["Sub Master"]?.["Zone Master"]
                          : 0
                      }
                      showZero
                      color="#3199dc"
                    />
                  </span>
                </Menu.Item>
                <Menu.Item key={"/subZoneMaster"} icon={<FaMap size={17} />}>
                  <span>Sub Zone Master</span>
                  <span className="count">
                    <Badge
                      size="default"
                      count={
                        badgeCount
                          ? badgeCount?.["Sub Master"]?.["Sub Zone Master"]
                          : 0
                      }
                      showZero
                      color="#3199dc"
                    />
                  </span>
                </Menu.Item>
                <Menu.Item key={"/cityMaster"} icon={<FaGlobe size={17} />}>
                  <span>City Master</span>
                  <span className="count">
                    <Badge
                      size="default"
                      count={
                        badgeCount
                          ? badgeCount?.["Sub Master"]?.["City Master"]
                          : 0
                      }
                      showZero
                      color="#3199dc"
                    />
                  </span>
                </Menu.Item>
                <Menu.Item
                  key={"/division"}
                  icon={<FaSortAmountDown size={17} />}>
                  <span>Division</span>
                  <span className="count">
                    <Badge
                      size="default"
                      count={
                        badgeCount
                          ? badgeCount?.["Sub Master"]?.["Division"]
                          : 0
                      }
                      showZero
                      color="#3199dc"
                    />
                  </span>
                </Menu.Item>
                <Menu.Item key={"/department"} icon={<FaBuilding size={17} />}>
                  <span>Department</span>
                  <span className="count">
                    <Badge
                      size="default"
                      count={
                        badgeCount
                          ? badgeCount?.["Sub Master"]?.["Department"]
                          : 0
                      }
                      showZero
                      color="#3199dc"
                    />
                  </span>
                </Menu.Item>
                <Menu.Item
                  key={"/designation"}
                  icon={<FaBriefcase size={17} />}
                  onClick={() => setTopTitle("Designation")}>
                  <span>Designation</span>
                  <span className="count">
                    <Badge
                      size="default"
                      count={
                        badgeCount
                          ? badgeCount?.["Sub Master"]?.["Designation"]
                          : 0
                      }
                      showZero
                      color="#3199dc"
                    />
                  </span>
                </Menu.Item>
                <Menu.Item
                  key={"/employeeLevel"}
                  icon={<FaUserAlt size={17} />}>
                  <span>Employee Level</span>
                  <span className="count">
                    <Badge
                      size="default"
                      count={
                        badgeCount
                          ? badgeCount?.["Sub Master"]?.["Employee Level"]
                          : 0
                      }
                      showZero
                      color="#3199dc"
                    />
                  </span>
                </Menu.Item>
                {/* <Menu.Item key={'/serviceFor'} icon={<MdOutlineMiscellaneousServices size={17} />} onClick={() => setTopTitle('Service For')}>
                  <span>Service For</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/assetGroup'} icon={<MdGroups size={17} />} onClick={() => setTopTitle('Asset Group')}>
                  <span>Asset Group</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/serviceCategory'} icon={<MdCategory size={17} />} onClick={() => setTopTitle('Service Category')}>
                  <span>Service Category</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/priority'} icon={<MdPriorityHigh size={17} />} onClick={() => setTopTitle('Priority')}>
                  <span>Priority</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/typeOfService'} icon={<FaServicestack size={17} />} onClick={() => setTopTitle('Type Of Service')}>
                  <span>Type Of Service</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/workDone'} icon={<MdWork size={17} />} onClick={() => setTopTitle('Work Done')}>
                  <span>Work Done</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/modeOfPayment'} icon={<BsCash size={17} />} onClick={() => setTopTitle('Mode Of Payment')}>
                  <span>Mode Of Payment</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item> */}
              </Menu.SubMenu>
            )}

            {main.audit && (
              <Menu.SubMenu
                className="side-nav"
                key="sub3"
                title={
                  <div>
                    <div>
                      <FaDatabase
                        size={20}
                        color="#f5a60b"
                        className="menu-icon"
                      />
                    </div>
                    <div className="menu-title">Audit</div>
                  </div>
                }>
                {sub.entry && (
                  <Menu.Item
                    key={"/auditEntry"}
                    icon={<FaStreetView size={17} />}>
                    <span>Entry</span>
                    <span className="count">
                      <Badge
                        size="default"
                        count={
                          badgeCount ? badgeCount?.["Audit"]?.["Entry"] : 0
                        }
                        showZero
                        color="#3199dc"
                      />
                    </span>
                  </Menu.Item>
                )}

                {sub.approval && (
                  <Menu.Item
                    key={"/auditApproval"}
                    icon={<FaUserAlt size={17} />}>
                    <span>Approval</span>
                    <span className="count">
                      <Badge
                        size="default"
                        count={
                          badgeCount ? badgeCount?.["Audit"]?.["Approval"] : 0
                        }
                        showZero
                        color="#3199dc"
                      />
                    </span>
                  </Menu.Item>
                )}

                {sub.capa && (
                  <Menu.Item
                    key={"/capa"}
                    icon={<FaMapMarkedAlt size={17} />}
                    onClick={() => setTopTitle("CAPA")}>
                    <span>CAPA</span>
                    <span className="count">
                      <Badge
                        size="default"
                        count={badgeCount ? badgeCount?.["Audit"]?.["CAPA"] : 0}
                        showZero
                        color="#3199dc"
                      />
                    </span>
                  </Menu.Item>
                )}

                {sub.report && (
                  <Menu.Item key={"/report"} icon={<FaGlobe size={17} />}>
                    <span>Report</span>
                    <span className="count">
                      <Badge
                        size="default"
                        count={
                          badgeCount ? badgeCount?.["Audit"]?.["Report"] : 0
                        }
                        showZero
                        color="#3199dc"
                      />
                    </span>
                  </Menu.Item>
                )}

                {sub.rank && (
                  <Menu.Item key={"/rank"} icon={<FaGlobe size={17} />}>
                    <span>Rank</span>
                    <span className="count">
                      <Badge
                        size="default"
                        count={badgeCount ? badgeCount?.["Audit"]?.["Rank"] : 0}
                        showZero
                        color="#3199dc"
                      />
                    </span>
                  </Menu.Item>
                )}
              </Menu.SubMenu>
            )}
            {main.master && main.report && (
              <Menu.SubMenu
                className="side-nav"
                key="sub4"
                title={
                  <div>
                    <div>
                      <FaDatabase
                        size={20}
                        color="#f5a60b"
                        className="menu-icon"
                      />
                    </div>
                    <div className="menu-title">Report</div>
                  </div>
                }>
                {sub.report && (
                  <Menu.Item key={"/user-report"} icon={<FaGlobe size={17} />}>
                    <span>User Access</span>
                    <span className="count">
                      <Badge
                        size="default"
                        count={
                          badgeCount ? badgeCount?.["Audit"]?.["Report"] : 0
                        }
                        showZero
                        color="#3199dc"
                      />
                    </span>
                  </Menu.Item>
                )}
              </Menu.SubMenu>
            )}
            {/* <Menu.SubMenu
              className='side-nav'
              key='sub4'
              title={
                <div>
                  <div>
                    <FaDatabase size={20} color='#f5a60b' className='menu-icon' />
                  </div>
                  <div className='menu-title'>Service</div>
                </div>
              }>
              <Menu.Item key={'/createTicket'} icon={<BsCash size={17} />} onClick={() => setTopTitle('Create Ticket')}>
                <span>Create Ticket</span>
                <span className='count'>
                  <Badge size='default' count={11} showZero color='#3199dc' />
                </span>
              </Menu.Item>
              <Menu.Item key={'/handleTicket'} icon={<BsCash size={17} />} onClick={() => setTopTitle('Ticket Handling')}>
                <span>Ticket Handling</span>
                <span className='count'>
                  <Badge size='default' count={11} showZero color='#3199dc' />
                </span>
              </Menu.Item>
            </Menu.SubMenu> */}
          </Menu>
        </Sider>

        <Layout style={{ height: "100vh" }}>
          <TopNavMenu {...{ collapsed, setCollapsed, TopTitle }} />
          <Content main={main} sub={sub} {...{ setTopTitle }} />
          <Footer />
        </Layout>
        <Modal
          title="Update Your Password to Continue"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}>
          <p>Enter your ID</p>
          <Input onChange={(e) => setid(e.target.value)} />
          <p>Enter your Password</p>
          <Input type="password" onChange={(e) => setpass(e.target.value)} />
        </Modal>
      </Layout>
    </>
  );
}

function Content(props) {
  const { main, sub, setTopTitle } = props;
  const [api] = notification.useNotification();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const loginStato = localStorage.getItem("loginStatus") == "true";
    if (!loginStato) {
      navigate(`/login`);
      return;
    }
  });

  // useEffect(() => {
  //   let params = {};
  //   const empCode = localStorage.getItem("emp_code");
  //   let interval;
  //   params = { emp_date: localStorage.getItem("emp_code") };
  //   if (empCode != "undefined")
  //     interval = setTimeout(function () {
  //       dispatch(loginCheckReducer({ data: { params }, api }));
  //     }, 10000);
  // }, []);
  return (
    <div
      style={{ height: "100vh", backgroundColor: "#F4F5F7", overflow: "auto" }}>
      <Routes>
        <Route path="/dashboard" element={<div>Dashbaord</div>}></Route>
        <Route
          path="/activeUsers"
          element={<div>Active Users List</div>}></Route>
        <Route
          path="/disabledUsers"
          element={<div>Disabled Users List</div>}></Route>
        <Route path="/profile" element={<div>Profile</div>}></Route>

        {main.master && (
          <>
            <Route
              path="/outletMaster"
              element={<OutletMaster {...{ setTopTitle }} />}></Route>
            <Route
              path="/employeeMaster"
              element={<EmployeeMaster {...{ setTopTitle }} />}></Route>
            <Route
              path="/roleMaster"
              element={<RoleMaster {...{ setTopTitle }} />}></Route>
            <Route
              path="/editRoleMaster"
              element={<EditRoleMaster {...{ setTopTitle }} />}></Route>
            <Route
              path="/employeeMapping"
              element={<EmployeeMaping {...{ setTopTitle }} />}></Route>
            <Route
              path="/auditCategory"
              element={<AuditCategory {...{ setTopTitle }} />}></Route>
            <Route
              path="/auditSubCategory"
              element={<AuditSubCategory {...{ setTopTitle }} />}></Route>
            <Route
              path="/auditPointList"
              element={<AuditPointList {...{ setTopTitle }} />}></Route>
            <Route
              path="/auditPointMarks"
              element={<AuditPointMarks {...{ setTopTitle }} />}></Route>

            <Route
              path="/outletMaster/addForm"
              element={<OutletMasterForm {...{ setTopTitle }} />}></Route>
            <Route
              path="/employeeMaster/addForm"
              element={<EmployeeMasterForm {...{ setTopTitle }} />}></Route>
            <Route
              path="/roleMaster/addForm"
              element={<RoleMasterForm {...{ setTopTitle }} />}></Route>
            <Route
              path="/editRoleMaster/addForm"
              element={<EditRoleMasterForm {...{ setTopTitle }} />}></Route>
            <Route
              path="/employeeMapping/addForm"
              element={<EmployeeMappingForm {...{ setTopTitle }} />}></Route>
            <Route
              path="/auditCategory/addForm"
              element={<AuditCategoryForm {...{ setTopTitle }} />}></Route>
            <Route
              path="/auditSubCategory/addForm"
              element={<AuditSubCategoryForm {...{ setTopTitle }} />}></Route>
            <Route
              path="/auditPointMarks/addForm"
              element={<AuditPointMarksForm {...{ setTopTitle }} />}></Route>
            <Route
              path="/auditPointMarks/view"
              element={<AuditPointMarksView {...{ setTopTitle }} />}></Route>
            <Route
              path="/auditPointList/addForm"
              element={<AuditPointListForm {...{ setTopTitle }} />}></Route>
            <Route
              path="/AssetGroupIssue"
              element={<AssetGroupIssue />}></Route>
            <Route
              path="/AssetGroupIssue/addForm"
              element={<AssetGroupIssueForm />}></Route>
            <Route
              path="/AssetGroupSpare"
              element={<AssetGroupSpare />}></Route>
            <Route
              path="/AssetGroupSpare/addForm"
              element={<AssetGroupSpareForm />}></Route>
            <Route path="/VendorMaster" element={<VendorMaster />}></Route>
            <Route
              path="/VendorMaster/addForm"
              element={<VendorMasterForm />}></Route>
            <Route path="/AssetMaster" element={<AssetMaster />}></Route>
            <Route
              path="/AssetMaster/addForm"
              element={<AssetMasterForm />}></Route>
          </>
        )}

        {main.submaster && (
          <>
            <Route
              path="/stateMaster"
              element={<StateMaster {...{ setTopTitle }} />}></Route>
            <Route
              path="/zoneMaster"
              element={<ZoneMaster {...{ setTopTitle }} />}></Route>
            <Route
              path="/subZoneMaster"
              element={<SubZoneMaster {...{ setTopTitle }} />}></Route>
            <Route
              path="/cityMaster"
              element={<CityMaster {...{ setTopTitle }} />}></Route>
            <Route
              path="/division"
              element={<Division {...{ setTopTitle }} />}></Route>
            <Route
              path="/department"
              element={<Department {...{ setTopTitle }} />}></Route>
            <Route
              path="/Designation"
              element={<Designation {...{ setTopTitle }} />}></Route>
            <Route
              path="/employeeLevel"
              element={<EmployeeLevel {...{ setTopTitle }} />}></Route>

            <Route
              path="/stateMaster/addForm"
              element={<StateMasterForm {...{ setTopTitle }} />}></Route>
            <Route
              path="/zoneMaster/addForm"
              element={<ZoneMasterForm {...{ setTopTitle }} />}></Route>
            <Route
              path="/subZoneMaster/addForm"
              element={<SubZoneMasterForm {...{ setTopTitle }} />}></Route>
            <Route
              path="/cityMaster/addForm"
              element={<CityMasterForm {...{ setTopTitle }} />}></Route>
            <Route
              path="/division/addForm"
              element={<DivisionForm {...{ setTopTitle }} />}></Route>
            <Route
              path="/department/addForm"
              element={<DepartForm {...{ setTopTitle }} />}></Route>
            <Route
              path="/Designation/addForm"
              element={<DesignationForm {...{ setTopTitle }} />}></Route>
            <Route
              path="/employeeLevel/addForm"
              element={<EmployeeLevelForm {...{ setTopTitle }} />}></Route>

            <Route path="/serviceFor" element={<ServiceFor />}></Route>
            <Route
              path="/serviceFor/addForm"
              element={<ServiceForForm />}></Route>
            <Route path="/assetGroup" element={<AssetGroup />}></Route>
            <Route
              path="/assetGroup/addForm"
              element={<AssetGroupForm />}></Route>
            <Route
              path="/servicecategory"
              element={<ServiceCategory />}></Route>
            <Route
              path="/servicecategory/addForm"
              element={<ServiceCategoryForm />}></Route>
            <Route path="/priority" element={<Priority />}></Route>
            <Route path="/priority/addForm" element={<PriorityForm />}></Route>
            <Route path="/typeOfService" element={<TypeOfService />}></Route>
            <Route
              path="/typeOfService/addForm"
              element={<TypeOfServiceForm />}></Route>
            <Route path="/workDone" element={<WorkDone />}></Route>
            <Route path="/workDone/addForm" element={<WorkDoneForm />}></Route>
            <Route path="/ModeOfPayment" element={<ModeOfPayment />}></Route>
            <Route
              path="/ModeOfPayment/addForm"
              element={<ModeOfPaymentForm />}></Route>
          </>
        )}

        {main.audit && (
          <>
            <Route path="/audit" element={<div>Profile</div>}></Route>
            <Route
              path="/auditEntry"
              element={<AuditEntry {...{ setTopTitle }} />}></Route>
            <Route
              path="/auditEntry/addForm"
              element={
                <AuditEntryForm mode="add" {...{ setTopTitle }} />
              }></Route>
            <Route
              path="/auditEntry/editForm"
              element={
                <AuditEntryForm mode="edit" {...{ setTopTitle }} />
              }></Route>
            <Route
              path="/auditEntry/auditView"
              element={<AuditView {...{ setTopTitle }} />}></Route>{" "}
          </>
        )}

        {main.audit && sub.approval && (
          <>
            <Route
              path="/auditApproval"
              element={<AuditApproval {...{ setTopTitle }} />}></Route>
            <Route
              path="/approvalView"
              element={<Approval {...{ setTopTitle }} />}></Route>{" "}
          </>
        )}

        {main.audit && sub.capa && (
          <>
            <Route
              path="/capa"
              element={<AuditCAPA {...{ setTopTitle }} />}></Route>
            <Route
              path="/capaView"
              element={<CapaView {...{ setTopTitle }} />}></Route>
          </>
        )}

        {main.audit && sub.capa && (
          <>
            <Route
              path="/report"
              element={<AuditReport {...{ setTopTitle }} />}></Route>
          </>
        )}
        {main.audit && sub.rank && (
          <>
            <Route
              path="/rank"
              element={<AuditRank {...{ setTopTitle }} />}></Route>
          </>
        )}
        {main.report && sub.report && (
          <>
            <Route
              path="/user-report"
              element={<Report {...{ setTopTitle }} />}></Route>
          </>
        )}

        <Route path="/createTicket" element={<CreateTicket />}></Route>
        <Route
          path="/createTicket/addForm"
          element={<CreateTicketForm />}></Route>
        <Route path="/createTicket/showForm" element={<ShowTicket />}></Route>
        <Route path="/handleTicket" element={<TicketHandling />}></Route>
        <Route path="/ticketForm" element={<TicketHandlingForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
