import { createSlice } from '@reduxjs/toolkit';
import apis from '../../api/stateAPI';

const authSlice = createSlice( {
  name: 'auth',
  initialState: {
    statusget: false,
    loginStatus: false,
    userData: [],
    type: 1,
    error: '',
    badgeCount: { Master: {}, 'Sub Master': {}, Audit: {} }
  },
  reducers: {
    loginReq: ( state ) => {
      state.statusget = true;
      state.error = '';
    },
    loginFun( state, action ) {
      state.statusget = false;
      state.loginStatus = true;
      state.userData = action.payload;
      state.error = '';
    },
    loginError( state, action ) {
      state.statusget = false;
      state.error = action.payload;
    },
    logOutReq( state ) {
      state.loginStatus = false;
      state.error = '';
    },
    settype( state, action ) {
      state.type = action.payload;
    },
    setBadgeCount( state, action ) {
      state.badgeCount = action.payload;
    }
  }
} );

export const AuthAction = authSlice.actions;
export default authSlice.reducer;

export const getBadgeCount = () => async ( dispatch ) => {
  dispatch( authSlice.actions.setBadgeCount() );
  return apis.getBadgeCount().then( ( { data } ) => {
    dispatch( authSlice.actions.setBadgeCount( data ) );
    return data;
  } );
};

export const loginReducer =
  ( { data, api } ) =>
    async ( dispatch ) => {
      dispatch( authSlice.actions.loginReq() );
      const val = data.params;
      return apis
        .loginApi( val )
        .then( ( { data } ) => {
          dispatch( authSlice.actions.settype( val.type ) );
          if ( data.statusText === 'login success' ) {
            localStorage.setItem( 'loginStatus', true );
            if ( val.type === 1 ) dispatch( authSlice.actions.loginFun( data ) );
            else {
              const screen = data?.data?.employee_mapping?.module_Screen ?? [];
              if ( screen.length > 0 ) dispatch( authSlice.actions.loginFun( data ) );
              else dispatch( authSlice.actions.loginError( 'This user not allowed' ) );
              api.open( { message: 'This user not allowed', type: 'error' } );
            }
            dispatch( getBadgeCount() );
            return data;
          } else {
            dispatch( authSlice.actions.loginError( data.message ) );
            api.open( { message: data.message, type: 'error' } );
          }
        } )
        .catch( () => {
          dispatch( authSlice.actions.loginError( 'Login Failed' ) );
        } );
    };

export const logOutReducer = () => async ( dispatch ) => {
  dispatch( authSlice.actions.logOutReq() );
  localStorage.setItem( 'loginStatus', false );
};


// export default BuySlice;
