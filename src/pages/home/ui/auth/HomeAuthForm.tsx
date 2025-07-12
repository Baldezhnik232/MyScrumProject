import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm, Controller } from 'react-hook-form';
import { Box, Input, FormControl, TextField, Backdrop } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
// import PhoneInput from 'react-phone-number-input';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
// import 'react-phone-input-2/dist/style.css'
import { useTheme } from '@mui/material/styles';
import ru from 'react-phone-input-2/lang/ru.json'

import { MyCaptha } from './HomeCapthaForm';

// import 'react-phone-number-input/style.css'
interface AuthFormInputs {
   
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string,
    confirmPassword: string

}
type FormImputs = {
  name: 'firstName' | 'lastName' | 'email' | 'phoneNumber' | 'password' | 'confirmPassword';
  label: string;
  type: string;
};

interface HomeAuthForm {
  open: boolean;
  onClose: (value: boolean) => void;
}

export const HomeAuthForm = ({ open, onClose }: HomeAuthForm) => {
  const theme = useTheme();
  const formInputs: FormImputs[] = [
    { name: 'firstName', label: ' Имя', type: 'text' },
    { name: 'lastName', label: 'Фамилия', type: 'text' },
    { name: 'email', label: 'Почта', type: 'text' },
    { name: 'phoneNumber', label: 'Номер телефона', type: 'phone' },
    { name: 'password', label: 'Пароль', type: 'text' },
    { name: 'confirmPassword', label: 'Подтвердите пароль', type: 'text' },
  ];

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AuthFormInputs>({
    defaultValues: {
        firstName: '',
        lastName: '',
        email:'',
        phoneNumber: '',
        password: ''
    }
  });

  const onSubmit = (data: AuthFormInputs) => {
    console.log(data);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={()=> onClose(false)}
        slotProps={{
          paper: {
            style: { overflow: 'visible', position: 'relative' },
          },
          backdrop: {
            style: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)'
              }
          }
        }}
      >
        <DialogTitle>{'Региситрация'}</DialogTitle>
        <DialogContent>
          <DialogContentText color='black'> Введите свои личные данные.</DialogContentText>
        </DialogContent>
        <DialogContent
          style={{
            marginBlockStart: '-1rem',
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2,1fr)',
                gap: { xs: '1.1rem', sm: '1rem' },
              }}
            >
              {formInputs.map((item) => (
                <Box key={item.name}>
                  <FormLabel>{item.label}</FormLabel>
                  <Controller
                    name={item.name}
                    control={control}
                    rules={{
                      required:   'Это поле должно быть заполнено',
                      minLength: {value:3, message: 'Заполни меня'}
                    }}
                    render={({ field, fieldState: { error } }) =>
                      item.type === 'phone' ? ( 
                        <FormControl error={!!error}>            
                        <PhoneInput
                        {...field}
                          specialLabel=''
                          localization= {
                            
                              ru
                            
                          }
                          inputProps={{
                            placeholder: 'Номер в международном формате',
                            required: true,
                            errors:!!error,
                            helperText: error?.message
                          }}
                          dropdownStyle = {{
                            width: '15rem',
                            height:'6rem',
                            overflow: 'auto'
                          }}
                          inputStyle={{
                            border: error ? '1px solid red' : '',
                            width: '100%',
                            [theme.breakpoints.up('xs')]: { width: '14.6rem' },
                          }}
                        />
                          {error && <FormHelperText>{error?.message}</FormHelperText>}
                      </FormControl>
                      ) : (
                        <TextField
                          {...field}
                          placeholder={item.label}
                          error={!!errors[item.name]}
                          helperText={errors[item.name]?.message}
                          sx={{
                            width: '14.6rem',
                          }}
                        />
                      )
                    }
                  />
                </Box>
              ))}
            </Box>
          </form>
        </DialogContent>
        <DialogContent
          style={{
            marginBlockStart: '1rem',
          }}
        >
          <DialogContentText sx={{ fontSize: '0.8rem', marginBlockEnd: '2rem' }}>
            Нажимая «Зарегистрироваться», вы соглашаетесь с нашими Условиями, Политикой
            конфиденциальности и Политикой в ​​отношении файлов cookie.
          </DialogContentText>
          <MyCaptha />
        </DialogContent>

        <DialogActions
          style={{
            display: 'flex',
            justifyContent: 'start',
            paddingInline: '1.5rem',
            paddingBlockEnd: '2rem',
          }}
        >
          <Button
            type='submit'
            sx={{
              fontSize: '1rem',
              textTransform: 'capitalize',
              color: 'white',
              backgroundColor: 'green',
            }}
            onClick={handleSubmit(onSubmit)}
            
          >
            Регистрация
          </Button>
        </DialogActions>
      </Dialog>
      
    </React.Fragment>
  );
};
