

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import AddIcon from '@mui/icons-material/Add';
import {useTranslation} from "react-i18next";



interface AppButtonAddProps {
    setOpen: (value: boolean) => void;
}



export const AppButtonAddSpirits = ({setOpen}: AppButtonAddProps ) => {
    const {t} = useTranslation();

    return (
        <Box sx={{ '& > :not(style)': { m: 1 }} } onClick={()=>{setOpen(true)}}  >
            <Fab variant="extended"  color="primary">
                <AddIcon sx={{ mr: 1 }}  />
                {t("newSprint.title")}
            </Fab>
        </Box>



    )
}