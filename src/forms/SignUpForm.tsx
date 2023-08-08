// forms/SignUpForm.tsx
import React from 'react';
import { SignUpFormData } from '../utils/types'; // Import the SignUpFormData type
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Copyright } from '@mui/icons-material';
import { 
  Avatar, 
  Box, 
  Button, 
  Checkbox, 
  Container, 
  CssBaseline, 
  FormControlLabel, 
  Grid, 
  Link, 
  TextField, 
  Typography 
} from '@mui/material';

import { signIn } from '../features/user/userSlice';

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required').default(''),
  lastName: yup.string().required('Last Name is required').default(''),
  email: yup.string().required('Email is required').email('Must be a valid email address').default(''),
  password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long').default(''),
  confirmPassword: yup.string()
     .oneOf([yup.ref('password'), undefined], 'Passwords must match')
     .required('Confirm Password is required').default(''),
  subscribe: yup.boolean().default(true)
});


const SignUpForm: React.FC = () => {

  const { control, register, handleSubmit, formState} = useForm<SignUpFormData>({
    resolver: yupResolver(schema),
    defaultValues: schema.getDefault()
  });

  const onSubmit: SubmitHandler<SignUpFormData> = data => {
    signIn(data);
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  {...register('firstName')}
                />
                {formState.errors.firstName && <p>{formState.errors.firstName.message}</p>}
                
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Last Name"
                type="text" 
                id="lastName" 
                {...register('lastName')}
              />
              {formState.errors.lastName && <span>{formState.errors.lastName.message}</span>}
            </Grid>

            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="E-mail"
                type="email" 
                id="email" 
                {...register('email')}
              />
              {formState.errors.email && <span>{formState.errors.email.message}</span>}
            </Grid>

            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password" 
                id="password" 
                {...register('password')}
              />
              {formState.errors.password && <span>{formState.errors.password.message}</span>}
            </Grid>

            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="confirm Password"
                type="password" 
                id="confirmPassword" 
                {...register('confirmPassword')}
              />
              {formState.errors.confirmPassword && <span>{formState.errors.confirmPassword.message}</span>}
            </Grid>
            
            <Grid item xs={12}>
              <Controller
                      name="subscribe"
                      control={control}
                      render={({ field }) => (
                          <FormControlLabel
                              control={
                                  <Checkbox
                                      checked={field.value}
                                      onChange={e => field.onChange(e.target.checked)}
                                      color="primary"
                                  />
                              }
                              label="Subscribe to newsletter"
                          />
                      )}
                  />
            </Grid>

          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpForm;
