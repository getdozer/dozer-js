import { types_pb } from '@dozerjs/dozer';
import { DozerProvider, useDozerWatch } from '@dozerjs/dozer-react';
import { DozerTable } from './DataTable';
import { Box } from '@mui/material';


function Endpoints () {
  const options = [
    {
      endpoint: 'trips_cache',
      eventType: types_pb.EventType.ALL,
    },
  ];

  const { stream } = useDozerWatch(options);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    }}>
      {
        options.map(option => <DozerTable key={option.endpoint} stream={stream} endpoint={option.endpoint}/>)
      }
    </Box>
  )
}

function App() {
  return (
    <DozerProvider value={{
      serverAddress: 'http://127.0.0.1:62998'
    }}>
      <Endpoints />
    </DozerProvider>
  )
}

export default App
