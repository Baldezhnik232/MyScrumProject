import { Tasks, TaskStatus } from '../../../api/types/interfaceApi.ts';
import {
  Card,
  CardContent,
  Typography,
  Grid2,
  CardMedia,
  CardActions,
  Button,
  Box,
} from '@mui/material';
import { formDate } from '../../../api/moks/sprints.mock.ts';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { SprintTaskPopover } from '../SprintTaskPopover/SprintTaskPopover.tsx';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface TaskSprints {
  tasks: Tasks;
  onMoveSprintTask: (
    SprintTasksID: number,
    status: TaskStatus,
    sprintId: number
  ) => void;
  onDeleteTask: (SprintTasksID: number) => void;
}

export const TaskSprintsItems = ({
  tasks,
  onMoveSprintTask,
  onDeleteTask,
}: TaskSprints) => {

  const [isValide, setIsValide] = useState(true);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpenPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: tasks.tasksID,
      data: {
        tasks: tasks,
      },
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Grid2 size={4}>
      <Card
        sx={{ width: { sx: 300, sm: 200, md: 300 }, pb: 1 }}
        ref={setNodeRef}
        style={style}
      >
        {tasks.isLegacy ? (
          <CardMedia
            sx={{ height: { xs: 100, sm: 200, md: 300 }, cursor: 'grab' }}
            image={
              'https://img.freepik.com/free-photo/futuristic-cat-with-goggles_23-2150969289.jpg?t=st=1740336490~exp=1740340090~hmac=3633235324c389c47cefa94780d0ddd6f82960702c6c1a10242b8f3ed32d4e7b&w=1480'
            }
            {...attributes}
            {...listeners}
          />
        ) : tasks.image ? (
          <CardMedia
            sx={{ height: { xs: 100, sm: 200, md: 300 } }}
            image={URL.createObjectURL(tasks.image)}
          />
        ) : (
          <Box
            sx={{
              height: { xs: 100, sm: 200, md: 300 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f0f0f0',
            }}
          >
            <Typography
              variant='body2'
              color='text.secondary'
            >
              No Image
            </Typography>
          </Box>
        )}
        <CardContent sx={{ width: { sx: '100%' } }}>
          <Typography
            sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}
            gutterBottom
            variant='h5'
            component='div'
          >
            {tasks.title}
          </Typography>
          <Typography
            sx={{ fontSize: { xs: '0.7rem', sm: '1.5rem' } }}
            gutterBottom
            variant='h6'
          >
            Story-points: {tasks.storyPoints}
          </Typography>
          <Typography
            sx={{ fontSize: { xs: '0.7rem', sm: '1.5rem' } }}
            gutterBottom
            variant='h6'
          >
            {tasks.description}
          </Typography>
          <Typography
            variant='body2'
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '0.6rem', sm: '1.5rem' },
            }}
          >
            {formDate(tasks.timestamp)}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <Button
            sx={{
              fontSize: { xs: '0.5rem', lg: '0.75rem', sm: '1rem' },
              minWidth: 'unset',
            }}
            size='small'
            onClick={handleOpenPopover}
          >
            Move
          </Button>
          <Button
            sx={{
              fontSize: { xs: '0.5rem', lg: '0.75rem', sm: '1rem' },
              minWidth: 'unset',
            }}
            size='small'
          >
            Learn More
          </Button>
          <Button
            sx={{
              fontSize: { xs: '0.5rem', lg: '0.75rem', sm: '1rem' },
              minWidth: 'unset',
            }}
            size='small'
            onClick={() => onDeleteTask(tasks.tasksID)}
          >
            <DeleteIcon />
          </Button>
        </CardActions>
      </Card>
      <SprintTaskPopover
        anchorEl={anchorEl}
        SprintTasksID={tasks.tasksID}
        onClose={handleClosePopover}
        onSave={(SprintTasksID, status, sprintId) =>
          onMoveSprintTask(SprintTasksID, status, sprintId)
        }
      />
    </Grid2>
  );
};
