import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  toolbar: {
    display: 'flex',

    '& .MuiTypography-h5': {
      flexGrow: 1,
    } 
  },
  search: {
    position: 'relative',
    padding: '0 8px',
    marginLeft: '8px',
    background: '#fff3',
    borderRadius: '5px',

    '& .MuiSvgIcon-root': {
      color: '#fff',
    },
    '& .MuiInputBase-input': {
      color: '#fff5',
    },

    '&:hover': {
      background: '#fff5',
      color: '#fff',
    }
  }
}));

export default useStyles;