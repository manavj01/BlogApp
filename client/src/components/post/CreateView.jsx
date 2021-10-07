
import { Box, FormControl, InputBase, Button, TextareaAutosize } from "@mui/material";
import { makeStyles } from '@mui/styles';
import AddCircle from '@mui/icons-material/AddCircle';
import { useEffect, useState } from "react";
import { createPost, uploadFile } from "../../service/api";
import { useHistory } from 'react-router-dom'


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


const CreateView = () => {

  const classes = useStyles();
  const history = useHistory();
  
  const savePost = async () => {
    try {
      
      await createPost(post);
      history.push('/')
    } catch (error) {
      console.log("ye error hai");
    }
  }
  
  const [post, setPost] = useState(initialValue);
  
  const [file, setFile] = useState('');
  
  const [image, setImage] = useState('');
  
  const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
  
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append('name', file.name);
        data.append('file', file)

        const image = await uploadFile(data);
        post.picture = image.data;
        setImage(image.data);
      }
    }
    getImage();
  }, [file])

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  return (
    <Box className={classes.container}>
      <img src={url} alt='createView' className={classes.image} />

      <FormControl className={classes.form} >
        <label htmlFor='fileInput' >
          <AddCircle fontSize="large" color='action' />

        </label>
        <input
          type='file'
          id='fileInput'
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <InputBase
          onChange={(e) => handleChange(e)}
          placeholder='Title'
          className={classes.textfield}
          name='title'
        />

        <Button onClick={() => savePost()} variant="contained" color="primary" >Publish</Button>
      </FormControl>

      <TextareaAutosize
        minRows={5}
        placeholder="Kehdo Batie dil ki...."
        className={classes.textarea}
        onChange={(e) => handleChange(e)}
        name='description'
      />
    </Box>

  )
}

export default CreateView;