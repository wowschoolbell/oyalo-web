import client from './client';

const limit = 400;
const offset = 0;

//subMaster
const addAuditCategory = ( { data } ) => client.post( 'add-audit-category', data, {} );
const getAuditCategory = () => client.get( 'get-audit-category', { limit, offset }, {} );
const updateAuditCategory = ( { data } ) => client.post( 'update-audit-category', data, {} );

const addAuditSubCategory = ( { data } ) => client.post( 'add-audit-subcategory', data, {} );
const getAuditSubCategory = () => client.get( 'get-audit-subcategory', { limit, offset }, {} );
const updateAuditSubCategory = ( { data } ) => client.post( 'update-audit-subcategory', data, {} );

const addAuditPointList = ( { data } ) => client.post( 'add-audit-pointlist', data, {} );
const getAuditPointList = () => client.get( 'get-audit-pointlist', { limit, offset }, {} );
const updateAuditPointList = ( { data } ) => client.post( 'update-audit-pointlist', data, {} );

const getRoleList = () => client.get( 'get-role-list', { limit, offset }, {} );
const addRoleMaster = ( { data } ) => client.post( 'add-role-master', data, {} );
const getRoleMaster = () => client.get( 'get-role-master', { limit, offset }, {} );

const getAuditPointMark = () => client.get( 'get-audit-pointmark', { limit, offset }, {} );
const addAuditPointMark = ( data ) => client.post( 'add-audit-pointmark', data, {} );
const updateAuditPointMark = ( data ) => client.post( 'update-audit-pointmark', data, {} );

const getAllCategory = () => client.post( 'all-category-list', { limit, offset }, {} );
// const addAuditPointMark = ( { data } ) => client.post( 'add-audit-pointmark', data, {} );
// const updateAuditPointMark = ( { data } ) => client.get( 'update-audit-pointmark', data, {} );


const masterApi = {
  addAuditCategory,
  getAuditCategory,
  updateAuditCategory,
  addAuditSubCategory,
  getAuditSubCategory,
  updateAuditSubCategory,
  updateAuditPointList,
  getAuditPointList,
  addAuditPointList,
  getRoleList,
  getRoleMaster,
  addRoleMaster,
  getAuditPointMark,
  addAuditPointMark,
  updateAuditPointMark,
  getAllCategory
};

export default masterApi;
