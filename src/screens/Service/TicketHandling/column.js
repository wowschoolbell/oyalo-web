import { parseISO, format } from 'date-fns';

export let column = (handleUpdate = () => false) => ([
  { key: '1', headerName: 'S.No', field: 'S.No', hide: false, width: 70 },
  { key: '2', headerName: 'Ticket No', field: 'ticket_no', hide: false, width: 200 },
  { key: '3', headerName: 'Outlet Name', field: 'outlet_name', hide: false, width: 150 },
  { key: '5', headerName: 'Service For', field: 'service_for', hide: false, width: 130 },
  { key: '4', headerName: 'Ticket Description', field: 'problem_description', hide: false, width: 180 },
  { key: '6', headerName: 'Asset Group', field: 'asset_group', hide: false, width: 180 },
  { key: '7', headerName: 'Ticket Status', field: 'ticket_status', hide: false, width: 220 },
  { key: '8', headerName: 'Payment status', field: 'Payment_status', hide: false, width: 130 },
  { key: '9', headerName: 'Ticket Date', field: 'created_at', hide: false, width: 180, valueGetter: (params) => format(parseISO(params.row.created_at), 'dd-MM-yyyy hh:mm aa') },
  { key: '10', headerName: 'Aging', field: 'aging_days', hide: false, width: 130 },
  {
    key: '11', headerName: 'Actions', field: 'btnfields', hide: false, width: 180, renderCell: (params) => {
      return <button className='orangeFactory btn' onClick={() => handleUpdate(params.row)}>
        Update
      </button>
    },
  }
]);