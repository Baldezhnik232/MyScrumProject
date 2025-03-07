import { Tasks} from '../../../../api/types/interfaceApi.tsx'
import { Card, CardContent, Typography, Grid2 } from "@mui/material"


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
      </Card>
    </Grid2>

  );
};