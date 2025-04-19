import {  useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type FormValues = {
  email: string;
  password: string;
};

interface AppFormPropsAuth {
  open: boolean;
  setOpen: (value: boolean) => void;
  onLogin: (email: string, password: string) => void;
  onRegister: (email: string, password: string) => void;
}

export const HomeFormAuth = ({
  open,
  setOpen,
  onLogin,
  onRegister,
}: AppFormPropsAuth) => {
  const [isLogin, setIsLogin] = useState(true);

  const { t } = useTranslation();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = ({ email, password }: FormValues) => {
    isLogin ? onLogin(email, password) : onRegister(email, password);
  };

  return (
    <Dialog
      open={open}
      disableScrollLock
      onClose={(): void => setOpen(false)}
      fullWidth
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'center' }}>
        {isLogin ? 'Login' : 'Register'}
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='email'
            control={control}
            rules={{
              required: t('formTaskRequired.required'),
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label='email'
                type='email'
                fullWidth
                margin='dense'
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
          <Controller
            name='password'
            control={control}
            rules={{
              required: t('formTaskRequired.required'),
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label='password'
                type='password'
                fullWidth
                margin='dense'
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />
        </form>
        <Typography
          align='center'
          sx={{ mt: 2, cursor: 'pointer' }}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? 'Еще нет аккаунта? Зарегистрируйтесь'
            : 'Уже есть аккаунт? Войдите'}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          type='submit'
          onClick={handleSubmit(onSubmit)}
          variant='contained'
        >
          {isLogin ? 'Войти' : 'Зарегистрироваться'}
        </Button>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
