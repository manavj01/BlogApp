
import { Box, FormControl, InputBase, Button, TextareaAutosize } from "@mui/material";
import { makeStyles } from '@mui/styles';
import AddCircle from '@mui/icons-material/AddCircle';
import { useEffect, useState } from "react";
import { getPost, updatePost } from "../../service/api";
import { useHistory } from "react-router";

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
  form:
  {
    display: 'flex !important',
    flexDirection: 'row !important',
    marginTop: '10px !important'
  },
  textfield:
  {
    flex: '1 !important',
    margin: '0 30px',
    fontSize: '25px !important'
  },
  textarea:
  {
    width: '100%',
    marginTop: "50px",
    border: 'none',
    fontSize: '18px',
    '&:focus-visible': {
      outline: 'none'
    }
  }
})

const initialValue = {
  title: '',
  description: '',
  picture: '',
  username: 'codeforinterview',
  categories: 'All',
  createdDate: new Date()
}

const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'



const UpdateView = ({ match }) => {


  const classes = useStyles();
  const history = useHistory();

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const updateBlog = async () => {
    await updatePost(match.params.id, post);
    history.push(`/details/${match.params.id}`);
  }

  const [post, setPost] = useState(initialValue);
  useEffect(() => {
    const fetchData = async () => {
      let data = await getPost(match.params.id);
      console.log(data);
      setPost(data);
    }
    fetchData();
  }, [])

  return (
    <Box className={classes.container}>
      <img src={url} alt='createView' className={classes.image} />

      <FormControl className={classes.form} >
        <AddCircle fontSize="large" color='action' />

        <InputBase
          placeholder='Title'
          name='title'
          value={post.title}
          className={classes.textfield}
          onChange={(e) => handleChange(e)}
        />

        <Button onClick={() => updateBlog()} variant="contained" color="primary" >Update</Button>
      </FormControl>

      <TextareaAutosize
        minRows={5}
        placeholder="Kehdo Batie dil ki...."
        name='description'
        className={classes.textarea}
        value={post.description}
        onChange={(e) => handleChange(e)}
      />
    </Box>

  )
}

export default UpdateView;