import client from './client';

const limit = 400;
const offset = 0;

//subMaster
const addServiceFor = ({ data }) => client.post('add-servicefor', data, {});
const getServiceFor = () => client.get('get-servicefor', { limit, offset }, {});
const updateServiceFor = ({ data }) => client.post('update-servicefor', data, {});

const addAssetGroup = ({ data }) => client.post('add-asset-group', data, {});
const getAssetGroup = () => client.get('get-asset-group', { limit, offset }, {});
const updateAssetGroup = ({ data }) => client.post('update-asset-group', data, {});

const addServiceCategory = ({ data }) => client.post('add-service-category', data, {});
const getServiceCategory = () => client.get('get-service-category', { limit, offset }, {});
const updateServiceCategory = ({ data }) => client.post('update-service-category', data, {});

const addPriority = ({ data }) => client.post('add-priority', data, {});
const getPriority = () => client.get('get-priority', { limit, offset }, {});
const updatePriority = ({ data }) => client.post('update-priority', data, {});

const addTypeOfService = ({ data }) => client.post('add-typeOfService', data, {});
const getTypeOfService = () => client.get('get-typeOfService', { limit, offset }, {});
const updateTypeOfService = ({ data }) => client.post('update-typeOfService', data, {});

const addWorkDone = ({ data }) => client.post('add-work-done', data, {});
const getWorkDone = () => client.get('get-work-done', { limit, offset }, {});
const updateWorkDone = ({ data }) => client.post('update-work-done', data, {});

const addModeOfPayment = ({ data }) => client.post('add-modeOfPayment', data, {});
const getModeOfPayment = () => client.get('get-modeOfPayment', { limit, offset }, {});
const updateModeOfPayment = ({ data }) => client.post('update-modeOfPayment', data, {});

const addAssetGroupIssue = ({ data }) => client.post('add-asset-group-issue', data, {});
const getAssetGroupIssue = () => client.get('get-asset-group-issue', { limit, offset }, {});
const updateAssetGroupIssue = ({ data }) => client.post('update-asset-group-issue', data, {});

const addAssetMaster = ({ data }) => client.post('add-asset-master', data, {});
const getAssetMaster = () => client.get('get-asset-master', { limit, offset }, {});
const updateAssetMaster = ({ data }) => client.post('update-asset-master', data, {});

const addNewAssetMaster = ({ data }) => client.post('add-new-asset-master', data, {});
const getNewAssetMaster = () => client.get('get-new-asset-master', { limit, offset }, {});
const updateNewAssetMaster = ({ data }) => client.post('update-new-asset-master', data, {});

const addAssetGroupSpare = ({ data }) => client.post('add-asset-group-spare', data, {});
const getAssetGroupSpare = () => client.get('get-asset-group-spare', { limit, offset }, {});
const updateAssetGroupSpare = ({ data }) => client.post('update-asset-group-spare', data, {});


const addVendorMaster = ({ data }) => client.post('add-vendor-master', data, {});
const getVendorMaster = () => client.get('get-vendor-master', { limit, offset }, {});
const updateVendorMaster = ({ data }) => client.post('update-vendor-master', data, {});

const addGlAccount = ({ data }) => client.post('add-GLAccount', data, {});
const getGlAccount = () => client.get('get-GLAccount', { limit, offset }, {});
const updateGlAccount = ({ data }) => client.put('update-GLAccount', data, {});

const addTickets = ({ data }) => client.post('add-tickets', data, {});
const getTickets = () => client.get('get-tickets', { limit, offset }, {});
const updateTickets = ({ data }) => client.post('update-tickets', data, {});
const closeTickets = ({ data }) => client.post('delete-tickets-dat?ticket_id=' + data.id, data, {});


const getTicketForHadling = ({ type }) => client.get('get-ticket-handling', { limit, offset, type }, {});
const updateTicketHandling = ({ data }) => client.post('update-ticket-handling', data, {});
const updateOHTicketHandling = ({ data }) => client.post('update-po-ticket-update', data, {});

const updateOHTicketHandlingStatus = ({ data }) => client.post('update-oh-ticket-update', data, {});

const serviceApi = {
  addServiceFor,
  getServiceFor,
  updateServiceFor,
  addAssetGroup,
  getAssetGroup,
  updateAssetGroup,
  addServiceCategory,
  getServiceCategory,
  updateServiceCategory,
  addPriority,
  getPriority,
  updatePriority,
  addTypeOfService,
  getTypeOfService,
  updateTypeOfService,
  addWorkDone,
  getWorkDone,
  updateWorkDone,
  addModeOfPayment,
  getModeOfPayment,
  updateModeOfPayment,
  addGlAccount,
  getGlAccount,
  updateGlAccount,
  addAssetGroupIssue,
  getAssetGroupIssue,
  updateAssetGroupIssue,
  addAssetGroupSpare,
  getAssetGroupSpare,
  updateAssetGroupSpare,
  addAssetMaster,
  getAssetMaster,
  updateAssetMaster,
  addNewAssetMaster,
  getNewAssetMaster,
  updateNewAssetMaster,
  addVendorMaster,
  getVendorMaster,
  updateVendorMaster,
  addTickets,
  getTickets,
  updateTickets,
  closeTickets,
  getTicketForHadling,
  updateTicketHandling,
  updateOHTicketHandling,
  updateOHTicketHandlingStatus,
}

export default serviceApi;