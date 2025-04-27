

import {Sprint} from '../../../api/types/interfaceApi.ts'
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid2 } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import {formDate} from '../../../api/moks/sprints.mock.ts'
import { Link } from "react-router-dom";
import {useState} from "react";


interface SprintsProps {
  sprints: Sprint 
}

export const SprintsPageItems = ({sprints}:SprintsProps) => {

    const [isVisible, setIsVisible] = useState(true);
        const handleDelete = (): void => {
        setIsVisible(false); 
    };

    if (!isVisible) {
        return null;
    }
    return (
      <Grid2  size={4} >
        <Card sx={{ width: {sx:290, sm:190, md: 250, lg: 300, xl:300  } }}>
        <CardMedia
          sx={{ height: {xs: 94, sm:200, md: 270, lg: 300, xl:300}}}
          image="https://img.freepik.com/premium-photo/radiant-rhythms-exploring-neon-line-art-spectrum_1020495-70919.jpg?w=1060"
        />
        <CardContent sx={{ width: {sx:'100%'}}}>
          <Typography  sx={{fontSize:{xs:'0.6rem', sm:'1.5rem'}}} gutterBottom variant="h5" component="div">
            {sprints.title}
          </Typography>
          <Typography sx={{fontSize:{xs:'0.5rem', sm:'1.5rem'}}} gutterBottom variant="h6">{sprints.description}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize:{xs:'0.5rem', sm:'1.5rem'} }}>
            {formDate(sprints.timestamp)}
          </Typography>
        </CardContent>
        <CardActions sx={{display: 'flex', flexWrap:'wrap', justifyContent: 'start', overflow: 'hidden'}}>
          <Button sx={{fontSize:{xs:'0.4rem', lg: '0.75rem', sm: '1rem' }, minWidth: 'unset'}} size="small" component={Link} to={`/project/${sprints.projectId}/sprints/${sprints.sprintId}`} >Learn More</Button>
            <Button sx={{display:'flex', justifyContent: 'flex-start'}} size = "small" onClick={handleDelete}>
                <DeleteIcon  />
            </Button>
        </CardActions>
      </Card>
    </Grid2>

    )
} 