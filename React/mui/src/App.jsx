import { useState } from 'react'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, Container, IconButton , Typography, TextField} from '@mui/material'
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth='xl'
    sx={{
      width:'100vw'
    }}
    >
    <Navbar/>
      <Box 
      sx={{
        display:'flex',
        flexDirection:{sm:'column',lg:'row'}
      }}
      
      >
        <TextField id="outlined-basic" label="Full name" variant="outlined"  
        sx={{
          marginTop:'10px'
        }}
        />

        <Button color='success'
        startIcon={<DeleteIcon/>}
        variant='outlined'>
          delete
        </Button>

        <IconButton aria-label="delete">
          <DeleteIcon />
      </IconButton>

      
      </Box>
      <Typography variant='body1' 
      sx={{
        // fontSize:'3em',
        color: {md:'red',sm:'green'}
      }}
      >
        heading
      </Typography>
    </Container>
  )
}


export default App
