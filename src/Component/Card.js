

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card1 from "../Image/Card1.jpg";
import card4 from "../Image/card4.jpg";

import Card5 from "../Image/Card5.jpg";


import { Typography } from '@mui/material';





const Card = () => {
  return (
    <>
     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5} padding={6} sx={{justifyContent:"space-between"}} >
        <Grid  sx={{background:`url(${Card1})`,backgroundSize : 'cover' , height:"50vh" , borderRadius: '15px' }}
        item xs={12} sm={4} md={4} lg={4}>
            <Typography variant="h5"  sx={{ fontWeight: 'bold' }} > TruCheck  </Typography>
            <Typography variant="h6" sx={{ fontWeight: '500 ' }} >Filter your results with validated , available listings  <ArrowForwardIosIcon/>            </Typography>
            
        </Grid>

        <Grid   padding={6} sx={{background:`url(${card4})`,backgroundSize : 'cover' , height:"50vh" ,  borderRadius: '15px' }} >
             <item xs={12} sm={4} md={4} lg={4}> </item>
            <Typography variant="h5"  sx={{ fontWeight: 'bold' }} > Search 2.0  </Typography>
            <Typography variant="h6" sx={{ fontWeight: '500 ' }} >Find homes by commute time<ArrowForwardIosIcon/>            </Typography>
            
        </Grid>

        <Grid  sx={{background:`url(${Card5})`,backgroundSize : 'cover' , height:"50vh" ,  borderRadius: '15px' }}
        item xs={12} sm={4} md={4} lg={4}>
            <Typography variant="h5"  sx={{ fontWeight: 'bold' }} >Map View </Typography>
            <Typography variant="h6" sx={{ fontWeight: '500 ' }} >Search for porperties in perferred areas using a map<ArrowForwardIosIcon/>            </Typography>
            
        </Grid>


       
       
        
      </Grid>
    </Box>
    </>
  )
}

export default Card