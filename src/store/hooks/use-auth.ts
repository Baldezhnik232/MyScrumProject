
import { useAppSelector } from './hooks'

export const useAuth = () => {
  const {email, token, id} = useAppSelector(state => state.auth);
  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}