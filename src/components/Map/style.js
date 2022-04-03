import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles( (theme) => ({
  mapContainer: {
    height: '75vh',
    marginTop: '2rem',
  },
  markerContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    height: '50px',
    cursor: 'pointer',
    zIndex: 1,

    '&:hover': {
      zIndex: 111,
    }

  },
  paper: {
    padding: '8px',
  },
  typography: {
    // fontSize: '.5rem',
    lineHeight: '.9',
  },
  pointer: {
    width: '100px',

  }
}));

export default useStyles;