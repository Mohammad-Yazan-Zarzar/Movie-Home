import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import  Toolbar  from '@material-ui/core/Toolbar';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TemporaryDrawer from './Drawer';
import { rgbToHex } from '@material-ui/core';
import styled from 'styled-components';
import {Link}  from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
const AppBarStyle=styled(AppBar)`
  background-color:#122c34 !important;
  box-shadow: 6px 10px #4EA5D9 ;
  color: #44CFCB !important;

  :hover{
    color: #44CFCB;
    /* height: 100px; */
  }
`;
const BoxStyle=styled(Box)`
  /* text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF !important ; */
  border-radius: 25px !important;

  

`;
const LinkStyle=styled(Link)`
     /* font-style:none; */
     color: #44CFCB;
     text-decoration: none;

`
export default function Bar() {
  return (
    <BoxStyle sx={{ flexGrow: 1,backgroundColor:'darkblue'}}>
      <AppBarStyle position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <TemporaryDrawer></TemporaryDrawer>
          </IconButton>
          

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <LinkStyle to="/">News</LinkStyle>
          </Typography>
          <Button color="inherit" ><LinkStyle  to="/Login">Login<LoginIcon></LoginIcon></LinkStyle></Button>
        </Toolbar>
      </AppBarStyle>
    </BoxStyle>
  );
}
