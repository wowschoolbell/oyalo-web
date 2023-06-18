import { parseISO, format } from 'date-fns';

export let column = (handleUpdate = () => false) => ([
  { key: '1', headerName: 'S.No', field: 'S.No', hide: false, width: 70 },
  { key: '3', headerName: 'Outlet Name', field: 'outlet_name', hide: false, width: 150 },
  { key: '9', headerName: 'Ticket Creation Date', field: 'created_at', hide: false, width: 180, valueGetter: (params) => format(parseISO(params.row.created_at), 'dd-MM-yyyy hh:mm aa') },
  { key: '2', headerName: 'Ticket No', field: 'ticket_no', hide: false, width: 200 },
  { key: '5', headerName: 'Workdone', field: 'workdone', hide: false, width: 160 },
  { key: '4', headerName: 'Value for Spare Material', field: 'spend_amount', hide: false, width: 180 },
  { key: '6', headerName: 'Advance', field: 'advance', hide: false, width: 180, valueGetter: (params) => parseInt(params.row.spend_amount) * (parseFloat(params.row.advance_percentage)/100) },
  { key: '10', headerName: 'Aging Days', field: 'aging_days', hide: false, width: 130 },
  {
    key: '11', headerName: 'Actions', field: 'btnfields', hide: false, width: 180, renderCell: (params) => {
      return <button className='orangeFactory btn' onClick={() => handleUpdate(params.row)}>
        Update
      </button>
    },
  },
  { key: '10', headerName: 'Remarks', field: 'remarks', hide: false, width: 130 },
]);