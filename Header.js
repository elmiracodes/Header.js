import React, {useState} from 'react'
import {AppBar, Toolbar, Tab, Tabs, Typography, useMediaQuery, useTheme} from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import DrawerComp from './DrawerComp';


const PAGES = ["Work", "Services", "About", "Contact"];


const Header = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);

  return (

      <React.Fragment>
       <AppBar sx={{background: "#333333" }}>
           <Toolbar>
              
           <Typography sx={{fontSize: '1.5rem', paddingLeft: '10%'}} variant="h3"> 
         ALTEN
        </Typography>
       
        <EmojiEmotionsIcon />
           
   {
    isMatch ? (
        <>
        <DrawerComp />
        </>
  ) : ( 
      <>
            <Tabs sx={{ marginLeft: "auto", paddingRight: '10%' }}
            textColor="inherit" 
            value={value} 
            onChange={(e, value)=> setValue(value)}
            indicatorColor="secondary"
                           >
                               {
                                   PAGES.map((page, index) => (
                                    <Tab key={index} label ={page} />
                                   ))}
            </Tabs>
      </>
  )}
        </Toolbar>
        </AppBar>
        </React.Fragment>
      
  )
}
export default Header;
