import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { format, parse } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../store/hooks.ts';
import { addBacklogTask } from '../../../store/backlog/backlog.slice.ts';
import { Typography, Box } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { TaskStatus } from '../../../api/tasks/tasks.types.ts';
import { Backlog } from '../../../api/backlog/backlog.types.ts';
import { ChangeEvent } from 'react';

type FormValues = {
  tasksID: number;
  title: string;
  storyPoints: number;
  description: string;
  timestamp: string;
  status: string;
<<<<<<<< HEAD:src/pages/backlog/AddForm/Backlog.tsx
  isLegacy: boolean,
========
  sprintId: number;
  isLegacy: boolean;
>>>>>>>> main:src/pages/backlog/AddForm/Task.tsx
  image?: File;
};

interface AppFormProps {
  open: boolean;
  addTask: (value: Backlog) => void;
  setOpen: (value: boolean) => void;
}

export const AppForm = ({ open, setOpen }: AppFormProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: '',
      storyPoints: 0,
      description: '',
      timestamp: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
<<<<<<<< HEAD:src/pages/backlog/AddForm/Backlog.tsx
      isLegacy: false,
========
      status: 'todo',
      sprintId: 1,
      isLegacy: true,
>>>>>>>> main:src/pages/backlog/AddForm/Task.tsx
      image: undefined,
    },
  });

  const onSubmit = (data: FormValues): void => {
    const newDate = {
      ...data,
      timestamp: format(
        parse(data.timestamp, "yyyy-MM-dd'T'HH:mm", new Date()),
        "yyyy-MM-dd'T'HH:mm"
      ),
    };
<<<<<<<< HEAD:src/pages/backlog/AddForm/Backlog.tsx
    const newTask = { id: Date.now(), ...newDate, image: data.image || null, isLegacy: false };
========

    const newTask = {
      id: Date.now(),
      ...newDate,
      image: data.image || undefined,
      isLegacy: false,
      status: newDate.status as TaskStatus,
    };
>>>>>>>> main:src/pages/backlog/AddForm/Task.tsx
    dispatch(addBacklogTask(newTask));
    setOpen(false);
    reset();
  };

  const FileInput = ({ field }: { field: ControllerRenderProps<FormValues, 'image'> }) => {
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
      const file = event.target.files?.[0];
      field.onChange(file);
    };

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type='file'
          accept='image/*'
          onChange={handleFileChange}
          style={{ display: 'none' }}
          id='file'
        />
        <label htmlFor='file'>
          <Button
            variant='contained'
            component='span'
            startIcon={<CloudUploadIcon />}
            sx={{ textTransform: 'none' }}
          >
            {t('formImage.button')}
          </Button>
        </label>
        {field.value && (
          <Typography
            variant='body2'
            sx={{ mt: 1 }}
          >
<<<<<<<< HEAD:src/pages/backlog/AddForm/Backlog.tsx
            {t('formImage.value')} {field.value.name}
========
            {t('formImage.value')}
            {field.value.name}
>>>>>>>> main:src/pages/backlog/AddForm/Task.tsx
          </Typography>
        )}
      </Box>
    );
  };

  return (
    <Dialog
      disableScrollLock
      open={open}
      onClose={(): void => setOpen(false)}
      fullWidth
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'center' }}>
        {t('ceateNewTask.message')}
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='title'
            control={control}
            rules={{
              required: t('formTaskRequired.required'),
              minLength: { value: 3, message: t('formTaskRequired.message') },
            }}
            render={({ field }) => (
              <TextField
                {...field}
<<<<<<<< HEAD:src/pages/backlog/AddForm/Backlog.tsx
                label= {t('ceateNewTask.labelTasks')}
========
                label={t('ceateNewTask.labelTasks')}
>>>>>>>> main:src/pages/backlog/AddForm/Task.tsx
                fullWidth
                margin='dense'
                error={!!errors.title}
                helperText={errors.title?.message}
              />
            )}
          />
          <Controller
            name='storyPoints'
            control={control}
            rules={{
              required: t('formStoryPointRequired.required'),
              min: { value: 1, message: t('formStoryPointRequired.message') },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label={t('ceateNewTask.labelStory')}
                type='number'
                fullWidth
                margin='dense'
                error={!!errors.storyPoints}
                helperText={errors.storyPoints?.message}
              />
            )}
          />
          <Controller
            name='description'
            control={control}
            rules={{
              required: t('formDescription.required'),
              minLength: { value: 3, message: t('formDescription.message') },
            }}
            render={({ field }) => (
              <TextField
                {...field}
<<<<<<<< HEAD:src/pages/backlog/AddForm/Backlog.tsx
                label={t('ceateNewTask.labelDesc')}
========
                label={t('labelDesc')}
>>>>>>>> main:src/pages/backlog/AddForm/Task.tsx
                fullWidth
                multiline
                rows={2}
                margin='dense'
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            )}
          />
          <Controller
            name='timestamp'
            control={control}
            rules={{
              required: t('formDate.required'),
            }}
            render={({ field }) => (
              <TextField
                {...field}
                type='datetime-local'
                fullWidth
                margin='dense'
                error={!!errors.timestamp}
                helperText={errors.timestamp?.message}
              />
            )}
          />
        </form>
        <Controller
          name='image'
          control={control}
          render={({ field }) => <FileInput field={field} />}
        />
      </DialogContent>

      <DialogActions>
        <Button
          onClick={() => setOpen(false)}
          sx={{ color: 'black' }}
        >
<<<<<<<< HEAD:src/pages/backlog/AddForm/Backlog.tsx
         {t('ceateNewTask.cancel')}
========
          {t('cancel')}
>>>>>>>> main:src/pages/backlog/AddForm/Task.tsx
        </Button>
        <Button
          type='submit'
          onClick={handleSubmit(onSubmit)}
          variant='contained'
          color='primary'
        >
<<<<<<<< HEAD:src/pages/backlog/AddForm/Backlog.tsx
          {t('ceateNewTask.create')}
========
          {t('create')}
>>>>>>>> main:src/pages/backlog/AddForm/Task.tsx
        </Button>
      </DialogActions>
    </Dialog>
  );
};
