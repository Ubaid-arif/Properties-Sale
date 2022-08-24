import { Box, Grid, Stack, Typography, Paper, TextField } from '@mui/material'
import React from 'react'
import ImageBack from '../Image/backgroundImage.jpg'
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import { display } from '@mui/system';
function Slider() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: 5

    }));
    return (
        <Box sx={{
            backgroundImage: `url(${ImageBack})`,
        }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >

            <Box padding="5" >

                <Box marginY={5} >
                    <Typography variant='h4' sx={{ color: 'white' }} align="center" >
                        Search properties for sale and to rent in the UAE
                    </Typography>
                </Box>

                <Box display="flex"
                    justifyContent="center"
                    marginY={5}
                    alignItems="center"

                >
                    <Box sx={{ backgroundColor: 'black', padding: 1, paddingX: 3, borderRadius: 3 }} >
                        <Typography sx={{ color: 'white' }} variant='h6' >
                            Property Search
                        </Typography>

                    </Box>
                    <Box sx={{ backgroundColor: 'white', padding: 1, paddingX: 3, borderRadius: 3 }} >
                        <Typography variant='h6'  >
                            TruValue
                        </Typography>

                    </Box>
                </Box>

                <Box sx={{ backgroundColor: 'rgba(34,34,34,.75)', padding: 2, borderRadius: 5, display: { xs: "none", sm: "none", md: "none", lg: "block" } }}
                    justifyContent="center"
                    alignItems="center" >
                    {/* main coontainer */}
                    <Grid container spacing={2} textAlign="center"  >
                        <Grid item md={3} lg={3} >
                            <Item>
                                Rent <ArrowDropDownIcon/>
                            </Item>
                        </Grid>

                        <Grid item md={6} lg={6} >
                            <Item>
                                  {/* <TextField
                                    hiddenLabel
                                    
                                    placeholder="Enter location"
                                    variant="filled"
                                    size="small"
                                    
                                  
                             /> */}
                             Enter Location
                                  <LocationOnIcon/>  
                                
                            </Item>
                        </Grid>

                        <Grid item md={3} lg={3} >
                            <Item>
                                Residential<ArrowDropDownIcon/>
                            </Item>
                        </Grid>

                        <Grid item md={3} lg={3} >
                            <Item>
                                Beds&Baths <ArrowDropDownIcon/>
                            </Item>
                        </Grid>
                        <Grid item md={3} lg={3} >
                            <Item>
                                Area (sqft)<ArrowDropDownIcon/>
                            </Item>
                        </Grid>
                        <Grid item md={3} lg={3} >
                            <Item>
                                Price<ArrowDropDownIcon/>
                            </Item>
                        </Grid>
                        <Grid item md={3} lg={3} >
                            <Item>
                                Find <SearchIcon/>
                            </Item>
                        </Grid>
                        <Grid item md={12} lg={12}>
                            <Item>
                                Search by 2.0 Find homes by coming time <TimeToLeaveIcon/>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>

            </Box>

        </Box>
    )
}

export default Slider