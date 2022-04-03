import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => (
  {
    container: {
      position: 'relative',
      padding: '1rem',
  
      '& .MuiFormControl-root': {
        margin: '2rem 0',

        '& .MuiInputBase-root': {
          marginRight: '8px',
          display: 'inline-block',
          minWidth: '80px'
        }
      }
    },
    list: {
      height: '70vh',
      overflow: 'scroll',
      marginTop: '1.5rem',

      '&&::-webkit-scrollbar': {
        display: 'none',
      }
    }
  }
))

export default useStyles;