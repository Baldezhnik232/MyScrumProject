

import Box from '@mui/material/Box';


import Fab from '@mui/material/Fab';

import AddIcon from '@mui/icons-material/Add';




export const AppButtonAdd = () => {

  return (
    <Box sx={{ '& > :not(style)': { m: 1 }} }>
       <Fab variant="extended"  color="primary">
          <AddIcon sx={{ mr: 1 }} />
           new task
      </Fab>
    </Box>



  )
}