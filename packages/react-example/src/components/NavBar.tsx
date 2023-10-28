import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function NavBar() {
  const routes = [
    {
      label: 'Common',
      path: '/',
    },
    {
      label: 'Count + Event',
      path: '/count-event',
    },
    {
      label: 'Query + Event',
      path: '/query-event',
    },
    {
      label: 'Endpoints',
      path: '/endpoints',
    },
  ];
  const location = useLocation();
  const index = routes.findIndex((route) => route.path === location.pathname);

  const [active, setActive] = React.useState<number>(index);


  return (
    <AppBar position="static">
      <Toolbar sx={{ gap: '2rem' }}>
        <img src="/logo.svg" alt="Dozer" width={137} height={40} />
        <Box sx={{ flexGrow: 1, display: 'flex' }}>
          <Tabs value={active} onChange={(_, val) => setActive(val)}>
            {
              routes.map((route) => <Tab key={route.path} component={Link} label={route.label} to={route.path} />)
            }
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
