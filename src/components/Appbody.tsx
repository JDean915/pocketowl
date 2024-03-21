import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Typography } from '@mui/material';
import background from './background.jpg';


export default function Appbody() {
  return (
    <div>
        <Grid container spacing={2} minHeight={800}>
            <Grid display="flex" justifyContent="center" alignItems="center" xs={12} sm={12} md={6}>
                <Typography>
                    <h1>Everything in one place.</h1>
                    <h3>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit, sed do eiusmod.</h3>
                </Typography>
            </Grid>
            <Grid xs display="flex" justifyContent="center" alignItems="center" sm={12} md={6}>
                <Typography>
                    <h1>SIGN UP PLACEHOLDER</h1>
                </Typography>
            </Grid>
        </Grid>
    </div>
  );
}