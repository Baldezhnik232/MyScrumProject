import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';

import { useForm, Controller } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { format, parse } from 'date-fns';
import { Sprint } from '../../../api/types/interfaceApi.tsx';
import { useAppDispatch } from '../../../store/hooks/hooks.ts';
import { useTranslation } from 'react-i18next';
import { addSprints } from '../../../store/sprintsSlice.ts';

type FormSprintsValues = {
  projectId: number;
  title: string;
  description: string;
  timestamp: string;
};

interface AppFormPropsSprints {
  open: boolean;
  addSprint: (value: Sprint) => void;
  setOpen: (value: boolean) => void;
}

export const AppFormSprints = ({ open, setOpen }: AppFormPropsSprints) => {
  const { id } = useParams<{ id: string }>();

  const projectId = id ? parseInt(id, 10) : 0;

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormSprintsValues>({
    defaultValues: {
      title: '',
      description: '',
      timestamp: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
    },
  });
  const onSubmit = (data: FormSprintsValues) => {
    const newData = {
      ...data,
      timestamp: format(
        parse(data.timestamp, "yyyy-MM-dd'T'HH:mm", new Date()),
        "yyyy-MM-dd'T'HH:mm"
      ),
    };
    const newSprints = { sprintId: Date.now(), ...newData, projectId };
    dispatch(addSprints(newSprints));
    setOpen(false);
    reset();
  };

  return (
    <Dialog
      disableScrollLock
      open={open}
      onClose={(): void => setOpen(false)}
      fullWidth
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'center' }}>
        {t('createNewSprint.message')}
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
                label= {t('createNewSprint.labelSprint')}
                fullWidth
                margin='dense'
                error={!!errors.title}
                helperText={errors.title?.message}
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
                label={t('labelDesc')}
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
              required: 'ssdsd',
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
      </DialogContent>

      <DialogActions>
        <Button
          onClick={() => setOpen(false)}
          sx={{ color: 'black' }}
        >
          {t('cancel')}
        </Button>
        <Button
          type='submit'
          onClick={handleSubmit(onSubmit)}
          variant='contained'
          color='primary'
        >
          {t('create')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
