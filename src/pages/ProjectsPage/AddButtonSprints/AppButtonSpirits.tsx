import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';

interface AppButtonAddProps {
  setOpen: (value: boolean) => void;
}

export const AppButtonAddSprints = ({ setOpen }: AppButtonAddProps) => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{ display: 'flex' }}
      onClick={() => {
        setOpen(true);
      }}
    >
      <AddIcon
        sx={{
          fontSize: {
            xs: 'small',
            lg: 'large',
          },
        }}
      />
      <Typography sx={{ fontSize: { xs: '0.6rem', lg: '1rem' } }}>
        {t('newSprint.title')}
      </Typography>
    </Box>
  );
};
