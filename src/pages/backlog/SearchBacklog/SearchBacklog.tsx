import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../store/hooks.ts';
import { setFilterBacklog } from '../../../store/backlog/backlog.slice.ts';

export const AppSearchBacklog = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const filterBacklog = useAppSelector((state) => state.backlog.filterBacklog);

  return (
    <TextField
      label={t('backlogSearch.title')}
      type='search'
      sx={{ minWidth: '100%', mb: '1rem' }}
      value={filterBacklog}
      onChange={(e) => dispatch(setFilterBacklog(e.target.value))}
    ></TextField>
  );
};
