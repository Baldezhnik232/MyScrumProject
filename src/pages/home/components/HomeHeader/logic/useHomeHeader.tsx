

import { useTranslation } from "react-i18next"
import {SelectChangeEvent} from '@mui/material/Select'

export const useLanguage = () =>  {
  const {i18n } = useTranslation();
  const handleChange = (event:SelectChangeEvent):void => {
      i18n.changeLanguage(event.target.value)
  }
  return {
    language: i18n.language, 
    handleChange
  }
}