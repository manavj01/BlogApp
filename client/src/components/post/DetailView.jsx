import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPost, deletePost } from '../../service/api';

// components
import Comments from '../comments/Comments';

const useStyles = makeStyles({
  container:
  {
    padding: '0 100px !important'
    // [theme.breakpoints.down('md')]: {
    //   padding: '0px !important',
    // }
  },
  image:
  {
    width: '100% !important ',
    height: '50vh !important ',
    objectFit: 'cover !important '

  },
  icons:
  {
    float: 'right !important'
  },
  icon:
  {
    margin: "5px !important",
    border: '1px solid #878787 !important',
    padding: '5px !important',
    borderRadius: '10px !important'
  },
  heading:
  {
    fontSize: '38px !important',
    fontWeight: '600 !important',
    textAlign: 'center !important',
    margin: '50px 0 10px 0 !important'
  },
  subheading:
  {
    color: '#878787 !important',
    display: 'flex !important',
    margin: '20px 0 !important',
    // [theme.breakpoints.down('sa')]: {
    //   display: 'block'
    // }
  },
  link:
  {
    textDecoration: 'none !important',
    color: 'inherit !important'
  }
})
const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'

const DetailView = ({ match }) => {
  const classes = useStyles();
  const history = useHistory();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let data = await getPost(match.params.id);
      console.log(data);
      setPost(data);
    }
    fetchData();
  }, [])

  const deleteBlog = async () => {
    await deletePost(post._id);
    history.push('/');
  }

  return (
    <Box className={classes.container} >
      <img src={post.picture || url} alt='banner' className={classes.image} />
      <Box className={classes.icons}>

        <Link to={`/update/${post._id}`} > <EditIcon className={classes.icon} color='primary' /></Link>
        <DeleteIcon
          onClick={() => deleteBlog()}
          className={classes.icon}
          color='error'
        />

      </Box>
      <Typography className={classes.heading}>{post.title}</Typography>

      <Box className={classes.subheading}>
        <Link to={`/?username=${post.username}`} className={classes.link} >
          <Typography>Author: <span style={{ fontWeight: 600 }} > {post.username ? post.username.substring(0, 5) : ""} </span></Typography>
        </Link>
        <Typography style={{ marginLeft: "auto" }} >{new Date(post.createdAt).toDateString()}</Typography>
      </Box>

      <Typography>{post.description}</Typography>
      <Comments post={post} />
    </Box>
  )
}

export default DetailView;