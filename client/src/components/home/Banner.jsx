
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const useStyles = makeStyles({
  image:
  {
    background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg '}) center/55%  repeat-x #000 `,
    width: '100%',
    height: '50vh',
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  first_child:
  {
    fontSize: "66px !important ",
    color: '#FFFFFF !important',
    lineHeight: '1 !important'
  },
  second_child:
  {
    fontSize: "20px !important",
    background: '#FFFFFF !important'
  }
},

)

const Banner = () => {

  const classes = useStyles();

  return (
    <Box className={classes.image} >
      <Typography className={classes.first_child}>BLOG</Typography>
      <Typography className={classes.second_child}>Coding is Passion</Typography>
    </Box>
  )
}

export default Banner;