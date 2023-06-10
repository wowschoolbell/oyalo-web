import client from './client';

const limit = 400;
const offset = 0;

//subMaster
const addServiceFor = ( { data } ) => client.post( 'add-servicefor', data, {} );
const getServiceFor = () => client.get( 'get-servicefor', { limit, offset }, {} );
const updateServiceFor = ( { data } ) => client.post( 'update-servicefor', data, {} );

const addAssetGroup = ( { data } ) => client.post( 'add-asset-group', data, {} );
const getAssetGroup = () => client.get( 'get-asset-group', { limit, offset }, {} );
const updateAssetGroup = ( { data } ) => client.post( 'update-asset-group', data, {} );


const serviceApi = {
  addServiceFor,
  getServiceFor,
  updateServiceFor,
  addAssetGroup,
  getAssetGroup,
  updateAssetGroup
}

export default serviceApi;