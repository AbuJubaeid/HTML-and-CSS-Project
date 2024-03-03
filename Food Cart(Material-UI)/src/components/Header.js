import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/HeaderStyle.css';



const Header = () => {
    const [openMenu, setMenu] = useState(false)

    const menuHandler =()=>{
        setMenu(!openMenu)
    }

    const menu =(
        <Box onClick={menuHandler} sx={{ textAlign: "center" }}>
        <Typography>
            <FastfoodIcon/>
                    My Restaurent
        </Typography>
                <ul className='menuStyle'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/menu'}>Menu</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            
        </Box>
    )
  return (
    <Box>
        <AppBar>
            <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
                <Typography sx={{display:'flex', alignItems:'center'}}>
                <IconButton   sx={{display:{xs:'block', sm:'none'}}} onClick={menuHandler}>
                    <MenuIcon/>
                </IconButton>
                <Typography>
                    <FastfoodIcon/>
                    My Restaurent
                </Typography>
                </Typography>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    <ul >
                    <Link className='navigation' to={'/'}>Home</Link>
                    <Link className='navigation' to={'/menu'}>Menu</Link>
                    <Link className='navigation' to={'/about'}>About</Link>
                    <Link className='navigation' to={'/contact'}>Contact</Link>
                </ul>
                </Box>
                
            </Toolbar>
        </AppBar>

        <Box componenet="nav">
        <Drawer  variant="temporary" open={openMenu} onClose={menuHandler} sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },}}>
            {menu}
        </Drawer>
        </Box>
        <Toolbar/> 
    </Box>

  )
}

export default Header