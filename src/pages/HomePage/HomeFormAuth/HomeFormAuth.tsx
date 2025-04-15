
import { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';

type FormValues = {
  open: boolean,
  title: string;
  handleClick: (email: string, password:string)=> void 
}


export const HomeFormAuth = ({open,title,handleClick }:FormValues )  => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  return (
    <Dialog
      disableScrollLock
      open = {open}
      fullWidth
    >
      
    </Dialog>
  )
}

