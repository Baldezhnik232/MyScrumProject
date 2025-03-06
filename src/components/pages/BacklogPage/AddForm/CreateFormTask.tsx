import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { format, parse } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { addBacklogTask } from '../../../../store/backlogSlice.tsx';

import { Typography, Box } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

type FormValues = {
  title: string;
  storyPoints: number;
  description: string;
  timestamp: string;
  status: string;
  sprintId: null;
  image?: File;
};

interface AppFormProps {
  open: boolean;
  addTask: (value) => void;
  setOpen: (value: boolean) => void;
}

export const AppForm = ({ open, setOpen }: AppFormProps) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

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
      status: 'todo',
      sprintId: null,
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
    const newTask = { id: Date.now(), ...newDate, image: data.image };
    dispatch(addBacklogTask(newTask));
    setOpen(false);
    reset();
  };

  const FileInput = ({ field }) => {
    const handleFileChange = (event): void => {
      const file = event.target.files?.[0];
      field.onChange(file);
    };

    return (
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
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
            Загрузить изображение
          </Button>
        </label>
        {field.value && (
          <Typography
            variant='body2'
            sx={{ mt: 1 }}
          >
            Выбран файл: {field.value.name}
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
        Create New Task
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
                label='Task #'
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
                label='Story Points'
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
                label='Description'
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
          Cancel
        </Button>
        <Button
          type='submit'
          onClick={handleSubmit(onSubmit)}
          variant='contained'
          color='primary'
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};
