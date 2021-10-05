
import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  component: 
  {
    background: '#FFFFFF !important',
    color: 'black !important'
  },
  container: 
  {
    justifyContent: 'center !important',
    "& > *": {
      padding: "20px !important"
    }
  },
  link:
  {
    textDecoration: 'none !important ',
    color: 'inherit !important '
  }
})

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.component}>
      <Toolbar className={classes.container}>
        
        <Link to='/' className={classes.link}>
          <Typography>HOME</Typography>
        </Link>

        <Typography>ABOUT</Typography>
        <Typography>CONTACT</Typography>
        <Typography>LOGIN</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;