
import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link, useHistory } from 'react-router-dom';

import { useOktaAuth } from '@okta/okta-react';

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
  const history = useHistory();

  const { oktaAuth, authState } = useOktaAuth();

  if (!authState && authState.isPending) return null;

  const login = async () => history.push('/login');

  const logout = async () => oktaAuth.signOut();

  const button = authState.isAuthenticated ?
    <button onClick={logout}>Logout</button> :
    <button 
    onClick={login}
    style={{
      background:"unset",
      border: 'none',
      textTransform: 'uppercase',
      fontFamily: 'Roboto',
      fontSize: '17',
      cursor: 'pointer',
      opacity: 0.8
    }}
    >Login</button>;

  return (
    <AppBar className={classes.component}>
      <Toolbar className={classes.container}>

        <Link to='/' className={classes.link}>
          <Typography>HOME</Typography>
        </Link>

        <Typography>ABOUT</Typography>
        <Typography>CONTACT</Typography>
        <Typography>{button}</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;