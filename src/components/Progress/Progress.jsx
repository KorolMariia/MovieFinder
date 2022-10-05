import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function Progress() {
  return (
    <Stack sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }} direction="row">
      <CircularProgress color="secondary" />
    </Stack>
  );
}
