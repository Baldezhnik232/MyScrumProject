// import { useState } from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   TextField,
//   Typography,
//   Link,
// } from '@mui/material';

// import { useForm, Controller } from 'react-hook-form';
// import { useTranslation } from 'react-i18next';

// type FormValues = {
//   email: string;
//   password: string;
// };

// interface AppFormPropsAuth {
//   open: boolean;
//   setOpen: (value: boolean) => void;
//   onLogin: (email: string, password: string) => void;
//   onRegister: (email: string, password: string) => void;
//   authError: string | null;
// }

// export const HomeFormAuth = ({
//   open,
//   setOpen,
//   onLogin,
//   onRegister,
//   authError,
// }: AppFormPropsAuth) => {
//   const [isLogin, setIsLogin] = useState(true);

//   const { t } = useTranslation();

//   const {
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm<FormValues>({
//     defaultValues: {
//       email: '',
//       password: '',
//     },
//   });

//   const onSubmit = ({ email, password }: FormValues) => {
//     isLogin ? onLogin(email, password) : onRegister(email, password);
//   };
//   const toggle = () => setIsLogin((prev) => !prev);

//   return (
//     <Dialog
//       open={open}
//       disableScrollLock
//       onClose={(): void => setOpen(false)}
//       fullWidth
//     >
//       <DialogTitle sx={{ display: 'flex', justifyContent: 'center' }}>
//         {isLogin ? t('LogIn') : t('SignUp')}
//       </DialogTitle>
//       <DialogContent>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Controller
//             name='email'
//             control={control}
//             rules={{
//               required: t('formTaskRequired.required'),
//             }}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label={t('formAuthEmail')}
//                 type='email'
//                 fullWidth
//                 margin='dense'
//                 error={!!errors.email}
//                 helperText={errors.email?.message}
//               />
//             )}
//           />
//           <Controller
//             name='password'
//             control={control}
//             rules={{
//               required: t('formTaskRequired.required'),
//             }}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label={t('formAuthPassword')}
//                 type='password'
//                 fullWidth
//                 margin='dense'
//                 error={!!errors.password}
//                 helperText={errors.password?.message}
//               />
//             )}
//           />
//         </form>
//         <Typography
//           align='center'
//           sx={{ mt: 2 }}
//         >
//           {isLogin ? (
//             <>
//               {t('createAcc')}
//               <Link
//                 href='#'
//                 underline='always'
//                 onClick={toggle}
//                 sx={{ cursor: 'pointer' }}
//               >
//                 {' '}
//                 {t('SignUpAcc')}
//               </Link>
//             </>
//           ) : (
//             <>
//               {t('or')}
//               <Link
//                 href='#'
//                 underline='always'
//                 onClick={toggle}
//                 sx={{ cursor: 'pointer' }}
//               >
//                 {' '}
//                 {t('LogInAcc')}
//               </Link>
//             </>
//           )}
//           {authError && (
//             <Typography
//               color='error'
//               align='center'
//               sx={{ mt: 1 }}
//             >
//               {t(`fireBaseMess.${authError}`)}
//             </Typography>
//           )}
//         </Typography>
//       </DialogContent>
//       <DialogActions>
//         <Button
//           type='submit'
//           onClick={handleSubmit(onSubmit)}
//           variant='contained'
//         >
//           {isLogin ? t('') : t('SignUp')}
//         </Button>
//         <Button onClick={() => setOpen(false)}>{t('close')}</Button>
//       </DialogActions>
//     </Dialog>
//   );
// };
