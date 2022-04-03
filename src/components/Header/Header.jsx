import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, InputBase } from '@material-ui/core';
import { Autocomplete } from '@react-google-maps/api';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from "./style";

const Header = ({ setCoordinates }) => {
  const classes = useStyles();
  const [autoComplete, setAutoComplete] = useState(null);

  const onLoad = (autoC) => {
    setAutoComplete(autoC);
  }
  
  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();

    setCoordinates({lat, lng});
  }

  return (
    <>
      <AppBar position='static' >
        <Toolbar className={classes.toolbar} >
          <Typography variant='h5' className={classes.title} >Travel Advisor</Typography>
          <Box display='flex' alignItems='center' >
            <Typography variant='h6' className={classes.title} >Explore New Places</Typography>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} >
              <div className={classes.search} >
                <InputBase 
                  placeholder="Search..." 
                  startAdornment={<SearchIcon />}  
                />
              </div>
            </Autocomplete>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header;



// export default makeStyles((theme) => ({
//   title: {
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
//   },
//   toolbar: {
//     display: 'flex', justifyContent: 'space-between',
//   },
// }));