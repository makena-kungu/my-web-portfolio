import * as React from 'react';
import {Typography, Box, Card, Grid, Avatar, Stack} from '@mui/material';

export default function Intro() {
  return(
    <Box>
      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{p:1}}>
        <Grid item xs>
          <Stack>
            <Typography variant='h3'>Welcome to my Porfolio</Typography>
            <Typography>
              My name is Edwin Kung'u and here we will go through a list of some of my projects and a short biography                of me.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs="auto">
          <Avatar
          alt="Edwin Kung'u"
          src="my_image.jpeg"
          sx={{width: 170, height:170}}/>
        </Grid>
      </Grid>
    </Box>
  )
}