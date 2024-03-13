import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import Layout from '../components/Layout';



const Contact = () => {
  return (
    <Layout>
      <Box sx={{justifyContent:'center',
        textAlign:'center',
        backgroundColor:'olive',
        pt:'40px',
        height:'30vh',

        "@media (max-width:600px)":{
          height:'50vh',
        }

        }} >
        <Typography variant='h4'>Get In Touch</Typography>
        <Box sx={{display:'flex',justifyContent:'center', pt:'40px',

        "@media (max-width:600px)":{
          flexDirection: 'column',
          marginTop:'-25px',
        }
        }}>
          <Box component='div' sx={{"& p":{marginTop:'-2px',},
            textAlign:'center',
            mr:5,}}>
            <HomeIcon/>
            <Typography variant='h5'>Address</Typography>
            <p>Jamjam tower, Uttara, Dhaka</p>
          </Box>
          <Box component='div' sx={{"& p":{marginTop:'-2px'},
            textAlign:'center', mr:5}}>
            <LocalPhoneIcon/>
            <Typography variant='h5'>Phone</Typography>
            <p>+880 1722072285</p>
          </Box>
          <Box component='div' sx={{"& p":{marginTop:'-2px'},
            textAlign:'center', mr:5}}>
            <EmailIcon/>
            <Typography variant='h5'>Email</Typography>
            <p>asdfghjkl@gmail.com</p>
          </Box>
        </Box>
      </Box>

      
      <Box sx={{"& h4":{textAlign:'center'}, 
           pt:'60px',
           height:'40vh',
           "& button":{padding:'10px 20px',
                      margin:'10px',
                      borderRadius:'5px',
                      }}}>
         <Typography variant='h4'>Message Us</Typography>
         <Box sx={{textAlign:'center', margin:'5px',pt:'20px', pb:'40px'}}>
            <TextField
              multiline='5px'
              id="outlined-required"
              label="Name"
            />
            <TextField
              id="outlined-disabled"
              label="Email"
            />
            <TextField
              id="comment"
              label="Comment"
            />
            <button>Submit</button>
        </Box>
      </Box>
      
      
    </Layout>
  )
}

export default Contact
