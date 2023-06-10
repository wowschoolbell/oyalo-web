import { createSlice } from "@reduxjs/toolkit";
import entryApis from "../../api/entryApis";

const initialState = {
  gettingEntryTypes: false,
  getEntryTypeResponse: {},
  getEntryTypeError: {},
  savingEntryTypes: false,
  gettingApproval: false,
  getApprovalList: {},
  gettingCapa: false,
  getCapaList: {},
  AuditEntry: false,
  getAuditEntry: {},
  gettingApprovalReport: false,
  gettingUserApprovalReport: false,
  getApprovalReport: {},
  getUserData: {},
  getUserRankData: {},
};
const entrySlice = createSlice({
  name: "entry",
  initialState,
  reducers: {
    getEntryTypeRequest: (state) => {
      state.gettingEntryTypes = true;
    },
    getEntryTypeResponse: (state, action) => {
      state.gettingEntryTypes = false;
      state.getEntryTypeResponse = action.payload;
    },
    getEntryTypeError: (state, action) => {
      state.gettingEntryTypes = false;
      state.getEntryTypeError = action.payload;
    },
    saveAddAuditEntryRequest: (state) => {
      state.savingEntry = true;
    },
    saveAddAuditEntryResponse: (state) => {
      state.savingEntry = false;
    },
    saveAddAuditEntryError: (state) => {
      state.savingEntry = false;
    },
    getApprovalRequest: (state) => {
      state.gettingApproval = true;
    },
    getApprovalResponse: (state, action) => {
      state.gettingApproval = false;
      state.getApprovalList = action.payload;
    },
    getApprovalError: (state) => {
      state.gettingApproval = false;
    },
    getCapaRequest: (state) => {
      state.gettingCapa = true;
    },
    getCapaResponse: (state, action) => {
      state.gettingCapa = false;
      state.getCapaList = action.payload;
    },
    getCapaError: (state) => {
      state.gettingCapa = false;
    },
    getAuditEntryRequest: (state) => {
      state.gettingAuditEntry = true;
    },
    getAuditEntryResponse: (state, action) => {
      state.gettingAuditEntry = false;
      state.getAuditEntry = action.payload;
    },
    getAuditEntryError: (state) => {
      state.gettingAuditEntry = false;
    },
    getApprovalReportRequest: (state) => {
      state.gettingApprovalReport = true;
    },
    getApprovalReportResponse: (state, action) => {
      state.gettingApprovalReport = false;
      state.getApprovalReport = action.payload;
    },
    getApprovalReportError: (state) => {
      state.gettingApprovalReport = false;
    },
    getUserApprovalReportRequest: (state) => {
      state.gettingUserApprovalReport = true;
    },
    getUserFetchData: (state, action) => {
      state.getUserData = action.payload;
    },
    getUserRank: (state, action) => {
      state.getUserRankData = action.payload;
    },
  },
});

export const AuthAction = entrySlice.actions;
export default entrySlice.reducer;

export const getAuditType =
  ({ data }) =>
  async (dispatch) => {
    dispatch(entrySlice.actions.getEntryTypeRequest());
    return entryApis
      .getEntryType({ data })
      .then(({ data }) => {
        const {
          data: { data: auditType, total_mark },
          ...rest
        } = data;

        dispatch(
          entrySlice.actions.getEntryTypeResponse({
            data: { ...auditType, total_mark },
            ...rest,
          })
        );
        return data;
      })
      .catch(() => {
        dispatch(entrySlice.actions.getEntryTypeError());
      });
  };

export const addAuditEntry =
  ({ data }) =>
  async (dispatch) => {
    dispatch(entrySlice.actions.saveAddAuditEntryRequest());
    return entryApis
      .addAuditEntry({ data })
      .then(({ data }) => {
        dispatch(entrySlice.actions.saveAddAuditEntryResponse({ data }));
        return data;
      })
      .catch(() => {
        dispatch(entrySlice.actions.saveAddAuditEntryError());
      });
  };

export const editAuditEntry =
  ({ data }) =>
  async (dispatch) => {
    dispatch(entrySlice.actions.saveAddAuditEntryRequest());
    return entryApis
      .editAuditEntry({ data })
      .then(({ data }) => {
        dispatch(entrySlice.actions.saveAddAuditEntryResponse({ data }));
        return data;
      })
      .catch(() => {
        dispatch(entrySlice.actions.saveAddAuditEntryError());
      });
  };

export const getApproval = (req) => async (dispatch) => {
  dispatch(entrySlice.actions.getApprovalRequest());
  return entryApis
    .getApproval(req)
    .then(({ data }) => {
      const { data: approvalData, ...resatOfData } = data;

      console.log(approvalData, "approvalData");
      const onlyCapaPassRecord = approvalData?.filter(
        (e) => e.capa_status === "1" || e.status === "5"
      );
      // console.log(onlyCapaPassRecord, "onlyCapaPassRecord");
      dispatch(
        entrySlice.actions.getApprovalResponse({
          data: onlyCapaPassRecord,
          ...resatOfData,
        })
      );
      return data;
    })
    .catch(() => {
      dispatch(entrySlice.actions.getApprovalError());
    });
};

export const getCapa = (req) => async (dispatch) => {
  dispatch(entrySlice.actions.getCapaRequest());
  return entryApis
    .getCapa(req)
    .then(({ data }) => {
      const { data: capaList, ...restOfData } = data;
      const filterByApprovedStatus = (capaList ?? [])?.filter(
        (e) => e.capa_status === "0"
      );
      dispatch(
        entrySlice.actions.getCapaResponse({
          data: filterByApprovedStatus,
          ...restOfData,
        })
      );
      return data;
    })
    .catch(() => {
      dispatch(entrySlice.actions.getCapaError());
    });
};

export const getAuditEntry = (req_data) => async (dispatch) => {
  dispatch(entrySlice.actions.getAuditEntryRequest());
  return entryApis
    .getAuditEntry(req_data)
    .then(({ data }) => {
      dispatch(entrySlice.actions.getAuditEntryResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(entrySlice.actions.getAuditEntryError());
    });
};

export const getApprovalReport = (req) => async (dispatch) => {
  dispatch(entrySlice.actions.getApprovalReportRequest());
  return entryApis
    .getApprovalReport(req)
    .then(({ data }) => {
      dispatch(entrySlice.actions.getApprovalReportResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(entrySlice.actions.getApprovalReportError());
    });
};
