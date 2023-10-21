import { DozerProvider } from '@dozerjs/dozer-react';
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { CountEvent } from './routes/CountEvent';
import { Endpoints } from './routes/Endpoints';
import { Common } from './routes/Common';
import { QueryEvent } from './routes/QueryEvent';

function App() {
  return (
    <DozerProvider value={{
      serverAddress: 'http://127.0.0.1:62998'
    }}>
      <BrowserRouter>
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <NavBar />
          <Box sx={{ flex: '1', minHeight: '0', padding: '1.5rem' }}>
            <Routes>
              <Route element={<Common />} index />
              <Route element={<CountEvent />} path={'count-event'} />
              <Route element={<QueryEvent />} path={'query-event'} />
              <Route element={<Endpoints />} path={'endpoints'} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </DozerProvider>
  )
}

export default App
