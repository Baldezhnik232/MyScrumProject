import { useState, useEffect } from 'react';
import { ITODo } from '../../types/data';
import AppHeader from '././AppHeader/AppHeader'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { useTranslation } from "react-i18next";
import {Container,Typography } from "@mui/material";





const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Router>
      <AppHeader/>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h2">{t("welcome")}</Typography>
      </Container>
    </Router>
  );
}

export default App;

