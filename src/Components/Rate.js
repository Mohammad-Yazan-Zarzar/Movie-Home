import React from 'react';
import Typography from '@material-ui/core/Typography';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default function Rate(props) {
  const [value, setValue] = React.useState(props.ev);

  return (
    <div>
      
      <Box component="fieldset" mb={2} borderColor="transparent">
        {/* <Typography component="legend">Read only</Typography> */}
        <Rating name="read-only" value={props.ev} precision={0.5} readOnly />
      </Box>
    </div>
  );
}
