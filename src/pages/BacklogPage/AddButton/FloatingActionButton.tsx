import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import AddIcon from '@mui/icons-material/Add';

import { AppForm } from '../AddForm/CreateFormTask';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

interface AppButtonAddProps {
  setOpen: (value: boolean) => void;
}

export const AppButtonAdd = ({ setOpen }: AppButtonAddProps) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{ display: 'flex' }}
      onClick={() => {
        setOpen(true);
      }}
    >
      <AddIcon sx={
        {fontSize:{
          xs: 'small',
          lg: 'large'
        }}}/>
      <Typography sx={{fontSize:{xs: '0.6rem', lg: '1rem'}}}>{t('newTask.title')}</Typography>
    </Box>
  );
};
