// import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
// import { HomeFormAuth } from './HomeFormAuth';
// import { useAppDispatch } from '../../../../store/hooks';
// import { setUser } from '../../../../store/auth/auth.slice';
// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';

// interface AppAuth {
//   open: boolean;
//   setOpen: (value: boolean) => void;
//   onSuccess: () => void;
// }

// export const AppAuth = ({ open, setOpen, onSuccess }: AppAuth) => {
//   const [authError, setAuthError] = useState<string | null>(null);

//   const { t } = useTranslation();

//   const dispatch = useAppDispatch();

//   const handleLogIn = (email: string, password: string) => {
//     const auth = getAuth();
//     signInWithEmailAndPassword(auth, email, password)
//       .then(({ user }) => {
//         dispatch(
//           setUser({
//             email: user.email,
//             id: user.uid,
//             token: user.refreshToken,
//           })
//         );
//         setOpen(false);
//         onSuccess();
//       })
//       .catch((error) => {
//         console.error('login error:', error);
//       });
//   };

//   const handleSignUp = (email: string, password: string) => {
//     const auth = getAuth();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(({ user }) => {
//         dispatch(
//           setUser({
//             email: user.email,
//             id: user.uid,
//             token: user.refreshToken,
//           })
//         );
//         setOpen(false);
//         onSuccess();
//         setAuthError('');
//       })
//       .catch((error) => {
//         if (error.code === 'auth/email-already-in-use') {
//           setAuthError('authRepeatEmail');
//         } else {
//           setAuthError('authError');
//         }
//       });
//   };

//   return (
//     <HomeFormAuth
//       open={open}
//       setOpen={setOpen}
//       onLogin={handleLogIn}
//       onRegister={handleSignUp}
//       authError={authError}
//     />
//   );
// };
