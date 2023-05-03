import {createSlice} from '@reduxjs/toolkit';
import {filter} from 'ramda';
import masterApi from '../../api/masterApi';
import apis from '../../api/stateAPI';
import messageToast from '../../components/messageToast/messageToast';

const initialState = {
  savingState: false,
  saveStateResponse: {},
  saveStateError: {},
  gettingState: false,
  getStatesResponse: {},
  getStatesError: {},

  savingZonal: false,
  saveZonalResponse: {},
  saveZonalError: {},
  gettingZonal: false,
  getZonalResponse: {},
  getZonalError: {},

  savingSubZonal: false,
  saveSubZonalResponse: {},
  saveSubZonalError: {},
  gettingSubZonal: false,
  getSubZonalResponse: {},
  getSubZonalError: {},

  savingOutletMaster: false,
  saveOutletMasterResponse: {},
  saveOutletMasterError: {},

  savingEmployeeMaster: false,
  saveEmployeeMasterResponse: {},
  saveEmployeeMasterError: {},

  gettingCity: false,
  getCityResponse: {},
  getCityError: {},

  savingDivision: false,
  saveDivisionResponse: {},
  saveDivisionError: {},

  gettingDivision: false,
  getDivisionResponse: {},
  getDivisionError: {},

  gettingDepartment: false,
  getDepartmentResponse: {},
  getDepartmentError: {},

  savingDepartment: false,
  saveDepartmentResponse: {},
  saveDepartmentError: {},

  gettingDesignation: false,
  getDesignationResponse: {},
  getDesignationError: {},

  savingDesignation: false,
  saveDesignationResponse: {},
  saveDesignationError: {},

  gettingEmployeeLevel: false,
  getEmployeeLevelResponse: {},
  getEmployeeLevelError: {},

  savingEmployeeLevel: false,
  saveEmployeeLevelResponse: {},
  saveEmployeeLevelError: {},

  gettingOutletMaster: false,
  getOutletMasterResponse: {},
  getOutletMasterError: {},
  getORLsResponse: {},

  gettingEmployeMaster: false,
  getEmployeeMasterResponse: {},
  getEmployeeMasterError: {},

  savingAuditCategory: false,
  saveAuditCategoryResponse: {},
  saveAuditCategoryError: {},
  gettingAuditCategory: false,
  getAuditCategoryResponse: {},
  getAuditCategoryError: {},

  savingAuditSubCategory: false,
  saveAuditSubCategoryResponse: {},
  saveAuditSubCategoryError: {},
  gettingAuditSubCategory: false,
  getAuditSubCategoryResponse: {},
  getAuditSubCategoryError: {},

  savingAuditPointList: false,
  saveAuditPointListResponse: {},
  saveAuditPointListError: {},
  gettingAuditPointList: false,
  getAuditPointListResponse: {},
  getAuditSPointListError: {},

  savingAuditPointListMark: false,
  saveAuditPointListMarkResponse: {},
  saveAuditPointListMarkError: {},
  gettingAuditPointListMark: false,
  getAuditPointListMarkResponse: {},
  getAuditSPointListMarkError: {},

  savingRoleMaster: false,
  saveRoleMasterResponse: {},
  saveRoleMasterError: {},
  gettingRoleMaster: false,
  getRoleMasterResponse: {},
  getRoleMasterError: {},
  gettingRoleMasterList: false,
  getRoleMasterListResponse: {},
  getRoleMasterListError: {},

  gettingModulesList: true,
  getModulesListResponse: {},
  getModulesListError: {},

  gettingSubModulesList: true,
  getSubModulesListResponse: {},
  getSubModulesListError: {},

  gettingModulesScreenList: true,
  getModulesScreenListResponse: {},
  getModulesScreenListError: {},

  gettingReport: true,
  getReportResponse: {},
  getReportError: {},

  savingEmployeeMapping: false,
  saveEmployeeMappingResponse: {},
  saveEmployeeMappingError: {},
  gettingEmployeeMapping: false,
  getEmployeeMappingResponse: {},
  getEmployeeMappingError: {},
  allCatData: {},
  allCatDataError: false,
  zoneEmp: {},
  zoneEmpError: false
};

export const masterSlice = createSlice({
  name: 'master',
  initialState,
  reducers: {
    saveStateRequest: (state) => {
      state.savingState = true;
    },
    saveStateResponse: (state, action) => {
      state.savingState = false;
      state.saveStateResponse = action.payload;
    },
    saveStateError: (state, action) => {
      state.savingState = false;
      state.saveStateError = action.payload;
    },
    getStatesRequest: (state) => {
      state.gettingState = true;
    },
    getStatesResponse: (state, action) => {
      state.gettingState = false;
      state.getStatesResponse = action.payload;
    },
    getStatesError: (state, action) => {
      state.gettingState = false;
      state.getStatesError = action.payload;
    },

    getORLRequest: (state) => {
      state.gettingORLs = true;
    },
    getORLResponse: (state, action) => {
      state.gettingORLs = false;
      state.getORLsResponse = action.payload;
    },
    getORLError: (state, action) => {
      state.gettingORLs = false;
      state.getORLsError = action.payload;
    },

    getOutletMasterRequest: (state) => {
      state.gettingOutletMaster = true;
    },
    getOutletMasterResponse: (state, action) => {
      state.gettingOutletMaster = false;
      state.getOutletMasterResponse = action.payload;
    },
    getOutletMasterError: (state, action) => {
      state.gettingOutletMaster = false;
      state.getOutletMasterError = action.payload;
    },

    getEmployeeMasterRequest: (state) => {
      state.gettingEmployeMaster = true;
    },
    getEmployeeMasterResponse: (state, action) => {
      state.gettingEmployeMaster = false;
      state.getEmployeeMasterResponse = action.payload;
    },
    getEmployeeMasterError: (state, action) => {
      state.gettingEmployeMaster = false;
      state.getEmployeeMasterError = action.payload;
    },

    saveZonalRequest: (state) => {
      state.savingZonal = true;
    },
    saveZonalResponse: (state, action) => {
      state.savingZonal = false;
      state.saveZonalResponse = action.payload;
    },
    saveZonalError: (state, action) => {
      state.savingZonal = false;
      state.saveZonalError = action.payload;
    },
    getZonalRequest: (state) => {
      state.gettingZonal = true;
    },
    getZonalResponse: (state, action) => {
      state.gettingZonal = false;
      state.getZonalResponse = action.payload;
    },
    getZonalError: (state, action) => {
      state.gettingZonal = false;
      state.getZonalError = action.payload;
    },
    saveSubZonalRequest: (state) => {
      state.savingSubZonal = true;
    },
    saveSubZonalResponse: (state, action) => {
      state.savingSubZonal = false;
      state.saveSubZonalResponse = action.payload;
    },
    saveSubZonalError: (state, action) => {
      state.savingSubZonal = false;
      state.saveSubZonalError = action.payload;
    },
    getSubZonalRequest: (state) => {
      state.gettingSubZonal = true;
    },
    getSubZonalResponse: (state, action) => {
      state.gettingSubZonal = false;
      state.getSubZonalResponse = action.payload;
    },
    getSubZonalError: (state, action) => {
      state.gettingSubZonal = false;
      state.getSubZonalError = action.payload;
    },
    saveOutletMasterRequest: (state) => {
      state.savingOutletMaster = true;
    },
    saveOutletMasterResponse: (state, action) => {
      state.savingOutletMaster = false;
      state.saveOutletMasterResponse = action.payload;
    },
    saveOutletMasterError: (state, action) => {
      state.savingOutletMaster = false;
      state.saveOutletMasterError = action.payload;
    },

    saveEmployeeMasterRequest: (state) => {
      state.savingEmployeeMaster = true;
    },
    saveEmployeeMasterResponse: (state, action) => {
      state.savingEmployeeMaster = false;
      state.saveEmployeeMasterResponse = action.payload;
    },
    saveEmployeeMasterError: (state, action) => {
      state.savingEmployeeMaster = false;
      state.saveEmployeeMasterError = action.payload;
    },

    getCityRequest: (state) => {
      state.gettingCity = true;
    },
    getCityResponse: (state, action) => {
      state.gettingCity = false;
      state.getCityResponse = action.payload;
    },
    getCityError: (state, action) => {
      state.gettingCity = false;
      state.getCityError = action.payload;
    },

    saveDivisionRequest: (state) => {
      state.savingDivision = true;
    },
    saveDivisionResponse: (state, action) => {
      state.savingDivision = false;
      state.saveDivisionResponse = action.payload;
    },
    saveDivisionError: (state, action) => {
      state.savingDivision = false;
      state.saveDivisionError = action.payload;
    },
    getDivisionRequest: (state) => {
      state.gettingDivision = true;
    },
    getDivisionResponse: (state, action) => {
      state.gettingDivision = false;
      state.getDivisionResponse = action.payload;
    },
    getDivisionError: (state, action) => {
      state.gettingDivision = false;
      state.getDivisionError = action.payload;
    },
    getDepartmentRequest: (state) => {
      state.gettingDepartment = true;
    },
    getDepartmentResponse: (state, action) => {
      state.gettingDepartment = false;
      state.getDepartmentResponse = action.payload;
    },
    getDepartmentError: (state, action) => {
      state.gettingDepartment = false;
      state.getDepartmentError = action.payload;
    },
    saveDepartmentRequest: (state) => {
      state.savingDepartment = true;
    },
    saveDepartmentResponse: (state, action) => {
      state.savingDepartment = false;
      state.saveDepartmentResponse = action.payload;
    },
    saveDepartmentError: (state, action) => {
      state.savingDepartment = false;
      state.saveDepartmentError = action.payload;
    },
    getDesignationRequest: (state) => {
      state.gettingDesignation = true;
    },
    getDesignationResponse: (state, action) => {
      state.gettingDesignation = false;
      state.getDesignationResponse = action.payload;
    },
    getDesignationError: (state, action) => {
      state.gettingDesignation = false;
      state.getDesignationError = action.payload;
    },
    saveDesignationRequest: (state) => {
      state.savingDesignation = true;
    },
    saveDesignationResponse: (state, action) => {
      state.savingDesignation = false;
      state.saveDesignationResponse = action.payload;
    },
    saveDesignationError: (state, action) => {
      state.savingDesignation = false;
      state.saveDesignationError = action.payload;
    },
    getEmployeeLevelRequest: (state) => {
      state.gettingEmployeeLevel = true;
    },
    getEmployeeLevelResponse: (state, action) => {
      state.gettingEmployeeLevel = false;
      state.getEmployeeLevelResponse = action.payload;
    },
    getEmployeeLevelError: (state, action) => {
      state.gettingEmployeeLevel = false;
      state.getEmployeeLevelError = action.payload;
    },
    saveEmployeeLevelRequest: (state) => {
      state.savingEmployeeLevel = true;
    },
    saveEmployeeLevelResponse: (state, action) => {
      state.savingEmployeeLevel = false;
      state.saveEmployeeLevelResponse = action.payload;
    },
    saveEmployeeLevelError: (state, action) => {
      state.savingEmployeeLevel = false;
      state.saveEmployeeLevelError = action.payload;
    },

    saveAuditCategoryRequest: (state) => {
      state.savingAuditCategory = true;
    },
    saveAuditCategoryResponse: (state, action) => {
      state.savingAuditCategory = false;
      state.saveAuditCategoryResponse = action.payload;
    },
    saveAuditCategoryError: (state, action) => {
      state.savingAuditCategory = false;
      state.saveAuditCategoryError = action.payload;
    },
    getAuditCategoryRequest: (state) => {
      state.gettingAuditCategory = true;
    },
    getAuditCategoryResponse: (state, action) => {
      state.gettingAuditCategory = false;
      state.getAuditCategoryResponse = action.payload;
    },
    getAuditCategoryError: (state, action) => {
      state.gettingAuditCategory = false;
      state.getAuditCategoryError = action.payload;
    },
    saveAuditSubCategoryRequest: (state) => {
      state.savingAuditSubCategory = true;
    },
    saveAuditSubCategoryResponse: (state, action) => {
      state.savingAuditSubCategory = false;
      state.saveAuditSubCategoryResponse = action.payload;
    },
    saveAuditSubCategoryError: (state, action) => {
      state.savingAuditSubCategory = false;
      state.saveAuditSubCategoryError = action.payload;
    },
    getAuditSubCategoryRequest: (state) => {
      state.gettingAuditSubCategory = true;
    },
    getAuditSubCategoryResponse: (state, action) => {
      state.gettingAuditSubCategory = false;
      state.getAuditSubCategoryResponse = action.payload;
    },
    getAuditSubCategoryError: (state, action) => {
      state.gettingAuditSubCategory = false;
      state.getAuditSubCategoryError = action.payload;
    },

    saveAuditPointListRequest: (state) => {
      state.savingAuditPointList = true;
    },
    saveAuditPointListResponse: (state, action) => {
      state.savingAuditPointList = false;
      state.saveAuditPointListResponse = action.payload;
    },
    saveAuditPointListError: (state, action) => {
      state.savingAuditPointList = false;
      state.saveAuditPointListError = action.payload;
    },
    getAuditPointListRequest: (state) => {
      state.gettingAuditPointList = true;
    },
    getAuditPointListResponse: (state, action) => {
      state.gettingAuditPointList = false;
      state.getAuditPointListResponse = action.payload;
    },
    getAuditPointListError: (state, action) => {
      state.gettingAuditPointList = false;
      state.getAuditPointListError = action.payload;
    },

    saveAuditPointListMarkRequest: (state) => {
      state.savingAuditPointListMark = true;
    },
    saveAuditPointListMarkResponse: (state, action) => {
      state.savingAuditPointListMark = false;
      state.saveAuditPointListMarkResponse = action.payload;
    },
    saveAuditPointListMarkError: (state, action) => {
      state.savingAuditPointListMark = false;
      state.saveAuditPointListMarkError = action.payload;
    },
    getAuditPointListMarkRequest: (state) => {
      state.gettingAuditPointListMark = true;
    },
    getAuditPointListMarkResponse: (state, action) => {
      state.gettingAuditPointListMark = false;
      state.getAuditPointListMarkResponse = action.payload;
    },
    getAuditPointListMarkError: (state, action) => {
      state.gettingAuditPointListMark = false;
      state.getAuditPointListMarkError = action.payload;
    },

    getRoleMasterRequest: (state) => {
      state.gettingRoleMaster = true;
    },
    getRoleMasterResponse: (state, action) => {
      state.gettingRoleMaster = false;
      state.getRoleMasterResponse = action.payload;
    },
    getRoleMasterError: (state, action) => {
      state.gettingRoleMaster = false;
      state.getRoleMasterError = action.payload;
    },

    saveRoleMasterRequest: (state) => {
      state.savingRoleMaster = true;
    },
    saveRoleMasterResponse: (state, action) => {
      state.savingRoleMaster = false;
      state.saveRoleMasterResponse = action.payload;
    },
    saveRoleMasterError: (state, action) => {
      state.savingRoleMaster = false;
      state.saveRoleMasterError = action.payload;
    },
    getRoleMasterListRequest: (state) => {
      state.gettingRoleMasterList = true;
    },
    getRoleMasterListResponse: (state, action) => {
      state.gettingRoleMasterList = false;
      state.getRoleMasterListResponse = action.payload;
    },
    getRoleMasterListError: (state, action) => {
      state.gettingRoleMasterList = false;
      state.getRoleMasterListError = action.payload;
    },

    getModulesListRequest: (state, action) => {
      state.gettingModulesList = true;
      state.getModulesListRequest = action.payload;
    },
    getModulesListResponse: (state, action) => {
      state.gettingModulesList = false;
      state.getModulesListResponse = action.payload;
    },
    getModulesListError: (state, action) => {
      state.gettingModulesList = false;
      state.getRoleMasterListError = action.payload;
    },
    getSubModulesListRequest: (state, action) => {
      state.gettingSubModulesList = true;
      state.getSubModulesListRequest = action.payload;
    },
    getSubModulesListResponse: (state, action) => {
      state.gettingSubModulesList = false;
      state.getSubModulesListResponse = action.payload;
    },
    getSubModulesListError: (state, action) => {
      state.gettingSubModulesList = false;
      state.getSubModulesListError = action.payload;
    },
    getModulesScreenListRequest: (state, action) => {
      state.gettingModulesScreenList = true;
      state.getModulesScreenListRequest = action.payload;
    },
    getModulesScreenListResponse: (state, action) => {
      state.gettingModulesScreenList = false;
      state.getModulesScreenListResponse = action.payload;
    },
    getModulesScreenListError: (state, action) => {
      state.gettingModulesScreenList = false;
      state.getModulesScreenListError = action.payload;
    },
    getReportRequest: (state, action) => {
      state.gettingReport = true;
      state.getReportRequest = action.payload;
    },
    getReportResponse: (state, action) => {
      state.gettingReport = false;
      state.getReportResponse = action.payload;
    },
    getReportError: (state, action) => {
      state.gettingReport = false;
      state.getReportError = action.payload;
    },

    getEmployeeMappingRequest: (state) => {
      state.gettingEmployeeMapping = true;
    },
    getEmployeeMappingResponse: (state, action) => {
      state.gettingEmployeeMapping = false;
      state.getEmployeeMappingResponse = action.payload;
    },
    getEmployeeMappingError: (state, action) => {
      state.gettingEmployeeMapping = false;
      state.getEmployeeMappingError = action.payload;
    },

    saveEmployeeMappingRequest: (state) => {
      state.savingEmployeeMapping = true;
    },
    saveEmployeeMappingResponse: (state, action) => {
      state.savingEmployeeMapping = false;
      state.saveEmployeeMappingResponse = action.payload;
    },
    saveEmployeeMappingError: (state, action) => {
      state.savingEmployeeMapping = false;
      state.saveEmployeeMappingError = action.payload;
    },
    getCat: (state, action) => {
      state.allCatDataError = false;
      state.allCatData = action.payload;
    },
    getCatErr: (state) => {
      state.allCatDataError = true;
    },
    getEmployZone: (state, action) => {
      state.zoneEmp = action.payload;
      state.zoneEmpError = true;
    }
  }
});

export default masterSlice.reducer;

export const saveState =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveStateRequest());
    return apis
      .addState({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveStateResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveStateError());
      });
  };

export const updateState =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveStateRequest());
    return apis
      .updateState({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveStateResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveStateError());
      });
  };

export const getStates = () => async (dispatch) => {
  dispatch(masterSlice.actions.getStatesRequest());
  return apis
    .getStates()
    .then(({data}) => {
      dispatch(masterSlice.actions.getStatesResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(masterSlice.actions.getStatesError());
    });
};

export const saveZonal =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveZonalRequest());
    return apis
      .addZonal({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveZonalResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveZonalError());
      });
  };

export const updateZonal =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveZonalRequest());
    return apis
      .updateZonal({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveZonalResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveZonalError());
      });
  };

export const getZonal = (stateID) => async (dispatch) => {
  dispatch(masterSlice.actions.getZonalRequest());
  return apis
    .getZonal()
    .then(({data}) => {
      const {data: zonal, ...rest} = data;

      const filterByStateId = filter((e) => (stateID ? e.state_id === stateID : true), zonal ? zonal : []);

      dispatch(masterSlice.actions.getZonalResponse({data: filterByStateId, ...rest}));
      return data;
    })
    .catch(() => {
      dispatch(masterSlice.actions.getZonalError());
    });
};
export const EmployeeZone = (stateID) => async (dispatch) => {
  dispatch(masterSlice.actions.getZonalRequest());
  return apis
    .getZonal()
    .then(({data}) => {
      const tempArr = [];

      data.data.forEach((el) => {
        if (stateID.includes(el.state_id)) {
          tempArr.push(el);
        }
      });
      dispatch(masterSlice.actions.getEmployZone({data: tempArr}));
      return data;
    })
    .catch(() => {
      dispatch(masterSlice.actions.getZonalError());
    });
};
export const saveSubZonal =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveSubZonalRequest());
    return apis
      .addSubZonal({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveSubZonalResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveSubZonalError());
      });
  };

export const getORLName = () => async (dispatch) => {
  dispatch(masterSlice.actions.getORLRequest());
  return apis
    .getORLName()
    .then(({data}) => {
      dispatch(masterSlice.actions.getORLResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(masterSlice.actions.getORLError());
    });
};

export const getOutletMaster = (subzone_id) => async (dispatch) => {
  dispatch(masterSlice.actions.getOutletMasterRequest());
  return apis
    .getOutletMaster()
    .then(({data}) => {
      const {data: outletList, ...restOfData} = data;
      let filteredBySZ = [];
      if (Array.isArray(subzone_id)) {
        (outletList ?? [])?.forEach((el) => {
          if (subzone_id.includes(el.subzone_id)) {
            filteredBySZ.push(el);
          }
        });
      } else {
        filteredBySZ = (outletList ?? [])?.filter((data) => {
          return subzone_id ? Number(data.subzone_id) === Number(subzone_id) : true;
        });
      }
      dispatch(masterSlice.actions.getOutletMasterResponse({data: filteredBySZ, ...restOfData}));
      return data;
    })
    .catch(() => {
      dispatch(masterSlice.actions.getOutletMasterError());
    });
};

export const getEmployeeMaster = () => async (dispatch) => {
  dispatch(masterSlice.actions.getEmployeeMasterRequest());
  return apis
    .getEmployeeMaster()
    .then(({data}) => {
      dispatch(masterSlice.actions.getEmployeeMasterResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(masterSlice.actions.getEmployeeMasterError());
    });
};

export const updateSubZonal =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveSubZonalRequest());
    return apis
      .updateSubZonal({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveSubZonalResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveSubZonalError());
      });
  };

export const getSubZonal = (zoneID) => async (dispatch) => {
  dispatch(masterSlice.actions.getSubZonalRequest());
  return apis
    .getSubZonal()
    .then(({data}) => {
      const {data: subZonal, ...rest} = data;
      let tempArr = [];
      if (Array.isArray(zoneID)) {
        data?.data?.forEach((el) => {
          if (zoneID.includes(el.zonal_id)) {
            tempArr.push(el);
          }
        });
      } else {
        tempArr = filter((e) => (zoneID ? e.zonal_id === zoneID : true), subZonal ? subZonal : []);
      }
      dispatch(masterSlice.actions.getSubZonalResponse({data: tempArr, ...rest}));
      return data;
    })
    .catch(() => {
      dispatch(masterSlice.actions.getSubZonalError());
    });
};

export const saveOutletMaster =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveOutletMasterRequest());
    return apis
      .addOutletMaster({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveOutletMasterResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveOutletMasterError());
      });
  };

export const updateOutletMaster =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveOutletMasterRequest());
    return apis
      .updateOutletMaster({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveOutletMasterResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveOutletMasterError());
      });
  };
export const updateCity =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveOutletMasterRequest());
    return apis
      .updateCity({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveCityResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveCityError());
      });
  };

export const getCity = (subZoneID) => async (dispatch) => {
  dispatch(masterSlice.actions.getCityRequest());
  return apis
    .getCity()
    .then(({data}) => {
      const {data: cities, ...rest} = data;
      const filterCities = filter((e) => (subZoneID ? e.subzonel_id === subZoneID : true), cities ? cities : []);
      dispatch(masterSlice.actions.getCityResponse({data: filterCities, ...rest}));
      return data;
    })
    .catch(() => {
      dispatch(masterSlice.actions.getCityError());
    });
};

export const saveDivision =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveDivisionRequest());
    return apis
      .addDivision({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveDivisionResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveDivisionError());
      });
  };

export const updateDivision =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveDivisionRequest());
    return apis
      .updateDivision({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveDivisionResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveDivisionError());
      });
  };

export const getDivision = () => async (dispatch) => {
  dispatch(masterSlice.actions.getDivisionRequest());
  return apis
    .getDivision()
    .then(({data}) => {
      data.data = data?.data.filter((item) => item.status === '1');

      dispatch(masterSlice.actions.getDivisionResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(masterSlice.actions.getDivisionError());
    });
};

export const getDepartment = () => async (dispatch) => {
  dispatch(masterSlice.actions.getDepartmentRequest());
  return apis
    .getDepartment()
    .then(({data}) => {
      data.data = data?.data.filter((item) => item.status === '1');
      dispatch(masterSlice.actions.getDepartmentResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(masterSlice.actions.getDepartmentError());
    });
};

export const saveDepartment =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveDepartmentRequest());
    return apis
      .addDepartment({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveDepartmentResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveDepartmentError());
      });
  };

export const updateDepartment =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveDepartmentRequest());
    return apis
      .updateDepartment({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveDepartmentResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveDepartmentError());
      });
  };

export const getDesignation = () => async (dispatch) => {
  dispatch(masterSlice.actions.getDesignationRequest());
  return apis
    .getDesignation()
    .then(({data}) => {
      data.data = data?.data.filter((item) => item.status === '1');

      dispatch(masterSlice.actions.getDesignationResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(masterSlice.actions.getDesignationError());
    });
};

export const saveDesignation =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveDesignationRequest());
    return apis
      .addDesignation({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveDesignationResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveDesignationError());
      });
  };

export const updateDesignation =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveDesignationRequest());
    return apis
      .updateDesignation({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveDesignationResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveDesignationError());
      });
  };
export const getEmployeeLevel = () => async (dispatch) => {
  dispatch(masterSlice.actions.getEmployeeLevelRequest());
  return apis
    .getEmployeeLevel()
    .then(({data}) => {
      dispatch(masterSlice.actions.getEmployeeLevelResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(masterSlice.actions.getEmployeeLevelError());
    });
};

export const updateEmployeeLevel =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveEmployeeLevelRequest());
    return apis
      .updateEmployeeLevel({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveEmployeeLevelResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveEmployeeLevelError());
      });
  };

export const saveEmployeeLevel =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveEmployeeLevelRequest());
    return apis
      .addEmployeeLevel({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveEmployeeLevelResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveEmployeeLevelError());
      });
  };

export const getAuditCategory = () => async (dispatch) => {
  dispatch(masterSlice.actions.getAuditCategoryRequest());
  return masterApi
    .getAuditCategory()
    .then(({data}) => {
      dispatch(masterSlice.actions.getAuditCategoryResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(masterSlice.actions.getAuditCategoryError());
    });
};

export const addAuditCategory =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveAuditCategoryRequest());
    return masterApi
      .addAuditCategory({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveAuditCategoryResponse(data));

        messageToast({message: data?.message ?? data?.statusText, status: data.status, title: 'State Master'});
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveAuditCategoryError());
      });
  };

export const updateAuditCategory =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveAuditCategoryRequest());
    return masterApi
      .updateAuditCategory({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveAuditCategoryResponse(data));
        messageToast({message: data?.message ?? data?.statusText, status: data.status, title: 'State Master'});
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveAuditCategoryError());
      });
  };

export const getAuditSubCategory = (auditcategory_ID) => async (dispatch) => {
  dispatch(masterSlice.actions.getAuditSubCategoryRequest());
  return masterApi
    .getAuditSubCategory()
    .then(({data}) => {
      const {data: AuditSubCategory, ...rest} = data;
      const filterByStateId = filter((e) => (auditcategory_ID ? e.auditcategory_id === auditcategory_ID : true), AuditSubCategory ? AuditSubCategory : []);
      dispatch(masterSlice.actions.getAuditSubCategoryResponse({data: filterByStateId, ...rest}));
      return data;
    })
    .catch((e) => {
      dispatch(masterSlice.actions.getAuditSubCategoryError(e));
    });
};

export const addAuditSubCategory =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveAuditSubCategoryRequest());
    return masterApi
      .addAuditSubCategory({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveAuditSubCategoryResponse(data));
        messageToast({message: data?.message ?? data?.statusText, status: data.status, title: 'State Master'});
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveAuditSubCategoryError());
      });
  };

export const updateAuditSubCategory =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveAuditSubCategoryRequest());
    return masterApi
      .updateAuditSubCategory({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveAuditSubCategoryResponse(data));
        messageToast({message: data?.message ?? data?.statusText, status: data.status, title: 'State Master'});
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveAuditSubCategoryError());
      });
  };

export const getAuditPointList = () => async (dispatch) => {
  dispatch(masterSlice.actions.getAuditPointListRequest());
  return masterApi
    .getAuditPointList()
    .then(({data}) => {
      dispatch(masterSlice.actions.getAuditPointListResponse(data));
      return data;
    })
    .catch((e) => {
      dispatch(masterSlice.actions.getAuditPointListError(e));
    });
};

export const getAllCat = () => async (dispatch) => {
  dispatch(masterSlice.actions.getAuditPointListRequest());
  return masterApi
    .getAuditPointList()
    .then(({data}) => {
      dispatch(masterSlice.actions.getAuditPointListResponse(data));
      return data;
    })
    .catch((e) => {
      dispatch(masterSlice.actions.getAuditPointListError(e));
    });
};

export const addAuditPointList =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveAuditPointListRequest());
    return masterApi
      .addAuditPointList({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveAuditPointListResponse(data));
        messageToast({message: data?.message ?? data?.statusText, status: data.status, title: 'State Master'});
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveAuditPointListError());
      });
  };

export const updateAuditPointList =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveAuditPointListRequest());
    return masterApi
      .updateAuditPointList({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveAuditPointListResponse(data));
        messageToast({message: data?.message ?? data?.statusText, status: data.status, title: 'Audit Point List Master'});
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveAuditPointListError());
      });
  };

export const getAuditPointListMark = () => async (dispatch) => {
  dispatch(masterSlice.actions.getAuditPointListMarkRequest());
  return masterApi
    .getAuditPointMark()
    .then(({data}) => {
      dispatch(masterSlice.actions.getAuditPointListMarkResponse(data));
      return data;
    })
    .catch((e) => {
      dispatch(masterSlice.actions.getAuditPointListMarkError(e));
    });
};

export const addAuditPointListMark =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveAuditPointListMarkRequest());
    return masterApi
      .addAuditPointMark({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveAuditPointListMarkResponse(data));
        messageToast({message: data?.message ?? data?.statusText, status: data.status, title: 'State Master'});
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveAuditPointListMarkError());
      });
  };

export const updateAuditPointListMark =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveAuditPointListMarkRequest());
    return masterApi
      .updateAuditPointMark({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveAuditPointListMarkResponse(data));
        messageToast({message: data?.message ?? data?.statusText, status: data.status, title: 'Audit Point List Master'});
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveAuditPointListMarkError());
      });
  };

export const getRoleMaster = () => async (dispatch) => {
  dispatch(masterSlice.actions.getRoleMasterRequest());
  return masterApi
    .getRoleMaster()
    .then(({data}) => {
      dispatch(masterSlice.actions.getRoleMasterResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(masterSlice.actions.getRoleMasterError());
    });
};

export const addRoleMaster =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveRoleMasterRequest());
    return masterApi
      .addRoleMaster({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveRoleMasterResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveRoleMasterError());
      });
  };

export const getRoleList = () => async (dispatch) => {
  dispatch(masterSlice.actions.getRoleMasterListRequest());
  return masterApi
    .getRoleList()
    .then(({data}) => {
      dispatch(masterSlice.actions.getRoleMasterListResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(masterSlice.actions.getRoleMasterListError());
    });
};

export const addEmployeeMaster =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveEmployeeMasterRequest());
    return apis
      .addEmployeeMaster({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveEmployeeMasterResponse({data}));
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveEmployeeMasterError());
      });
  };

export const updateEmployeeMaster = (data) => async (dispatch) => {
  dispatch(masterSlice.actions.saveEmployeeMasterRequest());
  return apis
    .updateEmployeeMaster(data)
    .then(({data}) => {
      dispatch(masterSlice.actions.saveEmployeeMasterResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(masterSlice.actions.saveEmployeeMasterError());
    });
};

export const getModulesList = () => async (dispatch) => {
  dispatch(masterSlice.actions.getModulesListRequest());
  return apis
    .getModulesList()
    .then(({data}) => {
      dispatch(masterSlice.actions.getModulesListResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(masterSlice.actions.getModulesListError());
    });
};

export const getSubModulesList = () => async (dispatch) => {
  dispatch(masterSlice.actions.getSubModulesListRequest());
  return apis
    .getSubModulesList()
    .then(({data}) => {
      dispatch(masterSlice.actions.getSubModulesListResponse({...data}));
      return data;
    })
    .catch(() => {
      dispatch(masterSlice.actions.getSubModulesListError());
    });
};

export const getModuleScreensList = () => async (dispatch) => {
  dispatch(masterSlice.actions.getModulesScreenListRequest());
  return apis
    .getModulesScreenList()
    .then(({data}) => {
      dispatch(masterSlice.actions.getModulesScreenListResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(masterSlice.actions.getModulesScreenListError());
    });
};

export const getReport = () => async (dispatch) => {
  dispatch(masterSlice.actions.getReportRequest());
  return apis
    .getReport()
    .then(({data}) => {
      dispatch(masterSlice.actions.getReportResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(masterSlice.actions.getReportError());
    });
};

export const getEmployeeMapping = () => async (dispatch) => {
  dispatch(masterSlice.actions.getEmployeeMappingRequest());
  return apis
    .getEmployeeMapping()
    .then(({data}) => {
      dispatch(masterSlice.actions.getEmployeeMappingResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(masterSlice.actions.getEmployeeMappingError());
    });
};

export const UpdateEmployeeMapping =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveEmployeeMappingRequest());
    return apis
      .updateEmployeeMApping({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveEmployeeMappingResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveEmployeeMappingError());
      });
  };

export const addEmployeeMapping =
  ({data}) =>
  async (dispatch) => {
    dispatch(masterSlice.actions.saveEmployeeMappingRequest());
    return apis
      .addEmployeeMapping({data})
      .then(({data}) => {
        dispatch(masterSlice.actions.saveEmployeeMappingResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(masterSlice.actions.saveEmployeeMappingError());
      });
  };

export const getAllCategory = () => async (dispatch) => {
  return masterApi
    .getAllCategory()
    .then(({data}) => {
      dispatch(masterSlice.actions.getCat(data.data));
      return data.data;
    })
    .catch(() => {
      dispatch(masterSlice.actions.getCatErr());
    });
};
