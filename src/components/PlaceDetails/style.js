import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {

    '& .MuiBox-root': {
      margin: '16px 0',
    }
  },
  foodChip: {

  },
  subtitle: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'right',
  }
}))

export default useStyles;