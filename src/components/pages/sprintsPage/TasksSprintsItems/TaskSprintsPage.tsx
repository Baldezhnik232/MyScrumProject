import { useParams } from 'react-router-dom';
import { Grid2, Typography, Paper } from '@mui/material';
import { sprintsMoks } from '../../../../api/sprints.mock'; // Предположим, что у вас есть файл с моковыми данными
import {Sprint} from '../../../../api/interfaceApi'

interface TaskSprints {
  tasks: Sprint
}

export const TaskSprintsItems = ({tasks}: TaskSprints) => {
  const { sprintId } = useParams<{ sprintId: string }>();
  const sprint = sprintsMoks.find((s) => s.id.toString() === sprintId);

  if (!sprint) {
    return <Typography variant="h6">Sprint not found</Typography>;
  }

  return (
    <>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Tasks for {tasks.titleKey}
      </Typography>
      <Grid2 container spacing={3} component='div'>
        <Grid2 columns={4} component='div'>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">TODO</Typography>
            {sprint.TODO.map((task) => (
              <Paper key={task.id} sx={{ p: 2, my: 1 }}>
                <Typography>{task.title}</Typography>
              </Paper>
            ))}
          </Paper>
        </Grid2>
        <Grid2 columns={4} component='div'>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">DOING</Typography>
            {sprint.DOING.map((task) => (
              <Paper key={task.id} sx={{ p: 2, my: 1 }}>
                <Typography>{task.title}</Typography>
              </Paper>
            ))}
          </Paper>
        </Grid2>
        <Grid2 columns={4} component='div'>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">DONE</Typography>
            {sprint.DONE.map((task) => (
              <Paper key={task.id} sx={{ p: 2, my: 1 }}>
                <Typography>{task.title}</Typography>
              </Paper>
            ))}
          </Paper>
        </Grid2>
      </Grid2>
    </>
  );
};