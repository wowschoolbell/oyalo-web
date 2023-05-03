import client from './client';

// const limit = 400;
// const offset = 0;

//Entry
const getEntryType = ( { data } ) => client.post( 'audit-type', data, {} );
const uploadEntryImage = ( form, { headers } ) => client.post( 'audit-entry-imageupload', form, { headers } );
const addAuditEntry = ( { data } ) => client.post( 'audit-entry', data, {} );

const getAuditEntry = ( { path, data } ) => client.post( path, data, {} );
const getApproval = ( { path, data } ) => client.post( path, data, {} );
const getCapa = ( { path, data } ) => client.post( path, data, {} );
const getApprovalReport = ( { path, data } ) => client.post( path, data, {} );

const entryCheck = ( { data } ) => client.post( 'add-approval-status', data, {} );

const capaSubmit = ( { data } ) => client.post( 'capa-submit', data, {} );
const editAuditEntry = ( { data } ) => client.post( 'edit-audit-entry', data, {} );
const editApproval = ( { data } ) => client.post( 'edit-approval', data, {} );

const entryApis = {
  getEntryType,
  uploadEntryImage,
  addAuditEntry,
  getApproval,
  getCapa,
  entryCheck,
  getAuditEntry,
  getApprovalReport,
  capaSubmit,
  editAuditEntry,
  editApproval
};

export default entryApis;
