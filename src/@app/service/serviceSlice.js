import {createSlice} from '@reduxjs/toolkit';
import apis from '../../api/serviceAPIs';

const initialState = {
  savingServiceFor: false,
  saveServiceForResponse: {},
  saveServiceForError: {},
  gettingServiceFor: false,
  getServiceForResponse: {},
  getServiceForError: {},
  savingAssetGroup: false,
  saveAssetGroupResponse: {},
  saveAssetGroupError: {},
  gettingAssetGroup: false,
  getAssetGroupResponse: {},
  getAssetGroupError: {}
};

export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    saveServiceForRequest: (state) => {
      state.savingServiceFor = true;
    },
    saveServiceForResponse: (state, action) => {
      state.savingServiceFor = false;
      state.saveServiceForResponse = action.payload;
    },
    saveServiceForError: (state, action) => {
      state.savingServiceFor = false;
      state.saveServiceForError = action.payload;
    },

    getServiceForRequest: (state) => {
      state.gettingServiceFor = true;
    },
    getServiceForResponse: (state, action) => {
      state.gettingServiceFor = false;
      state.getServiceForResponse = action.payload;
    },
    getServiceForError: (state, action) => {
      state.gettingServiceFor = false;
      state.getServiceForError = action.payload;
    },

    updateServiceForRequest: (state) => {
      state.savingServiceFor = true;
    },
    updateServiceForResponse: (state, action) => {
      state.savingServiceFor = false;
      state.saveServiceForResponse = action.payload;
    },
    updateServiceForError: (state, action) => {
      state.savingServiceFor = false;
      state.saveServiceForError = action.payload;
    },

    ///
    saveAssetGroupRequest: (state) => {
      state.savingAssetGroup = true;
    },
    saveAssetGroupResponse: (state, action) => {
      state.savingAssetGroup = false;
      state.saveAssetGroupResponse = action.payload;
    },
    saveAssetGroupError: (state, action) => {
      state.savingAssetGroup = false;
      state.saveAssetGroupError = action.payload;
    },

    getAssetGroupRequest: (state) => {
      state.gettingAssetGroup = true;
    },
    getAssetGroupResponse: (state, action) => {
      state.gettingAssetGroup = false;
      state.getAssetGroupResponse = action.payload;
    },
    getAssetGroupError: (state, action) => {
      state.gettingAssetGroup = false;
      state.getAssetGroupError = action.payload;
    },

    updateAssetGroupRequest: (state) => {
      state.savingAssetGroup = true;
    },
    updateAssetGroupResponse: (state, action) => {
      state.savingAssetGroup = false;
      state.saveAssetGroupResponse = action.payload;
    },
    updateAssetGroupError: (state, action) => {
      state.savingAssetGroup = false;
      state.saveAssetGroupError = action.payload;
    }
  }
});

export default serviceSlice.reducer;

// Actions
export const saveServiceFor =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.saveServiceForRequest());
    return apis
      .addServiceFor({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.saveServiceForResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.saveServiceForError());
      });
  };

export const getServiceFor = () => async (dispatch) => {
  dispatch(serviceSlice.actions.getServiceForRequest());
  return apis
    .getServiceFor()
    .then(({data}) => {
      dispatch(serviceSlice.actions.getServiceForResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(serviceSlice.actions.getServiceForError());
    });
};

export const updateServiceFor =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.updateServiceForRequest());
    return apis
      .updateServiceFor({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.updateServiceForResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.updateServiceForError());
      });
  };

//////////////////////////////
export const saveAssetGroup =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.saveAssetGroupRequest());
    return apis
      .addAssetGroup({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.saveAssetGroupResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.saveAssetGroupError());
      });
  };

export const getAssetGroup = () => async (dispatch) => {
  dispatch(serviceSlice.actions.getAssetGroupRequest());
  return apis
    .getAssetGroup()
    .then(({data}) => {
      dispatch(serviceSlice.actions.getAssetGroupResponse(data));
      return data;
    })
    .catch(() => {
      dispatch(serviceSlice.actions.getAssetGroupError());
    });
};

export const updateAssetGroup =
  ({data}) =>
  async (dispatch) => {
    dispatch(serviceSlice.actions.updateAssetGroupRequest());
    return apis
      .updateAssetGroup({data})
      .then(async ({data}) => {
        await dispatch(serviceSlice.actions.updateAssetGroupResponse(data));
        return data;
      })
      .catch(() => {
        dispatch(serviceSlice.actions.updateAssetGroupError());
      });
  };
