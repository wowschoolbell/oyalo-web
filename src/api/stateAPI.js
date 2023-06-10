import client from "./client";

const limit = 400;
const offset = 0;

//subMaster
const addState = ({ data }) => client.post("add-state", data, {});
const updateState = ({ data }) => client.post("update-state", data, {});
const getStates = () => client.get("getstate", { limit, offset }, {});

const addZonal = ({ data }) => client.post("add-zonal", data, {});
const updateZonal = ({ data }) => client.post("update-zonal", data, {});
const getZonal = () => client.get("getzonal", { limit, offset }, {});

const addSubZonal = ({ data }) => client.post("add-subzonal", data, {});
const getSubZonal = () => client.get("getsubzonal", { limit, offset }, {});
const updateSubZonal = ({ data }) => client.post("update-subzonal", data, {});

const setCity = ({ data }) => client.post("add-city", data, {});
const getCity = () => client.get("getcity", { limit, offset }, {});
const updateCity = ({ data }) => client.post("update-city", data, {});

const addDivision = ({ data }) => client.post("add-division", data, {});
const getDivision = () => client.get("getdivision", { limit, offset }, {});
const updateDivision = ({ data }) => client.post("update-division", data, {});

const getDepartment = () => client.get("getdepartment", { limit, offset }, {});
const addDepartment = ({ data }) => client.post("add-department", data, {});
const updateDepartment = ({ data }) =>
  client.post("update-department", data, {});

const addDesignation = ({ data }) => client.post("add-degignation", data, {});
const getDesignation = () =>
  client.get("getdegignation", { limit, offset }, {});
const updateDesignation = ({ data }) =>
  client.post("update-degignation", data, {});

const getEmployeeLevel = () => client.get("getlevel", { limit, offset }, {});
const addEmployeeLevel = ({ data }) => client.post("add-level", data, {});
const updateEmployeeLevel = ({ data }) => client.post("update-level", data, {});

const addOutletMaster = ({ data }) => client.post("add-outletMaster", data, {});
const updateOutletMaster = ({ data }) =>
  client.post("update-outletMaster", data, {});
const getOutletMaster = () =>
  client.get("get-outletMaster", { limit, offset }, {});
const getORLName = () => client.get("get-orl-employees", { limit, offset }, {});

const addEmployeeMaster = ({ data }) =>
  client.post("add-employeeMaster", data, {});
const updateEmployeeMaster = ({ data }) =>
  client.post("update-employeeMaster", data, {});
const getEmployeeMaster = () =>
  client.get("get-employeeMaster", { limit, offset }, {});

const getModulesList = () => client.get("get-module", { limit, offset }, {});
const getSubModulesList = () =>
  client.get("get-submodule", { limit, offset }, {});
const getModulesScreenList = () =>
  client.get("get-modulescreen", { limit, offset }, {});
const getReport = () => client.get("get-report", { limit, offset }, {});
const getEmployeeMapping = () =>
  client.get("get-employee-mapping", { limit, offset }, {});
const addEmployeeMapping = ({ data }) =>
  client.post("add-employee-mapping", JSON.stringify(data), {
    headers: { "content-type": "application/json" },
  });
const updateEmployeeMApping = ({ data }) =>
  client.post("update-employee-mapping", JSON.stringify(data), {
    headers: { "content-type": "application/json" },
  });

const loginApi = (val) =>
  client.post(
    "login",
    {
      email: val.email,
      employee_code: val.employee_code,
      password: val.Password,
      type: val.type,
      code: val.code,
    },
    {}
  );

const forgetpasswordApi = (val) => {
  console.log(val, "val");
  return client.post(
    "forget-password",
    {
      email: val.employee_code,
      employee_code: val.employee_code,
    },
    {}
  );
};
const updatePass = (val) =>
  client.post(
    "employee-update-password",
    { employee_code: val.employee_code, password: val.Password },
    {}
  );
const getBadgeCount = () =>
  client.get("get-allmenucounts", { limit, offset }, {});

const getUserReport = () =>
  client.get("get-employeeMaster1", { limit, offset }, {});

const logincheckApi = (val) =>
  client.post(
    "chck_time",
    {
      employee_code: val.emp_date,
    },
    {}
  );

const apis = {
  addState,
  updateState,
  getStates,

  updateZonal,
  addZonal,
  getZonal,

  addOutletMaster,
  getOutletMaster,
  updateOutletMaster,

  addEmployeeMaster,
  updateEmployeeMaster,
  getEmployeeMaster,

  addSubZonal,
  getSubZonal,
  updateSubZonal,

  setCity,
  getCity,
  updateCity,

  addDivision,
  getDivision,
  updateDivision,

  getDepartment,
  addDepartment,
  updateDepartment,

  addDesignation,
  getDesignation,
  updateDesignation,

  getEmployeeLevel,
  addEmployeeLevel,
  updateEmployeeLevel,

  getModulesList,
  getSubModulesList,
  getModulesScreenList,
  getReport,
  getEmployeeMapping,
  addEmployeeMapping,
  updateEmployeeMApping,

  loginApi,
  updatePass,
  getBadgeCount,
  getORLName,
  getUserReport,
  forgetpasswordApi,
  logincheckApi,
};

export default apis;
