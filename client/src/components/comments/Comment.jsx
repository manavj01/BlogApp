import { Box, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';

import {deleteComment} from '../../service/api'
import { useOktaAuth } from "@okta/okta-react";

const useStyles = makeStyles({

  component:
  {
    marginTop: '30px !important',
    background: '#F5F5F5 !important',
    padding: '10px !important'
  },
  container:
  {
    display: 'flex !important',
    marginBottom: '5px !important'
  },
  name:
  {
    fontSize: '18px !important',
    fontWeight: '600px !important ',
    marginRight: '20px !important'
  },
  date:
  {
    fontSize: '14px !important',
    color: '#878787 !important'
  },
  delete:
  {
    marginLeft: 'auto !important'
  }


});

const Comment = ({ comment, setToggle }) => {

  const classes = useStyles();
  const removeComment = async () => {
    await deleteComment(comment._id);
    setToggle(prev => !prev);

  }

  return (
    <Box className={classes.component} >
      <Box className={classes.container} >
        <Typography className={classes.name} >{comment.name}</Typography>
        <Typography className={classes.date} >{new Date(comment.date).toDateString()}</Typography>
        <DeleteIcon onClick={() => removeComment()} className={classes.delete} />
      </Box>
      <Typography>{comment.comments}</Typography>
    </Box>
  )
}

export default Comment;