

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import AddIcon from '@mui/icons-material/Add';

import {AppForm} from '../AddForm/CreateFormTask'


interface AppButtonAddProps {
  setOpen: (value: boolean) => void;
}



export const AppButtonAdd = ({setOpen}: AppButtonAddProps ) => {

  return (
    <Box sx={{ '& > :not(style)': { m: 1 }} } onClick={()=>{setOpen(true)}}  >
       <Fab variant="extended"  color="primary">
          <AddIcon sx={{ mr: 1 }}  />
           new task
      </Fab>
    </Box>



  )
}