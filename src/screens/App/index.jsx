/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {isEmpty} from 'ramda';
import './styles.css';
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
  FaUserTag
} from 'react-icons/fa';
import {RiLayoutGridFill} from 'react-icons/ri';
import {SiAdobeaudition} from 'react-icons/si';
import {ImList2} from 'react-icons/im';
import {Route, Routes, useNavigate} from 'react-router-dom';

import {Badge, Input, Layout, Menu, notification} from 'antd';
import logo from '../../logo.png';
import OutletMaster from '../Master/outletMaster';
import OutletMasterForm from '../Master/outletMaster/OutletMasterForm';
import EmployeeMasterForm from '../Master/employeeMaster/EmployeeMasterForm';
import RoleMasterForm from '../Master/roleMaster/RoleMasterForm';
import EditRoleMasterForm from '../Master/editRoleMaster/EditRoleMasterForm';
import EmployeeMappingForm from '../Master/employeeMaping/EmployeeMappingForm';
import AuditCategoryForm from '../Master/auditCategory/AuditCategoryForm';
import AuditSubCategoryForm from '../Master/auditSubCategory/AuditSubCategoryForm';
import AuditPointMarksForm from '../Master/auditPointMarks/AuditPointMarksForm';
import AuditPointMarksView from '../Master/auditPointMarks/AuditPointMarksView';
import AuditPointListForm from '../Master/auditPointList/AuditPointListForm';
import EmployeeMaster from '../Master/employeeMaster';
import RoleMaster from '../Master/roleMaster';
import EditRoleMaster from '../Master/editRoleMaster';
import EmployeeMaping from '../Master/employeeMaping';
import AuditCategory from '../Master/auditCategory';
import AuditSubCategory from '../Master/auditSubCategory';
import AuditPointMarks from '../Master/auditPointMarks';
import AuditPointList from '../Master/auditPointList';
import StateMaster from '../SubMaster/stateMaster';
import ZoneMaster from '../SubMaster/zoneMaster';
import SubZoneMaster from '../SubMaster/subZoneMaster';
import CityMaster from '../SubMaster/cityMaster';
import Division from '../SubMaster/division';
import Department from '../SubMaster/department';
import Designation from '../SubMaster/designation';
import Glaccount from '../SubMaster/Glaccount';
import GlaccountForm from '../SubMaster/Glaccount/GlaccountForm';
import EmployeeLevel from '../SubMaster/employeeLevel';
import StateMasterForm from '../SubMaster/stateMaster/StateMasterForm';
import ZoneMasterForm from '../SubMaster/zoneMaster/ZoneMasterForm';
import SubZoneMasterForm from '../SubMaster/subZoneMaster/SubZoneMasterForm';
import CityMasterForm from '../SubMaster/cityMaster/CityMasterForm';
import DivisionForm from '../SubMaster/division/DivisionForm';
import DepartForm from '../SubMaster/department/DepartForm';
import DesignationForm from '../SubMaster/designation/DesignationForm';
import EmployeeLevelForm from '../SubMaster/employeeLevel/EmployeeLevelForm';
import TopNavMenu from './TopNavMenu';
import Footer from './Footer';
import AuditEntry from '../Audit/auditEntry';
import AuditView from '../Audit/auditEntry/AuditView';
import AuditApproval from '../Audit/auditApproval';
import AuditReport from '../Audit/auditReport';
import AuditCAPA from '../Audit/auditSubCAPA';
import AuditEntryForm from '../Audit/auditEntry/AuditForm';
import Approval from '../Audit/auditApproval/Approval';
import CapaView from '../Audit/auditSubCAPA/CapaView';
import {Modal} from 'antd';
import {useSelector} from 'react-redux';
import apis from '../../api/stateAPI';
import {MdCategory,MdOutlineDynamicForm, MdGroups, MdOutlineMiscellaneousServices, MdPriorityHigh, MdWork, MdOutlinePayment} from 'react-icons/md';
import {BsCash, BsCashCoin} from 'react-icons/bs';
import AssetGroupIssue from '../Master/AssetGroupIssue';
import AssetGroupIssueForm from '../Master/AssetGroupIssue/AssetGroupIssueForm';
import AssetGroupSpare from '../Master/AssetGroupSpare';
import AssetGroupSpareForm from '../Master/AssetGroupSpare/AssetGroupSpareForm';
import VendorMaster from '../Master/VendorMaster';
import VendorMasterForm from '../Master/VendorMaster/VendorMasterForm';
import AssetMaster from '../Master/AssertMaster';
import AssetMasterForm from '../Master/AssertMaster/AssetMasterForm';
import ServiceFor from '../SubMaster/ServiceFor';
import ServiceForForm from '../SubMaster/ServiceFor/ServiceForForm';
import AssetGroup from '../SubMaster/assetGroup';
import AssetGroupForm from '../SubMaster/assetGroup/AssetGroupForm';
import ServiceCategory from '../SubMaster/ServiceCategory';
import ServiceCategoryForm from '../SubMaster/ServiceCategory/ServiceCategoryForm';
import PriorityForm from '../SubMaster/priority/PriorityForm';
import Priority from '../SubMaster/priority';
import TypeOfService from '../SubMaster/typeOfService';
import TypeOfServiceForm from '../SubMaster/typeOfService/TypeOfServiceForm';
import WorkDone from '../SubMaster/workDone';
import WorkDoneForm from '../SubMaster/workDone/WorkDoneForm';
import ModeOfPayment from '../SubMaster/modeOfPayment';
import ModeOfPaymentForm from '../SubMaster/modeOfPayment/ModeOfPaymentForm';
import CreateTicket from '../Service/CreateTicket';
import CreateTicketForm from '../Service/CreateTicket/createTicketForm';
import ShowTicket from '../Service/CreateTicket/showTicket';
import ShowTicket1 from '../Service/CreateTicket/showTicket1';
import TicketHandling from '../Service/TicketHandling';
import TicketHandlingForm from '../Service/TicketHandling/TicketHandlingForm';
import Formticket1 from '../Service/TicketHandling/Formticket1';
import Formticket2 from '../Service/TicketHandling/Formticket2';
import Formticket3 from '../Service/TicketHandling/Formticket3';
import Formticket4 from '../Service/TicketHandling/Formticket4';
import Pcadvancereqms from '../Service/Pcadvancereqms';
import PcadvancereqmsForm from '../Service/Pcadvancereqms/PcadvancereqmsForm';
import Poprocess from '../Service/Poprocess';
import PoprocessForm from '../Service/Poprocess/PoprocessForm';
import Pcaclaimsubmissionms from '../Service/Pcaclaimsubmissionms';
import Pcclaimreqorl from '../Service/Pcclaimreqorl';
import PcclaimreqorlForm from '../Service/Pcclaimreqorl/PcclaimreqorlForm';
import Poprocessappoh from '../Service/Poprocessappoh';
import PoprocessappohForm from '../Service/Poprocessappoh/PoprocessForm';
import Poprocessappah from '../Service/Poprocessappah';
import PoprocessappahForm from '../Service/Poprocessappah/PoprocessForm';
import Orlpcclaimapparm from '../Service/Orlpcclaimapparm';
import OrlpcclaimapparmForm from '../Service/Orlpcclaimapparm/PoprocessForm';
import Orlpcclaimappbo from '../Service/Orlpcclaimappbo';
import OrlpcclaimappboForm from '../Service/Orlpcclaimappbo/PoprocessForm';
import Orlpcclaimappah from '../Service/Orlpcclaimappah';
import OrlpcclaimappahForm from '../Service/Orlpcclaimappah/PoprocessForm';
import Orlpcclaimappbh from '../Service/Orlpcclaimappbh';
import OrlpcclaimappbhForm from '../Service/Orlpcclaimappbh/PoprocessForm';
import Mspcclaimappoh from '../Service/Mspcclaimappoh';
import MspcclaimappohForm from '../Service/Mspcclaimappoh/PoprocessForm';
import Mspcclaimappah from '../Service/Mspcclaimappah';
import MspcclaimappahForm from '../Service/Mspcclaimappah/PoprocessForm';
import Mspcadvanceappoh from '../Service/Mspcadvanceappoh';
import MspcadvanceappohForm from '../Service/Mspcadvanceappoh/PoprocessForm';
import Mspcadvanceappah from '../Service/Mspcadvanceappah';
import MspcadvanceappahForm from '../Service/Mspcadvanceappah/PoprocessForm';
import Mspcadvanceappbh from '../Service/Mspcadvanceappbh';
import MspcadvanceappbhForm from '../Service/Mspcadvanceappbh/PoprocessForm';
import Ticketstatusreportorl from '../Service/Ticketstatusreportorl';
import TicketstatusreportorlForm from '../Service/Ticketstatusreportorl/PoprocessForm';
import Pccliamorlreport from '../Service/Pccliamorlreport';
import PccliamorlreportForm from '../Service/Pccliamorlreport/PoprocessForm';
import Fisubmit from '../Service/fisubmit';
import Paymentclick from '../Service/paymentclick';
import Pclcimapprovalah from '../Service/pclcimapprovalah';
import Claimsubmission from '../Service/claimsubmission';
import Mspcrequestreport from '../Service/Mspcrequestreport';
import NewAssetMaster from '../Master/newAssetMaster';
import NewAssetMasterForm from '../Master/newAssetMaster/NewAssetMasterForm';

const {Sider} = Layout;

function App() {
  const {type: userLog, loginStatus} = useSelector((state) => state.auth);
  const userData = useSelector((state) => state.auth.userData.data);
  const badgeCount = useSelector((state) => state.auth.badgeCount);
  const [api, contextHolder] = notification.useNotification();
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setid] = useState('');
  const [pass, setpass] = useState('');
  const [TopTitle, setTopTitle] = useState('Dashboard');

  const screen = userData?.employee_mapping?.module_Screen ?? [];

  const main = {
    dashboard: userLog === 1 ? true : screen.findIndex((s) => s.name === 'Dashboard') > -1 ? true : false,
    master: userLog === 1 ? true : screen.findIndex((s) => s.name === 'Master') > -1 ? true : false,
    submaster: userLog === 1 ? true : screen.findIndex((s) => s.name === 'Sub Master') > -1 ? true : false,
    audit: userLog === 1 ? true : screen.findIndex((s) => s.name === 'Audit' || 'Audit Approval' || 'CAPA' || 'Report') > -1 ? true : false
  };

  const sub = {
    entry: userLog === 1 ? true : screen.findIndex((s) => s.name === 'Audit') > -1 ? true : false,
    approval: userLog === 1 ? true : screen.findIndex((s) => s.name === 'Audit Approval') > -1 ? true : false,
    capa: userLog === 1 ? true : screen.findIndex((s) => s.name === 'CAPA') > -1 ? true : false,
    report: userLog === 1 ? true : screen.findIndex((s) => s.name === 'Report') > -1 ? true : false
  };

  useEffect(() => {
    if (userLog === 2) {
      const vL = localStorage.getItem('passchange');
      if (!vL) {
        setIsModalOpen(true);
      }
    }
  }, []);

  const handleOk = () => {
    if (id === '' && pass === '') {
      api.open({
        message: 'Fields are Required',
        description: 'ID and Password Field Need to Fill',
        type: 'error'
      });
    } else {
      apis.updatePass({employee_code: id, Password: pass}).then(({data}) => {
        if (data.statusText === 'Password Updated.') {
          api.open({
            message: 'SuccussFully',
            description: data.statusText,
            type: 'success'
          });
          setIsModalOpen(false);
          localStorage.setItem('passchange', true);
        } else {
          api.open({
            message: 'Try Again',
            description: '',
            type: 'error'
          });
        }
      });
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Layout style={{height: '100vh'}}>
        {contextHolder}
        <Sider trigger={null} width={150} collapsible collapsed={collapsed} style={{transition: '0.5s'}} className={`${collapsed ? 'd-flex' : 'd-none'} `}>
          <div style={{textAlign: 'center', marginTop: '10px'}}>
            <img src={logo} alt='logo' style={{width: '110%', padding: '35px'}} className='nav-logo'></img>
          </div>
          <Menu
            mode='vertical'
            onClick={({key}) => {
              if (key === 'signout') {
                //TODO, sign out feature here
              } else {
                if (key !== 'search') navigate(key);
              }
            }}
            style={{backgroundColor: 'black', color: 'white'}}>
            {main.dashboard && (
              <Menu.Item key='/dashboard' className='menu side-nav'>
                <div className='flex flex-col'>
                  <div>
                    <RiLayoutGridFill size={28} color='#f5a60b' className='menu-icon' />
                  </div>
                  <div className='menu-title'>Dashbaord</div>
                </div>
              </Menu.Item>
            )}

            {main.master && (
              <Menu.SubMenu
                className='side-nav maintext'
                key='sub1'
                title={
                  <div>
                    <div>
                      <FaDatabase size={20} color='#f5a60b' className='menu-icon' />
                    </div>
                    <div className='menu-title'>Master</div>
                  </div>
                }>
                <Menu.Item key={'/outletMaster'} icon={<FaStackExchange size={17} />}>
                  <span>Outlet Master </span>
                  <span className='count'>
                    <Badge size='default' count={badgeCount ? badgeCount?.Master?.['Outlet Master'] : 0} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/employeeMaster'} icon={<FaUserAlt size={17} />}>
                  <span> Employee Master </span>
                  <span className='count'>
                    <Badge size='default' count={badgeCount ? badgeCount?.['Master']?.['Employee Master'] : 0} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/roleMaster'} icon={<FaUserTag size={17} />} onClick={() => setTopTitle('Role Master')}>
                  <span>Role Master </span>
                  <span className='count'>
                    <Badge size='default' count={badgeCount ? badgeCount?.['Master']?.['Role Master'] : 0} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/editRoleMaster'} icon={<FaUserEdit size={17} />}>
                  <span>Edit Role Master </span>
                  <span className='count'>
                    <Badge size='default' count={badgeCount ? badgeCount?.['Master']?.['Edit Role Master'] : 0} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/employeeMapping'} icon={<FaStreetView size={17} />}>
                  <span>Employee Mapping </span>
                  <span className='count'>
                    <Badge size='default' count={badgeCount ? badgeCount?.['Master']?.['Employee Mapping'] : 0} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/auditCategory'} icon={<SiAdobeaudition size={17} />}>
                  <span>Audit Category </span>
                  <span className='count'>
                    <Badge size='default' count={badgeCount ? badgeCount?.['Master']?.['Audit Category'] : 0} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/auditSubCategory'} icon={<FaBook size={17} />}>
                  <span>Audit Sub Category </span>
                  <span className='count'>
                    <Badge size='default' count={badgeCount ? badgeCount?.['Master']?.['Audit Sub Category'] : 0} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/auditPointList'} icon={<ImList2 size={17} />}>
                  <span>Audit point list </span>
                  <span className='count'>
                    <Badge size='default' count={badgeCount ? badgeCount?.['Master']?.['Audit Point list'] : 0} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/auditPointMarks'} icon={<FaCalculator size={17} />}>
                  <span>Audit point Marks </span>
                  <span className='count'>
                    <Badge size='default' count={badgeCount ? badgeCount?.['Master']?.['Audit Point Marks'] : 0} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/AssetGroupIssue'} icon={<MdGroups size={17} />} onClick={() => setTopTitle('Asset Group Issue')}>
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
                <Menu.Item key={'/outletAssetGroupMapping'} icon={<FaServicestack size={17} />} onClick={() => setTopTitle('Outlet Asset Group Mapping')}>
                  <span>Outlet-Asset Group Mapping</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/assetMaster'} icon={<FaServicestack size={17} />} onClick={() => setTopTitle('Asset Master')}>
                  <span>Asset Master</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
              </Menu.SubMenu>
            )}

            {main.submaster && (
              <Menu.SubMenu
                className='side-nav maintext'
                key='sub2'
                title={
                  <div>
                    <div>
                      <FaDatabase size={20} color='#f5a60b' className='menu-icon' />
                    </div>
                    <div className='menu-title'>Sub Master</div>
                  </div>
                }>
                <Menu.Item key={'/stateMaster'} icon={<FaStreetView size={17} />}>
                  <span>State Master</span>
                  <span className='count'>
                    <Badge size='default' count={badgeCount ? badgeCount?.['Sub Master']?.['State Master'] : 0} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/zoneMaster'} icon={<FaLocationArrow size={17} />}>
                  <span>Zone Master</span>
                  <span className='count'>
                    <Badge size='default' count={badgeCount ? badgeCount?.['Sub Master']?.['Zone Master'] : 0} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/subZoneMaster'} icon={<FaMap size={17} />}>
                  <span>Sub Zone Master</span>
                  <span className='count'>
                    <Badge size='default' count={badgeCount ? badgeCount?.['Sub Master']?.['Sub Zone Master'] : 0} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/cityMaster'} icon={<FaGlobe size={17} />}>
                  <span>City Master</span>
                  <span className='count'>
                    <Badge size='default' count={badgeCount ? badgeCount?.['Sub Master']?.['City Master'] : 0} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/division'} icon={<FaSortAmountDown size={17} />}>
                  <span>Division</span>
                  <span className='count'>
                    <Badge size='default' count={badgeCount ? badgeCount?.['Sub Master']?.['Division'] : 0} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/department'} icon={<FaBuilding size={17} />}>
                  <span>Department</span>
                  <span className='count'>
                    <Badge size='default' count={badgeCount ? badgeCount?.['Sub Master']?.['Department'] : 0} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/designation'} icon={<FaBriefcase size={17} />} onClick={() => setTopTitle('Designation')}>
                  <span>Designation</span>
                  <span className='count'>
                    <Badge size='default' count={badgeCount ? badgeCount?.['Sub Master']?.['Designation'] : 0} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/employeeLevel'} icon={<FaUserAlt size={17} />}>
                  <span>Employee Level</span>
                  <span className='count'>
                    <Badge size='default' count={badgeCount ? badgeCount?.['Sub Master']?.['Employee Level'] : 0} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key={'/serviceFor'} icon={<MdOutlineMiscellaneousServices size={17} />} onClick={() => setTopTitle('Service For')}>
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
                </Menu.Item>
                <Menu.Item key={'/glaccount'} icon={<MdOutlineDynamicForm size={17} />} onClick={() => setTopTitle('GL Account')}>
                  <span>GL Account</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
              </Menu.SubMenu>
            )}

            {main.audit && (
              <Menu.SubMenu
                className='side-nav maintext'
                key='sub3'
                title={
                  <div>
                    <div>
                      <FaDatabase size={20} color='#f5a60b' className='menu-icon' />
                    </div>
                    <div className='menu-title'>Audit</div>
                  </div>
                }>
                {sub.entry && (
                  <Menu.Item key={'/auditEntry'} icon={<FaStreetView size={17} />}>
                    <span>Entry</span>
                    <span className='count'>
                      <Badge size='default' count={badgeCount ? badgeCount?.['Audit']?.['Entry'] : 0} showZero color='#3199dc' />
                    </span>
                  </Menu.Item>
                )}

                {sub.approval && (
                  <Menu.Item key={'/auditApproval'} icon={<FaUserAlt size={17} />}>
                    <span>Approval</span>
                    <span className='count'>
                      <Badge size='default' count={badgeCount ? badgeCount?.['Audit']?.['Approval'] : 0} showZero color='#3199dc' />
                    </span>
                  </Menu.Item>
                )}

                {sub.capa && (
                  <Menu.Item key={'/capa'} icon={<FaMapMarkedAlt size={17} />} onClick={() => setTopTitle('CAPA')}>
                    <span>CAPA</span>
                    <span className='count'>
                      <Badge size='default' count={badgeCount ? badgeCount?.['Audit']?.['CAPA'] : 0} showZero color='#3199dc' />
                    </span>
                  </Menu.Item>
                )}

                {sub.report && (
                  <Menu.Item key={'/report'} icon={<FaGlobe size={17} />}>
                    <span>Report</span>
                    <span className='count'>
                      <Badge size='default' count={badgeCount ? badgeCount?.['Audit']?.['Report'] : 0} showZero color='#3199dc' />
                    </span>
                  </Menu.Item>
                )}
              </Menu.SubMenu>
            )}
            <Menu.SubMenu
              className='side-nav maintext'
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

              <Menu.SubMenu className='side-nav' key={'/pcadvancereqms'} icon={<MdOutlinePayment size={17} />} title={<span className='menu-title'>Payment Request</span>}>
                <Menu.Item key='/pcadvancereqms' icon={<BsCash size={17} />} onClick={() => setTopTitle('Petty Cash Advance Request - MS')}>
                  <span>PC Adv. Req. - MS</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key='/pcaclaimsubmissionms' icon={<BsCash size={17} />} onClick={() => setTopTitle('Petty Cash Claim Submission - MS')}>
                  <span>PC Claim Submission - MS</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                {/* <Menu.Item key='/poprocess' icon={<BsCash size={17} />} onClick={() => setTopTitle('PO Process - MS')}>
                  <span>PO Process - MS</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item> */}
                <Menu.Item key='/pcclaimreqorl' icon={<BsCash size={17} />} onClick={() => setTopTitle('PettyCash Claim Request- ORL')}>
                  <span>PettyCash Claim Request- ORL</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
              </Menu.SubMenu>

              <Menu.SubMenu className='side-nav' key='sub6' icon={<BsCashCoin size={17} />} title={<span className='menu-title'>Petty Cash Claim Approval</span>}>
                <Menu.Item key='/orlpcclaimapparm' icon={<BsCash size={17} />} onClick={() => setTopTitle('ORL - Pettycash Claim Approval - ARM')}>
                  <span>ORL - Pettycash Claim Approval - ARM</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key='/orlpcclaimappbo' icon={<BsCash size={17} />} onClick={() => setTopTitle('ORL - Pettycash Claim Approval - Back Office')}>
                  <span>ORL - Pettycash Claim Approval - Back Office</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key='/orlpcclaimappah' icon={<BsCash size={17} />} onClick={() => setTopTitle('ORL - Pettycash Claim Approval - AH')}>
                  <span>ORL - Pettycash Claim Approval - AH</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                {/* <Menu.Item key='/orlpcclaimappbh' icon={<BsCash size={17} />} onClick={() => setTopTitle('ORL - Pettycash Claim Approval - BH')}>
                  <span>ORL - Pettycash Claim Approval - BH</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item> */}
                <Menu.Item key='/mspcclaimappoh' icon={<BsCash size={17} />} onClick={() => setTopTitle('MS - Petty Cash Claim Approval - OH')}>
                  <span>MS - Petty Cash Claim Approval - OH</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key='/mspcclaimappah' icon={<BsCash size={17} />} onClick={() => setTopTitle('MS - Petty Cash Claim Approval - AH')}>
                  <span>MS - Petty Cash Claim Approval - AH</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu className='side-nav' key='sub8' icon={<BsCashCoin size={17} />} title={<span className='menu-title'>PO Payment Approval</span>}>
                <Menu.Item key='/poprocessappoh' icon={<BsCash size={17} />} onClick={() => setTopTitle('PO Process Approval - OH')}>
                  <span>PO Process Approval - OH</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key='/poprocessappah' icon={<BsCash size={17} />} onClick={() => setTopTitle('PO Process Approval - AH')}>
                  <span>PO Process Approval - AH</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu className='side-nav' key='sub9' icon={<BsCashCoin size={17} />} title={<span className='menu-title'>Petty Cash Request Approval</span>}>
                <Menu.Item key='/mspcadvanceappoh' icon={<BsCash size={17} />} onClick={() => setTopTitle('MS Petty Cash Advance Approval - OH')}>
                  <span>MS Petty Cash Advance Approval - OH</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                {/* <Menu.Item key='/mspcadvanceappbh' icon={<BsCash size={17} />} onClick={() => setTopTitle('MS Petty Cash Advance Approval - BH')}>
                  <span>MS Petty Cash Advance Approval - BH</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item> */}
                <Menu.Item key='/mspcadvanceappah' icon={<BsCash size={17} />} onClick={() => setTopTitle('MS Petty Cash Advance Approval - AH')}>
                  <span>MS Petty Cash Advance Approval - AH</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu className='side-nav' key='sub10' icon={<FaGlobe size={17} />} title={<span className='menu-title'>Report</span>}>
                <Menu.Item key='/ticketstatusreportorl' icon={<BsCash size={17} />} onClick={() => setTopTitle('Ticket Status Report')}>
                  <span>Ticket Status Report</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                 <Menu.Item key='/mspcrequestreport' icon={<BsCash size={17} />} onClick={() => setTopTitle('MS - PettyCash Request Report')}>
                  <span>MS - PettyCash Request Report</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
                <Menu.Item key='/pccliamorlreport' icon={<BsCash size={17} />} onClick={() => setTopTitle('PettyCash Claim Report ORL')}>
                  <span>PettyCash Claim Report ORL</span>
                  <span className='count'>
                    <Badge size='default' count={11} showZero color='#3199dc' />
                  </span>
                </Menu.Item>
              </Menu.SubMenu>
            </Menu.SubMenu>
          </Menu>
        </Sider>

        <Layout style={{height: '100vh'}}>
          <TopNavMenu {...{collapsed, setCollapsed, TopTitle}} />
          <Content main={main} sub={sub} {...{setTopTitle}} />
          <Footer />
        </Layout>
        <Modal title='Update Your Password to Continue' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>Enter your ID</p>
          <Input onChange={(e) => setid(e.target.value)} />
          <p>Enter your Password</p>
          <Input type='password' onChange={(e) => setpass(e.target.value)} />
        </Modal>
      </Layout>
    </>
  );
}

function Content(props) {
  const {main, sub, setTopTitle} = props;
  return (
    <div style={{height: '100vh', backgroundColor: '#F4F5F7', overflow: 'auto'}}>
      <Routes>
        <Route path='/dashboard' element={<div>Dashbaord</div>}></Route>
        <Route path='/activeUsers' element={<div>Active Users List</div>}></Route>
        <Route path='/disabledUsers' element={<div>Disabled Users List</div>}></Route>
        <Route path='/profile' element={<div>Profile</div>}></Route>

        {main.master && (
          <>
            <Route path='/outletMaster' element={<OutletMaster {...{setTopTitle}} />}></Route>
            <Route path='/employeeMaster' element={<EmployeeMaster {...{setTopTitle}} />}></Route>
            <Route path='/roleMaster' element={<RoleMaster {...{setTopTitle}} />}></Route>
            <Route path='/editRoleMaster' element={<EditRoleMaster {...{setTopTitle}} />}></Route>
            <Route path='/employeeMapping' element={<EmployeeMaping {...{setTopTitle}} />}></Route>
            <Route path='/auditCategory' element={<AuditCategory {...{setTopTitle}} />}></Route>
            <Route path='/auditSubCategory' element={<AuditSubCategory {...{setTopTitle}} />}></Route>
            <Route path='/auditPointList' element={<AuditPointList {...{setTopTitle}} />}></Route>
            <Route path='/auditPointMarks' element={<AuditPointMarks {...{setTopTitle}} />}></Route>

            <Route path='/outletMaster/addForm' element={<OutletMasterForm {...{setTopTitle}} />}></Route>
            <Route path='/employeeMaster/addForm' element={<EmployeeMasterForm {...{setTopTitle}} />}></Route>
            <Route path='/roleMaster/addForm' element={<RoleMasterForm {...{setTopTitle}} />}></Route>
            <Route path='/editRoleMaster/addForm' element={<EditRoleMasterForm {...{setTopTitle}} />}></Route>
            <Route path='/employeeMapping/addForm' element={<EmployeeMappingForm {...{setTopTitle}} />}></Route>
            <Route path='/auditCategory/addForm' element={<AuditCategoryForm {...{setTopTitle}} />}></Route>
            <Route path='/auditSubCategory/addForm' element={<AuditSubCategoryForm {...{setTopTitle}} />}></Route>
            <Route path='/auditPointMarks/addForm' element={<AuditPointMarksForm {...{setTopTitle}} />}></Route>
            <Route path='/auditPointMarks/view' element={<AuditPointMarksView {...{setTopTitle}} />}></Route>
            <Route path='/auditPointList/addForm' element={<AuditPointListForm {...{setTopTitle}} />}></Route>
            <Route path='/AssetGroupIssue' element={<AssetGroupIssue />}></Route>
            <Route path='/AssetGroupIssue/addForm' element={<AssetGroupIssueForm />}></Route>
            <Route path='/AssetGroupSpare' element={<AssetGroupSpare />}></Route>
            <Route path='/AssetGroupSpare/addForm' element={<AssetGroupSpareForm />}></Route>
            <Route path='/VendorMaster' element={<VendorMaster />}></Route>
            <Route path='/VendorMaster/addForm' element={<VendorMasterForm />}></Route>
            <Route path='/outletAssetGroupMapping' element={<AssetMaster />}></Route>
            <Route path='/outletAssetGroupMapping/addForm' element={<AssetMasterForm />}></Route>
            <Route path='/assetMaster' element={<NewAssetMaster />}></Route>
            <Route path='/assetMaster/addForm' element={<NewAssetMasterForm />}></Route>
            
          </>
        )}

        {main.submaster && (
          <>
            <Route path='/stateMaster' element={<StateMaster {...{setTopTitle}} />}></Route>
            <Route path='/zoneMaster' element={<ZoneMaster {...{setTopTitle}} />}></Route>
            <Route path='/subZoneMaster' element={<SubZoneMaster {...{setTopTitle}} />}></Route>
            <Route path='/cityMaster' element={<CityMaster {...{setTopTitle}} />}></Route>
            <Route path='/division' element={<Division {...{setTopTitle}} />}></Route>
            <Route path='/department' element={<Department {...{setTopTitle}} />}></Route>
            <Route path='/Designation' element={<Designation {...{setTopTitle}} />}></Route>
            <Route path='/employeeLevel' element={<EmployeeLevel {...{setTopTitle}} />}></Route>

            <Route path='/stateMaster/addForm' element={<StateMasterForm {...{setTopTitle}} />}></Route>
            <Route path='/zoneMaster/addForm' element={<ZoneMasterForm {...{setTopTitle}} />}></Route>
            <Route path='/subZoneMaster/addForm' element={<SubZoneMasterForm {...{setTopTitle}} />}></Route>
            <Route path='/cityMaster/addForm' element={<CityMasterForm {...{setTopTitle}} />}></Route>
            <Route path='/division/addForm' element={<DivisionForm {...{setTopTitle}} />}></Route>
            <Route path='/department/addForm' element={<DepartForm {...{setTopTitle}} />}></Route>
            <Route path='/Designation/addForm' element={<DesignationForm {...{setTopTitle}} />}></Route>
            <Route path='/employeeLevel/addForm' element={<EmployeeLevelForm {...{setTopTitle}} />}></Route>

            <Route path='/serviceFor' element={<ServiceFor />}></Route>
            <Route path='/serviceFor/addForm' element={<ServiceForForm />}></Route>
            <Route path='/assetGroup' element={<AssetGroup />}></Route>
            <Route path='/assetGroup/addForm' element={<AssetGroupForm />}></Route>
            <Route path='/servicecategory' element={<ServiceCategory />}></Route>
            <Route path='/servicecategory/addForm' element={<ServiceCategoryForm />}></Route>
            <Route path='/priority' element={<Priority />}></Route>
            <Route path='/priority/addForm' element={<PriorityForm />}></Route>
            <Route path='/typeOfService' element={<TypeOfService />}></Route>
            <Route path='/typeOfService/addForm' element={<TypeOfServiceForm />}></Route>
            <Route path='/workDone' element={<WorkDone />}></Route>
            <Route path='/workDone/addForm' element={<WorkDoneForm />}></Route>
            <Route path='/ModeOfPayment' element={<ModeOfPayment />}></Route>
            <Route path='/ModeOfPayment/addForm' element={<ModeOfPaymentForm />}></Route>
            <Route path='/glaccount' element={<Glaccount />}></Route>
            <Route path='/glaccountForm' element={<GlaccountForm />}></Route>
          </>
        )}

        {main.audit && (
          <>
            <Route path='/audit' element={<div>Profile</div>}></Route>
            <Route path='/auditEntry' element={<AuditEntry {...{setTopTitle}} />}></Route>
            <Route path='/auditEntry/addForm' element={<AuditEntryForm mode='add' {...{setTopTitle}} />}></Route>
            <Route path='/auditEntry/editForm' element={<AuditEntryForm mode='edit' {...{setTopTitle}} />}></Route>
            <Route path='/auditEntry/auditView' element={<AuditView {...{setTopTitle}} />}></Route>{' '}
          </>
        )}

        {main.audit && sub.approval && (
          <>
            <Route path='/auditApproval' element={<AuditApproval {...{setTopTitle}} />}></Route>
            <Route path='/approvalView' element={<Approval {...{setTopTitle}} />}></Route>{' '}
          </>
        )}

        {main.audit && sub.capa && (
          <>
            <Route path='/capa' element={<AuditCAPA {...{setTopTitle}} />}></Route>
            <Route path='/capaView' element={<CapaView {...{setTopTitle}} />}></Route>
          </>
        )}

        {main.audit && sub.capa && (
          <>
            <Route path='/report' element={<AuditReport {...{setTopTitle}} />}></Route>
          </>
        )}

        <Route path='/createTicket' element={<CreateTicket />}></Route>
        <Route path='/createTicket/addForm' element={<CreateTicketForm />}></Route>
        <Route path='/createTicket/showForm' element={<ShowTicket />}></Route>
        <Route path='/createTicket/showForm1' element={<ShowTicket1 />}></Route>
        <Route path='/handleTicket' element={<TicketHandling />}></Route>
        <Route path='/ticketForm' element={<TicketHandlingForm />}></Route>
        <Route path='/pcadvancereqms' element={<Pcadvancereqms />}></Route>
        <Route path='/pcaclaimsubmissionms' element={<Pcaclaimsubmissionms />}></Route>
        <Route path='/pcadvancereqmsform' element={<PcadvancereqmsForm />}></Route>
        <Route path='/poprocess' element={<Poprocess />}></Route>
        <Route path='/poprocessForm' element={<PoprocessForm />}></Route>
        <Route path='/pcclaimreqorl' element={<Pcclaimreqorl />}></Route>
        <Route path='/pcclaimreqorlForm' element={<PcclaimreqorlForm />}></Route>
        <Route path='/poprocessappoh' element={<Poprocessappoh />}></Route>
        <Route path='/poprocessappohForm' element={<PoprocessappohForm />}></Route>
        <Route path='/poprocessappah' element={<Poprocessappah />}></Route>
        <Route path='/poprocessappahForm' element={<PoprocessappahForm />}></Route>
        <Route path='/orlpcclaimapparm' element={<Orlpcclaimapparm />}></Route>
        <Route path='/orlpcclaimapparmForm' element={<OrlpcclaimapparmForm />}></Route>
        <Route path='/orlpcclaimappbo' element={<Orlpcclaimappbo />}></Route>
        <Route path='/orlpcclaimappboForm' element={<OrlpcclaimappboForm />}></Route>
        <Route path='/orlpcclaimappah' element={<Orlpcclaimappah />}></Route>
        <Route path='/orlpcclaimappahForm' element={<OrlpcclaimappahForm />}></Route>
        <Route path='/orlpcclaimappbh' element={<Orlpcclaimappbh />}></Route>
        <Route path='/orlpcclaimappbhForm' element={<OrlpcclaimappbhForm />}></Route>
        <Route path='/mspcclaimappoh' element={<Mspcclaimappoh />}></Route>
        <Route path='/mspcclaimappohForm' element={<MspcclaimappohForm />}></Route>
        <Route path='/mspcclaimappah' element={<Mspcclaimappah />}></Route>
        <Route path='/mspcclaimappahForm' element={<MspcclaimappahForm />}></Route>
        <Route path='/mspcadvanceappoh' element={<Mspcadvanceappoh />}></Route>
        <Route path='/mspcadvanceappohForm' element={<MspcadvanceappohForm />}></Route>
        <Route path='/mspcadvanceappah' element={<Mspcadvanceappah />}></Route>
        <Route path='/mspcadvanceappahForm' element={<MspcadvanceappahForm />}></Route>
        <Route path='/mspcadvanceappbh' element={<Mspcadvanceappbh />}></Route>
        <Route path='/mspcadvanceappbhForm' element={<MspcadvanceappbhForm />}></Route>
        <Route path='/ticketstatusreportorl' element={<Ticketstatusreportorl />}></Route>
        <Route path='/ticketstatusreportorlForm' element={<TicketstatusreportorlForm />}></Route>
        <Route path='/pccliamorlreport' element={<Pccliamorlreport />}></Route>
        <Route path='/pccliamorlreportForm' element={<PccliamorlreportForm />}></Route>
        <Route path='/fisubmit' element={<Fisubmit />}></Route>
        <Route path='/paymentclick' element={<Paymentclick />}></Route>
        <Route path='/pclcimapprovalah' element={<Pclcimapprovalah />}></Route>
        <Route path='/claimsubmission' element={<Claimsubmission />}></Route>
        <Route path='/mspcrequestreport' element={<Mspcrequestreport />}></Route>
        <Route path='/formticket1' element={<Formticket1 />}></Route>
        <Route path='/formticket2' element={<Formticket2 />}></Route>
        <Route path='/formticket3' element={<Formticket3 />}></Route>
        <Route path='/formticket4' element={<Formticket4 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
