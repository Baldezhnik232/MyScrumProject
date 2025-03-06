import { Tasks} from '../../../../api/types/interfaceApi.tsx'
import { Card, CardContent, Typography, CardActions, Button, Grid2 } from "@mui/material"


interface TaskSprints {
  tasks: Tasks
}

export const TaskSprintsItems = ({tasks}: TaskSprints) => {
  return (

    <Grid2 size={4} >
        <Card sx={{  maxWidth: 600 }}>
        <CardContent >
          <Typography gutterBottom variant="h5" component="div" align='center'>
            {tasks.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small" >Learn More</Button>
        </CardActions>
      </Card>
    </Grid2>

  );
};