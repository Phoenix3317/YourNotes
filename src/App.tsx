import * as React from 'react';
import './style.css';

import Box from '@mui/material';
import AppBar from '@mui/material';
import Toolbar from '@mui/material';
import Button from '@mui/material';

export default function App() {
  return (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Button>Login</Button>
      </Toolbar>
    </AppBar>
  </Box>)
}
