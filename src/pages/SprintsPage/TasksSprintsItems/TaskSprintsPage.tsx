import {  Tasks} from '../../../api/types/interfaceApi.ts'
import { Card, CardContent, Typography, Grid2, CardMedia, CardActions, Button } from "@mui/material"
import { formDate } from '../../../api/moks/sprints.mock.ts';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';


interface TaskSprints {
  tasks: Tasks
}

export const TaskSprintsItems = ({tasks}: TaskSprints) => {

  const [isValide, setIsValide] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
      setIsValide(false);
  }

  if(!isValide){
      return null
  }

  const handleOpenModal = () => {
      setIsModalOpen(true);
  };

  const handleCloseModal = () => {
      setIsModalOpen(false);
  };


  return (
    <Grid2 size={4} >
     <Card sx={{ width: {sx:300, sm:200, md: 300 }, pb:1 }}>
        <CardMedia
            sx={{ height: {xs: 100, sm:200, md: 300}}}
          image={'https://img.freepik.com/free-photo/futuristic-cat-with-goggles_23-2150969289.jpg?t=st=1740336490~exp=1740340090~hmac=3633235324c389c47cefa94780d0ddd6f82960702c6c1a10242b8f3ed32d4e7b&w=1480'}
        />
        <CardContent sx={{ width: {sx:'100%'}}}>
          <Typography  sx={{fontSize:{xs:'1rem', sm:'1.5rem'}}}
            gutterBottom
            variant='h5'
            component='div'
          >
            {tasks.title}
          </Typography>
          <Typography sx={{fontSize:{xs:'0.7rem', sm:'1.5rem'}}}
            gutterBottom
            variant='h6'
          >
            Story-points: {tasks.storyPoints}
          </Typography>
          <Typography sx={{fontSize:{xs:'0.7rem', sm:'1.5rem'}}}
            gutterBottom
            variant='h6'
          >
            {tasks.description}
          </Typography>
          <Typography
            variant='body2'
            sx={{ color: 'text.secondary', fontSize:{xs:'0.6rem', sm:'1.5rem'} }}
          >
            {formDate(tasks.timestamp)}
          </Typography>
        </CardContent>
        <CardActions sx={{display: 'flex', flexWrap:'wrap', justifyContent: 'center', overflow: 'hidden'}}>
            <Button sx={{fontSize:{xs:'0.5rem', lg: '0.75rem', sm: '1rem' }, minWidth: 'unset'}} size='small' onClick={handleOpenModal}>Share
            </Button>
          <Button sx={{fontSize:{xs:'0.5rem', lg: '0.75rem', sm: '1rem' }, minWidth: 'unset'}} size='small'>Learn More</Button>
          <Button sx={{fontSize:{xs:'0.5rem', lg: '0.75rem', sm: '1rem' }, minWidth: 'unset'}} size='small' onClick={handleClose}>
            <DeleteIcon />
          </Button>
        </CardActions>
      </Card>
    </Grid2>

  );
};