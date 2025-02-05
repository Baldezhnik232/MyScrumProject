
import { useState } from "react";
import React from "react";
import { useTranslation } from "react-i18next"
import {SelectChangeEvent} from '@mui/material/Select'

export  function useLanguage()  {
  const {i18n } = useTranslation();
  const [lng, setLng] = React.useState<string>('');

  const handleChange = (event:SelectChangeEvent):void => {
      const newLang: string = event.target.value ;
      setLng(newLang);
      i18n.changeLanguage(newLang)
  }
  return {
    lng, handleChange
  }
}