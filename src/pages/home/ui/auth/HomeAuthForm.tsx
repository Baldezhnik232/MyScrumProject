import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, FormControl, TextField } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
// import PhoneInput from 'react-phone-number-input';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
// import 'react-phone-input-2/dist/style.css'
import { useTheme } from '@mui/material/styles';
import ru from 'react-phone-input-2/lang/ru.json';
import { MyCaptcha } from './HomeCaptchaForm';
import { FormContainer, useForm, Controller, FormProvider  } from 'react-hook-form-mui';
// import 'react-phone-number-input/style.css'
export interface AuthFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}
type FormInputs = {
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
  const formInputs: FormInputs[] = [
    { name: 'firstName', label: ' Имя', type: 'text' },
    { name: 'lastName', label: 'Фамилия', type: 'text' },
    { name: 'email', label: 'Почта', type: 'text' },
    { name: 'phoneNumber', label: 'Номер телефона', type: 'phone' },
    { name: 'password', label: 'Пароль', type: 'text' },
    { name: 'confirmPassword', label: 'Подтвердите пароль', type: 'text' },
  ];

  const methods = useForm<AuthFormInputs>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
  });

  const {
    formState: { errors },
  } = methods;

  const onSubmit = (data: AuthFormInputs) => {
    console.log('Валидация сработала ', data)
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={() => onClose(false)}
        slotProps={{
          paper: {
            style: { overflow: 'visible', position: 'relative', paddingInlineStart: '0.4rem' },
          },
          backdrop: {
            style: {
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
            },
          },
        }}
      >
        <DialogTitle>{'Регистрация'}</DialogTitle>
        <DialogContent sx={{ overflow: 'hidden' }}>
          <DialogContentText
            sx={{
              color: 'black',
            }}
          >
            {' '}
            Введите свои личные данные.
          </DialogContentText>
        </DialogContent>
        <DialogContent
          style={{
            marginBlockStart: '-1rem',
            overflow: 'hidden',
          }}
        >
          <FormContainer 
            formContext={methods}
            onSuccess={onSubmit}
          >
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2,1fr)',
                  gap: { xs: '0.4rem', sm: '1.3rem' },
                }}
              >
                {formInputs.map((item) => (
                  <Box key={item.name}>
                    <FormLabel>{item.label}</FormLabel>
                    <Controller
                      name={item.name}
                      rules={{
                        required: 'Это поле должно быть заполнено',
                        minLength: {
                          value: item.type === 'text' ? 3 : 10,
                          message:
                            item.type === 'text'
                              ? 'Введите данные полностью'
                              : 'Введите полный номер телефона ',
                        },
                      }}
                      render={({ field, fieldState: { error } }) =>
                        item.type === 'phone' ? (
                          <FormControl error={!!error}>
                            <PhoneInput
                              {...field}
                              country='by'
                              onlyCountries={['by', 'ru', 'ua', 'pl', 'lt', 'lv']}
                              regions={'europe'}
                              specialLabel=''
                              localization={ru}
                              inputProps={{
                                placeholder: 'Номер в международном формате',
                                required: true,
                                errors: !!error,
                                helperText: error?.message,
                              }}
                              dropdownStyle={{
                                width: '15rem',
                                marginBlockStart: '0.4rem',
                                height: '6rem',
                                overflow: 'auto',
                              }}
                              inputStyle={{
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                border: error ? '1px solid red' : '',
                                width: '14.6rem',
                                // [theme.breakpoints.up('xs')]: { width: '14.6rem' },
                              }}
                            />
                            {error && <FormHelperText>{error?.message}</FormHelperText>}
                          </FormControl>
                        ) : (
                          <TextField
                            {...field}
                            placeholder={item.label}
                            error={!!errors[item.name]}
                            autoComplete='off'
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
              <DialogContent
                style={{
                  marginBlockStart: '1rem',
                  marginInlineStart: '-1.5rem',
                  width: '30rem',
                  overflow: 'hidden',
                }}
              >
                <DialogContentText sx={{ fontSize: '0.8rem', marginBlockEnd: '2rem' }}>
                  Нажимая «Зарегистрироваться», вы соглашаетесь с нашими Условиями, Политикой
                  конфиденциальности и Политикой в ​​отношении файлов cookie.
                </DialogContentText>
              </DialogContent>
              <MyCaptcha />
              <DialogActions
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  marginInlineStart: '-0.5rem',
                  paddingBlockStart: '2rem',
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
                >
                  Регистрация
                </Button>
              </DialogActions>
            
          </FormContainer>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};
