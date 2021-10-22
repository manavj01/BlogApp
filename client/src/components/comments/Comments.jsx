import { Box, Button, TextareaAutosize } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useState, useEffect } from "react";
import { newComment, getComments } from "../../service/api";


// components
import Comment from "./Comment";


const useStyle = makeStyles({
  components:
  {
    marginTop: '100px !important',
    display: 'flex !important'
  },
  image:
  {
    width: '50px !important',
    height: '50px !important',
    borderRadius: '50% !important'
  },
  textarea:
  {
    width: '100% !important',
    margin: '0 20px !important'
  },
  button:
  {
    height: '40px !important'
  }
})

const initialValue = {
  name: '',
  postId: '',
  date: new Date(),
  comments: ''
}



const Comments = ({ post }) => {
  const classes = useStyle();
  const url = 'https://static.thenounproject.com/png/12017-200.png'

  const [comment, setComment] = useState(initialValue);
  const [comments, setComments] = useState([]);
  const [toggle, setToggle] = useState(false);

  console.log(comments)

  useEffect(() => {
    if(!post || !post._id) return;
    const getData = async () => {
      console.log(post);
      let response = await getComments(post._id)
      setComments(response);
    }
    getData();
  }, [post, toggle])

  const handlechange = (e) => {
    setComment({
      ...comment,
      name: post.username,
      postId: post._id,
      comments: e.target.value
    })
  }

  const postComment = async () => {
    await newComment(comment);
    setToggle(prev => !prev);
  }

  return (
    <Box>
      <Box className={classes.components}>
        <img src={url} alt="dp" className={classes.image} />
        <TextareaAutosize
          className={classes.textarea}
          minRows={5}
          onChange={(e) => handlechange(e)}
        />
        <Button
          variant="contained"
          color="primary"
          size="medium"
          className={classes.button}
          onClick={() => postComment()}
        >Post</Button>
      </Box>
      {
        comments.map(comment => (
          <Comment comment={comment} setToggle={setToggle} />
        ))
      }
    </Box>

  )
}

export default Comments;