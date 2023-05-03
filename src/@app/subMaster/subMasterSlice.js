import { createSlice } from '@reduxjs/toolkit';
import { filter } from 'ramda';
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

  savingCity: false,
  saveCityResponse: {},
  saveCityError: {},

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
  saveEmployeeLevelError: {}
};

export const subMasterSlice = createSlice( {
  name: 'subMaster',
  initialState,
  reducers: {
    saveStateRequest: ( state ) => {
      state.savingState = true;
    },
    saveStateResponse: ( state, action ) => {
      state.savingState = false;
      state.saveStateResponse = action.payload;
    },
    saveStateError: ( state, action ) => {
      state.savingState = false;
      state.saveStateError = action.payload;
    },
    getStatesRequest: ( state ) => {
      state.gettingState = true;
    },
    getStatesResponse: ( state, action ) => {
      state.gettingState = false;
      state.getStatesResponse = action.payload;
    },
    getStatesError: ( state, action ) => {
      state.gettingState = false;
      state.getStatesError = action.payload;
    },

    saveZonalRequest: ( state ) => {
      state.savingZonal = true;
    },
    saveZonalResponse: ( state, action ) => {
      state.savingZonal = false;
      state.saveZonalResponse = action.payload;
    },
    saveZonalError: ( state, action ) => {
      state.savingZonal = false;
      state.saveZonalError = action.payload;
    },
    getZonalRequest: ( state ) => {
      state.gettingZonal = true;
    },
    getZonalResponse: ( state, action ) => {
      state.gettingZonal = false;
      state.getZonalResponse = action.payload;
    },
    getZonalError: ( state, action ) => {
      state.gettingZonal = false;
      state.getZonalError = action.payload;
    },
    saveSubZonalRequest: ( state ) => {
      state.savingSubZonal = true;
    },
    saveSubZonalResponse: ( state, action ) => {
      state.savingSubZonal = false;
      state.saveSubZonalResponse = action.payload;
    },
    saveSubZonalError: ( state, action ) => {
      state.savingSubZonal = false;
      state.saveSubZonalError = action.payload;
    },
    getSubZonalRequest: ( state ) => {
      state.gettingSubZonal = true;
    },
    getSubZonalResponse: ( state, action ) => {
      state.gettingSubZonal = false;
      state.getSubZonalResponse = action.payload;
    },
    getSubZonalError: ( state, action ) => {
      state.gettingSubZonal = false;
      state.getSubZonalError = action.payload;
    },
    saveCityRequest: ( state ) => {
      state.savingCity = true;
    },
    saveCityResponse: ( state, action ) => {
      state.savingCity = false;
      state.saveCityResponse = action.payload;
    },
    saveCityError: ( state, action ) => {
      state.savingCity = false;
      state.saveCityError = action.payload;
    },

    getCityRequest: ( state ) => {
      state.gettingCity = true;
    },
    getCityResponse: ( state, action ) => {
      state.gettingCity = false;
      state.getCityResponse = action.payload;
    },
    getCityError: ( state, action ) => {
      state.gettingCity = false;
      state.getCityError = action.payload;
    },

    saveDivisionRequest: ( state ) => {
      state.savingDivision = true;
    },
    saveDivisionResponse: ( state, action ) => {
      state.savingDivision = false;
      state.saveDivisionResponse = action.payload;
    },
    saveDivisionError: ( state, action ) => {
      state.savingDivision = false;
      state.saveDivisionError = action.payload;
    },
    getDivisionRequest: ( state ) => {
      state.gettingDivision = true;
    },
    getDivisionResponse: ( state, action ) => {
      state.gettingDivision = false;
      state.getDivisionResponse = action.payload;
    },
    getDivisionError: ( state, action ) => {
      state.gettingDivision = false;
      state.getDivisionError = action.payload;
    },
    getDepartmentRequest: ( state ) => {
      state.gettingDepartment = true;
    },
    getDepartmentResponse: ( state, action ) => {
      state.gettingDepartment = false;
      state.getDepartmentResponse = action.payload;
    },
    getDepartmentError: ( state, action ) => {
      state.gettingDepartment = false;
      state.getDepartmentError = action.payload;
    },
    saveDepartmentRequest: ( state ) => {
      state.savingDepartment = true;
    },
    saveDepartmentResponse: ( state, action ) => {
      state.savingDepartment = false;
      state.saveDepartmentResponse = action.payload;
    },
    saveDepartmentError: ( state, action ) => {
      state.savingDepartment = false;
      state.saveDepartmentError = action.payload;
    },
    getDesignationRequest: ( state ) => {
      state.gettingDesignation = true;
    },
    getDesignationResponse: ( state, action ) => {
      state.gettingDesignation = false;
      state.getDesignationResponse = action.payload;
    },
    getDesignationError: ( state, action ) => {
      state.gettingDesignation = false;
      state.getDesignationError = action.payload;
    },
    saveDesignationRequest: ( state ) => {
      state.savingDesignation = true;
    },
    saveDesignationResponse: ( state, action ) => {
      state.savingDesignation = false;
      state.saveDesignationResponse = action.payload;
    },
    saveDesignationError: ( state, action ) => {
      state.savingDesignation = false;
      state.saveDesignationError = action.payload;
    },
    getEmployeeLevelRequest: ( state ) => {
      state.gettingEmployeeLevel = true;
    },
    getEmployeeLevelResponse: ( state, action ) => {
      state.gettingEmployeeLevel = false;
      state.getEmployeeLevelResponse = action.payload;
    },
    getEmployeeLevelError: ( state, action ) => {
      state.gettingEmployeeLevel = false;
      state.getEmployeeLevelError = action.payload;
    },
    saveEmployeeLevelRequest: ( state ) => {
      state.savingEmployeeLevel = true;
    },
    saveEmployeeLevelResponse: ( state, action ) => {
      state.savingEmployeeLevel = false;
      state.saveEmployeeLevelResponse = action.payload;
    },
    saveEmployeeLevelError: ( state, action ) => {
      state.savingEmployeeLevel = false;
      state.saveEmployeeLevelError = action.payload;
    }
  }
} );
export default subMasterSlice.reducer;

// Actions
export const saveState =
  ( { data } ) =>
    async ( dispatch ) => {
      dispatch( subMasterSlice.actions.saveStateRequest() );
      return apis
        .addState( { data } )
        .then( async ( { data } ) => {
          await dispatch( subMasterSlice.actions.saveStateResponse( data ) );
          messageToast( { message: data?.message ?? data?.statusText, status: data?.status, title: 'State Master' } );
          return data;
        } )
        .catch( () => {
          dispatch( subMasterSlice.actions.saveStateError() );
        } );
    };

export const updateState =
  ( { data } ) =>
    async ( dispatch ) => {
      dispatch( subMasterSlice.actions.saveStateRequest() );
      return apis
        .updateState( { data } )
        .then( ( { data } ) => {
          dispatch( subMasterSlice.actions.saveStateResponse( data ) );
          messageToast( { message: data?.message ?? data?.statusText, status: data.status, title: 'State Master' } );

          return data;
        } )
        .catch( () => {
          dispatch( subMasterSlice.actions.saveStateError() );
        } );
    };

export const getStates = () => async ( dispatch ) => {
  dispatch( subMasterSlice.actions.getStatesRequest() );
  return apis
    .getStates()
    .then( ( { data } ) => {
      dispatch( subMasterSlice.actions.getStatesResponse( data ) );
      return data;
    } )
    .catch( () => {
      dispatch( subMasterSlice.actions.getStatesError() );
    } );
};

export const saveZonal =
  ( { data } ) =>
    async ( dispatch ) => {
      dispatch( subMasterSlice.actions.saveZonalRequest() );
      return apis
        .addZonal( { data } )
        .then( ( { data } ) => {
          dispatch( subMasterSlice.actions.saveZonalResponse( data ) );
          messageToast( { message: data?.message ?? data?.statusText, status: data.status, title: 'Zone Master' } );
          return data;
        } )
        .catch( () => {
          dispatch( subMasterSlice.actions.saveZonalError() );
        } );
    };

export const updateZonal =
  ( { data } ) =>
    async ( dispatch ) => {
      dispatch( subMasterSlice.actions.saveZonalRequest() );
      return apis
        .updateZonal( { data } )
        .then( ( { data } ) => {
          dispatch( subMasterSlice.actions.saveZonalResponse( data ) );
          messageToast( { message: data?.message ?? data?.statusText, status: data.status, title: 'Zone Master' } );
          return data;
        } )
        .catch( () => {
          dispatch( subMasterSlice.actions.saveZonalError() );
        } );
    };

export const getZonal = ( stateID ) => async ( dispatch ) => {
  dispatch( subMasterSlice.actions.getZonalRequest() );
  return apis
    .getZonal()
    .then( ( { data } ) => {
      const { data: zonal, ...rest } = data;
      const filterByStateId = filter( ( e ) => ( stateID ? e.state_id === stateID : true ), zonal ? zonal : [] );
      dispatch( subMasterSlice.actions.getZonalResponse( { data: filterByStateId, ...rest } ) );
      return data;
    } )
    .catch( () => {
      dispatch( subMasterSlice.actions.getZonalError() );
    } );
};

export const saveSubZonal =
  ( { data } ) =>
    async ( dispatch ) => {
      dispatch( subMasterSlice.actions.saveSubZonalRequest() );
      return apis
        .addSubZonal( { data } )
        .then( ( { data } ) => {
          dispatch( subMasterSlice.actions.saveSubZonalResponse( data ) );
          return data;
        } )
        .catch( () => {
          dispatch( subMasterSlice.actions.saveSubZonalError() );
        } );
    };

export const updateSubZonal =
  ( { data } ) =>
    async ( dispatch ) => {
      dispatch( subMasterSlice.actions.saveSubZonalRequest() );
      return apis
        .updateSubZonal( { data } )
        .then( ( { data } ) => {
          dispatch( subMasterSlice.actions.saveSubZonalResponse( data ) );
          return data;
        } )
        .catch( () => {
          dispatch( subMasterSlice.actions.saveSubZonalError() );
        } );
    };

export const getSubZonal = ( zoneID ) => async ( dispatch ) => {
  dispatch( subMasterSlice.actions.getSubZonalRequest() );
  return apis
    .getSubZonal()
    .then( ( { data } ) => {
      const { data: zonal, ...rest } = data;
      const filterByStateId = filter( ( e ) => ( zoneID ? e.zonal_id === zoneID : true ), zonal ? zonal : [] );
      dispatch( subMasterSlice.actions.getSubZonalResponse( { data: filterByStateId, ...rest } ) );
      return data;
    } )
    .catch( () => {
      dispatch( subMasterSlice.actions.getSubZonalError() );
    } );
};

export const saveCity =
  ( { data } ) =>
    async ( dispatch ) => {
      dispatch( subMasterSlice.actions.saveCityRequest() );
      return apis
        .setCity( { data } )
        .then( ( { data } ) => {
          dispatch( subMasterSlice.actions.saveCityResponse( data ) );
          return data;
        } )
        .catch( () => {
          dispatch( subMasterSlice.actions.saveCityError() );
        } );
    };

export const updateCity =
  ( { data } ) =>
    async ( dispatch ) => {
      dispatch( subMasterSlice.actions.saveCityRequest() );
      return apis
        .updateCity( { data } )
        .then( ( { data } ) => {
          dispatch( subMasterSlice.actions.saveCityResponse( data ) );
          return data;
        } )
        .catch( () => {
          dispatch( subMasterSlice.actions.saveCityError() );
        } );
    };

export const getCity = () => async ( dispatch ) => {
  dispatch( subMasterSlice.actions.getCityRequest() );
  return apis
    .getCity()
    .then( ( { data } ) => {
      dispatch( subMasterSlice.actions.getCityResponse( data ) );
      return data;
    } )
    .catch( () => {
      dispatch( subMasterSlice.actions.getCityError() );
    } );
};

export const saveDivision =
  ( { data } ) =>
    async ( dispatch ) => {
      dispatch( subMasterSlice.actions.saveDivisionRequest() );
      return apis
        .addDivision( { data } )
        .then( ( { data } ) => {
          dispatch( subMasterSlice.actions.saveDivisionResponse( data ) );
          return data;
        } )
        .catch( () => {
          dispatch( subMasterSlice.actions.saveDivisionError() );
        } );
    };

export const updateDivision =
  ( { data } ) =>
    async ( dispatch ) => {
      dispatch( subMasterSlice.actions.saveDivisionRequest() );
      return apis
        .updateDivision( { data } )
        .then( ( { data } ) => {
          dispatch( subMasterSlice.actions.saveDivisionResponse( data ) );
          return data;
        } )
        .catch( () => {
          dispatch( subMasterSlice.actions.saveDivisionError() );
        } );
    };

export const getDivision = () => async ( dispatch ) => {
  dispatch( subMasterSlice.actions.getDivisionRequest() );
  return apis
    .getDivision()
    .then( ( { data } ) => {

      dispatch( subMasterSlice.actions.getDivisionResponse( data ) );
      return data;
    } )
    .catch( () => {
      dispatch( subMasterSlice.actions.getDivisionError() );
    } );
};

export const getDepartment = () => async ( dispatch ) => {
  dispatch( subMasterSlice.actions.getDepartmentRequest() );
  return apis
    .getDepartment()
    .then( ( { data } ) => {
      dispatch( subMasterSlice.actions.getDepartmentResponse( data ) );
      return data;
    } )
    .catch( () => {
      dispatch( subMasterSlice.actions.getDepartmentError() );
    } );
};

export const saveDepartment =
  ( { data } ) =>
    async ( dispatch ) => {
      dispatch( subMasterSlice.actions.saveDepartmentRequest() );
      return apis
        .addDepartment( { data } )
        .then( ( { data } ) => {
          dispatch( subMasterSlice.actions.saveDepartmentResponse( data ) );
          return data;
        } )
        .catch( () => {
          dispatch( subMasterSlice.actions.saveDepartmentError() );
        } );
    };

export const updateDepartment =
  ( { data } ) =>
    async ( dispatch ) => {
      dispatch( subMasterSlice.actions.saveDepartmentRequest() );
      return apis
        .updateDepartment( { data } )
        .then( ( { data } ) => {
          dispatch( subMasterSlice.actions.saveDepartmentResponse( data ) );
          return data;
        } )
        .catch( () => {
          dispatch( subMasterSlice.actions.saveDepartmentError() );
        } );
    };

export const getDesignation = () => async ( dispatch ) => {
  dispatch( subMasterSlice.actions.getDesignationRequest() );
  return apis
    .getDesignation()
    .then( ( { data } ) => {
      dispatch( subMasterSlice.actions.getDesignationResponse( data ) );
      return data;
    } )
    .catch( () => {
      dispatch( subMasterSlice.actions.getDesignationError() );
    } );
};

export const saveDesignation =
  ( { data } ) =>
    async ( dispatch ) => {
      dispatch( subMasterSlice.actions.saveDesignationRequest() );
      return apis
        .addDesignation( { data } )
        .then( ( { data } ) => {
          dispatch( subMasterSlice.actions.saveDesignationResponse( data ) );
          return data;
        } )
        .catch( () => {
          dispatch( subMasterSlice.actions.saveDesignationError() );
        } );
    };

export const updateDesignation =
  ( { data } ) =>
    async ( dispatch ) => {
      dispatch( subMasterSlice.actions.saveDesignationRequest() );
      return apis
        .updateDesignation( { data } )
        .then( ( { data } ) => {
          dispatch( subMasterSlice.actions.saveDesignationResponse( data ) );
          return data;
        } )
        .catch( () => {
          dispatch( subMasterSlice.actions.saveDesignationError() );
        } );
    };
export const getEmployeeLevel = () => async ( dispatch ) => {
  dispatch( subMasterSlice.actions.getEmployeeLevelRequest() );
  return apis
    .getEmployeeLevel()
    .then( ( { data } ) => {
      dispatch( subMasterSlice.actions.getEmployeeLevelResponse( data ) );
      return data;
    } )
    .catch( () => {
      dispatch( subMasterSlice.actions.getEmployeeLevelError() );
    } );
};

export const updateEmployeeLevel =
  ( { data } ) =>
    async ( dispatch ) => {
      dispatch( subMasterSlice.actions.saveEmployeeLevelRequest() );
      return apis
        .updateEmployeeLevel( { data } )
        .then( ( { data } ) => {
          dispatch( subMasterSlice.actions.saveEmployeeLevelResponse( data ) );
          return data;
        } )
        .catch( () => {
          dispatch( subMasterSlice.actions.saveEmployeeLevelError() );
        } );
    };

export const saveEmployeeLevel =
  ( { data } ) =>
    async ( dispatch ) => {
      dispatch( subMasterSlice.actions.saveEmployeeLevelRequest() );
      return apis
        .addEmployeeLevel( { data } )
        .then( ( { data } ) => {
          dispatch( subMasterSlice.actions.saveEmployeeLevelResponse( data ) );
          return data;
        } )
        .catch( () => {
          dispatch( subMasterSlice.actions.saveEmployeeLevelError() );
        } );
    };
