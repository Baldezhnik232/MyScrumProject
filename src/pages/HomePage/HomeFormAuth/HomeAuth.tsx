

import {  signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { HomeFormAuth  } from './HomeFormAuth';
import { useAppDispatch } from '../../../store/hooks';
import {setUser} from "../../../store/authSlice"


interface AppAuth {
  open: boolean,
  setOpen: (value: boolean) => void,
  onSuccess:() => void;
}

export const AppAuth = ({ open, setOpen, onSuccess}: AppAuth) => {
  const dispatch = useAppDispatch();

  const handleLogIn = (email: string, password: string )=> {
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email, password)
    .then(({user})=> {
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.refreshToken,
      }))
      setOpen(false);        
      onSuccess();    
    })
    .catch(error => {
      console.error('login error:', error);
    });
  }

  const handleSignUp = (email: string, password: string )=> {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,email, password)
    .then(({user}) => {
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.refreshToken,
      })
    );
    setOpen(false);
    onSuccess();
    })
    .catch(error => {
      console.error('login error:', error);
    });

  }

  return (
      <HomeFormAuth
          open={open}
          setOpen={setOpen}
          onLogin={handleLogIn}
          onRegister={handleSignUp}
      />
  );
};

