import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import styles from './Login.module.scss';
import { fetchAuth, selectIsAuth } from 'redux/slices/auth';

const Login = () => {
  const isAuth = useSelector(selectIsAuth);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = values => {
    console.log(values);
    dispatch(fetchAuth(values));
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Вхід в аккаунт
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="Email"
          type="email"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register('email', { required: 'Вкажіть пошту' })}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="Password"
          type="password"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register('password', { required: 'Вкажіть пароль' })}
          fullWidth
        />
        <Button type="submit" size="large" variant="contained" fullWidth>
          Login
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
