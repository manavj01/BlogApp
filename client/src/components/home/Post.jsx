import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
  container:
  {
    height: "350px !important ",
    margin: "10px !important ",
    borderRadius: "10px !important ",
    border: '1px solid #d3cede !important ',
    display: 'flex !important ',
    alignItems: 'center !important ',
    flexDirection: 'column !important ',
    '&>*': {
      padding: '0 5px 5px 5px'
    }
  },
  image:
  {
    height: "150px !important",
    width: '100%',
    objectFit: "cover",
    borderRadius: '10px 10px 0 0 '
  },
  text:
  {
    color: '#878787 !important',
    fontSize: '12px !important'
  },
  heading:
  {
    fontSize: '18px !important',
    fontWeight: "600px !important ",
    textAlign: 'center !important'
  },
  detail:
  {
    fontSize: "14px !important ",
    wordBreak: 'break-word !important '
  }
})


const Post = ({ post }) => {

  const classes = useStyles();

  const url = post.picture ? window.location.origin + '/api' + post.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'

  const addElipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + '...' : str;
  }
  return (
    <Box className={classes.container}>
      <img src={url} alt=" wrapper" className={classes.image} />
      <Typography className={classes.text}>{post.categories}</Typography>
      <Typography className={classes.heading} >{addElipsis(post.title, 20)}</Typography>
      <Typography className={classes.text} >Author: {post.username}</Typography>
      <Typography className={classes.detail} >{addElipsis(post.description, 100)}</Typography>

    </Box>
  )

}

export default Post;