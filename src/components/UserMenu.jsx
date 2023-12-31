import s from '../Styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import authSelectors from '../redux/auth/auth-selectors';
import { Button } from '@chakra-ui/button';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.user__container}>
      <p className={s.user__link}>Welcome, </p>
      <p className={s.user__name}>{name} </p>
      <Button
        colorScheme="yellow"
        size="lg"
        type="submit"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        Log out
      </Button>
    </div>
  );
}
