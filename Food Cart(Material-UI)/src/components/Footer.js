import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:"center", bgcolor:"black", color:"white", p:3}}>
        <Box sx={{p:1, "& svg":{
            fontSize:'40px'
        }, "& svg:hover":{
            color:'green'
        }}}>
          <YouTubeIcon/>
          <FacebookIcon/>
          <InstagramIcon/>
          <GitHubIcon/>
        </Box>
        <Typography>All Rights Reserved &copy; </Typography>
    </Box>
    </>
  )
}

export default Footer