import * as React from 'react';
import Alert from '@mui/material/Alert';
import styled from 'styled-components';
import { useContext,useEffect,useState } from 'react';
import { UserContext } from '../App';
const AlertStyle=styled(Alert)`
    bottom:0px;
    position: sticky;
    background-color:#2a4747 ;
    /* opacity: 0.9; */
    opacity:${props=>props.opacity};

`

export default function CAlert() {
  const user = useContext(UserContext);

  return (
    <AlertStyle severity="success" color="success" variant='standard'opacity={user.AlertOpacity} >
      This is a success alert — check it out!
    </AlertStyle>
  );
}
