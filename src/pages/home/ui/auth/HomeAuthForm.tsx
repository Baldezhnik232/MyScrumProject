import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm, Controller } from 'react-hook-form';
import { Box, Input, FormControl, TextField } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';

interface AuthFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  
}


type FormValues = {
  country: {
    code: string;
    label: string; 
    phone: string
  };
};

interface HomeAuthForm {
  open: boolean;
  onClose: () => void;
}

export const HomeAuthForm = ({ open, onClose }: HomeAuthForm) => {

  
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<AuthFormInputs>({
    
  });

  const onSubmit = (data: AuthFormInputs) => {
    console.log(data);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={onClose}
      >
        <DialogTitle>{'Registration'}</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter your personal information.</DialogContentText>
        </DialogContent>
      <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
            sx={{display:'flex',
            flexDirection:'row',
            gap:'1rem',
            
          }}
            >
              <Box
              >
                <FormLabel>First name</FormLabel>
                <Controller
                  name='firstName'
                  control={control}
                  render={({ field }) => <TextField {...field} />}
                />
              </Box>
              <Box>
                <FormLabel>Last name</FormLabel>
                <Controller
                  name='firstName'
                  control={control}
                  render={({ field }) => <TextField {...field} />}
                />
              </Box>
            </Box>
            <Box
              sx={{display:'flex',
              flexDirection:'row',
              gap:'1rem'}}
            >
              <Box
              >
                <FormLabel>Email</FormLabel>
                <Controller
                  name='firstName'
                  control={control}
                  render={({ field }) => <TextField {...field} />}
                />
              </Box>
              <Box>
                <FormLabel>Phone number</FormLabel>
                <FormControl
                  size='small'
                >

                </FormControl>
                <Controller
                  name='firstName'
                  control={control}
                  render={({ field }) => <TextField {...field} />}
                />
              </Box>
            </Box>
            
          </form>
          </DialogContent>
        <DialogContent>
          <DialogContentText>
            By clicking Register, you agree to our Terms, Privacy Policy and Cookies Policy.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onClose}
            autoFocus
          >
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
