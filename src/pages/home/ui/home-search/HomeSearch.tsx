import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { setFilterProject } from '../../../../store/projects/projects.slice';
import debounce from 'lodash.debounce';
import { useCallback } from 'react';

const AppSearch = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const filterProject: string = useAppSelector((state) => state.projects.filterProject);

  const debouncedDispatch = useCallback(
    debounce((value: string) => {
      dispatch(setFilterProject(value));
    }, 300),
    [dispatch]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    debouncedDispatch(value);
  };

  return (
    <TextField
      id='outlined-search'
      label={t('homeSearch.title')}
      type='search'
      sx={{ minWidth: '100%' }}
      value={filterProject}
      onChange={handleChange}
    ></TextField>
  );
};

export default AppSearch;
