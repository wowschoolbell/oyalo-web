import React from 'react';
import {useNavigate} from 'react-router';
import CustomTable from '../../../components/CustomTable';
import {useSelector} from 'react-redux';

function CreateTicket() {
  // const dispatch = useDispatch();

  const navigate = useNavigate();

  const onClickAdd = () => {
    navigate('/createTicket/addForm');
  };

  const {
    gettingOutletMaster
    // getOutletMasterResponse: {data: dataSource}
  } = useSelector((state) => {
    return state.master;
  });

  const handleEditClick = (data) => {
    navigate('/createTicket/showForm', {
      state: {data}
    });
  };

  //   useEffect( () => {
  //     dispatch( getOutletMaster() );
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [] );
  let column = [
    {key: '1', headerName: 'SNo', field: 'SNo', hide: false, width: 70},
    {key: '2', headerName: 'Ticket No', field: 'ticketNo', hide: false, width: 300},
    {key: '3', headerName: 'Asset Group', field: 'assetGroup', hide: false, width: 180},
    {key: '4', headerName: 'Asset', field: 'asset', hide: false, width: 180},
    {key: '5', headerName: 'Service For', field: 'serviceFor', hide: false, width: 180},
    {key: '6', headerName: 'Ticket Status', field: 'ticketStatus', hide: false, width: 180},
    {key: '7', headerName: 'Current Status', field: 'currentStatus', hide: false, width: 180},
    {key: '8', headerName: 'Creation Date', field: 'creationDate', hide: false, width: 180},
    {key: '9', headerName: 'Ageing Days', field: 'ageingDays', hide: false, width: 180}
  ];

  const data = [
    {
      SNo: '0.738800798388459',
      ticketNo: '0.344545632130673',
      assetGroup: '0.31401690349812195',
      asset: '0.3041391696521716',
      serviceFor: 'IT',
      ticketStatus: '0.0008051642659738789',
      currentStatus: '0.685970168269374',
      creationDate: '0.5667665296799829',
      ageingDays: '0.030456688837579904'
    }
  ];

  return (
    <div className='h-screen'>
      <CustomTable loading={gettingOutletMaster} dataSource={data} column={column} handleEditClick={handleEditClick} onClickAdd={onClickAdd} title={'Create List'} />
    </div>
  );
}

export default CreateTicket;
