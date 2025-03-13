

import {Sprint, Tasks} from '../../../../api/types/interfaceApi.tsx'
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid2 } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import {formDate} from '../../../../api/moks/sprints.mock.tsx'
import { Link } from "react-router-dom";
import {useState} from "react";


interface SprintsProps {
  sprints: Sprint,
  tasks: Tasks

  
}

export const SprintsPageItems = ({sprints, tasks}:SprintsProps) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleDelete = ():void => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }
    return (
      <Grid2  size={4} >
        <Card sx={{ width: {sx:300, sm:200, md: 300 } }}>
        <CardMedia
          sx={{ height: {xs: 100, sm:200, md: 300}}}
          image="https://img.freepik.com/premium-photo/radiant-rhythms-exploring-neon-line-art-spectrum_1020495-70919.jpg?w=1060"
        />
        <CardContent sx={{ width: {sx:'100%'}}}>
          <Typography  sx={{fontSize:{xs:'1rem', sm:'1.5rem'}}} gutterBottom variant="h5" component="div">
            {sprints.title}
          </Typography>
          <Typography sx={{fontSize:{xs:'0.7rem', sm:'1.5rem'}}} gutterBottom variant="h6">{sprints.description}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize:{xs:'0.6rem', sm:'1.5rem'} }}>
            {formDate(sprints.timestamp)}
          </Typography>
        </CardContent>
        <CardActions sx={{display: 'flex', flexWrap:'wrap', justifyContent: 'center', overflow: 'hidden'}}>
          <Button sx={{fontSize:{xs:'0.5rem', lg: '0.75rem', sm: '1rem' }, minWidth: 'unset'}} size="small">Share</Button>
          <Button sx={{fontSize:{xs:'0.5rem', lg: '0.75rem', sm: '1rem' }, minWidth: 'unset'}} size="small" component={Link} to={`/Project/${sprints.projectId}/sprints/${sprints.tasksID}` } >Learn More</Button>
            <Button size = "small" onClick={handleDelete}>
                <DeleteIcon  />
            </Button>
        </CardActions>
      </Card>
    </Grid2>

    )
} 