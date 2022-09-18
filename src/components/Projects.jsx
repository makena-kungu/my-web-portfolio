import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Typography, Box, Card, Paper, Grid, Button} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Project(){
  return(
    <Box>
      <Typography variant='h5' sx={{paddingTop: 1, paddingBottom: 1}} component='div'>Projects</Typography>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1.2} columns={2}>
        <Grid item xs={1}>
          <Paper sx={{p: 1}}>
            <Box>
              <Typography variant='h6' align='center'>Sorting Algorithm</Typography>
              <Typography>As a final year student, I collaborated with a student colleague to come up with a project. We devised a new sorting algorithm 'Merge-Pair Sort' that sorts a list in nlogn time. The implementation of the algorithm was written in Java and some tests in Kotlin.</Typography>
              <Button>GitHub</Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper sx={{p: 1}}>
            <Box>
              <Typography variant='h6' align='center'>Caritas Scanner</Typography>
              <Typography>During my intership in 2021, I was tasked with developing an android application for the organisation. I designed the application, developed it and deployed it for Alpha and Beta Testing.</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper sx={{p: 1}}>
            <Box>
              <Typography variant='h6' align='center'>Mshirika App</Typography>
              <Typography>An open source application based on the Mifos Open-Source Initiative, a fintech company. I polished the UI while putting best coding pratises into work.</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper sx={{p: 1}}>
            <Box>
              <Typography variant='h6' align='center'>Graph Module</Typography>
              <Typography>While working on a personal project, I encountered a problem, where I could not find open source modules of line graphs and pie charts. To solve this problem, I developed an android module that implements a line-graph and a pie chart. I also ensured optimisation of the searching algorithm in the line graph implementation, by using an in house somewhat implementation of the binary search. This helped me understand algorithms better.</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
    </Box>
  )
};