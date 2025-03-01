import { useParams } from 'react-router-dom';
import { Tasks} from '../../../../api/interfaceApi'
import {formDate} from '../../../../api/sprints.mock'
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid2 } from "@mui/material"


interface TaskSprints {
  tasks: Tasks
}

export const TaskSprintsItems = ({tasks}: TaskSprints) => {
  return (
    <>
    
    <Grid2 size={4} >
        <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align='center'>
            {tasks.titleKey}
          </Typography>
          <Typography gutterBottom variant="h6" sx={{mt:2}}>{tasks.description}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {formDate(tasks.timestamp)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small" >Learn More</Button>
        </CardActions>
      </Card>
    </Grid2>

    </>
  );
};