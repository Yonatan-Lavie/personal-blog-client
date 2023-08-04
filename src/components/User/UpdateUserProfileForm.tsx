import { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { NewUserProfileForm, UserProfile } from '../../utils/types';
import { getUser, updateUser } from '../../features/user/userActions';
import { selectUserProfile } from '../../features/user/userSlice';
import { useSelector } from 'react-redux';


const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  username: yup.string().required(),
  photo: yup.string().optional(),
});

async function getProfileData ()  {
  if(selectUserProfile === null){
    await getUser()
  }
}

const UpdateUserProfileForm = () => {

  const userProfile: UserProfile | null = useSelector(selectUserProfile)

  const { register, handleSubmit, formState: { errors } } = useForm<NewUserProfileForm>({
    resolver: yupResolver(schema),
    defaultValues: userProfile || undefined,
  });
  
  const onSubmit: SubmitHandler<NewUserProfileForm> = data => {
    updateUser(data);
  }

  useEffect( () => {
    getProfileData();
  }, [])
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName')} placeholder="First Name" />
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <input {...register('lastName')} placeholder="Last Name" />
        {errors.lastName && <p>{errors.lastName.message}</p>}

        <input {...register('email')} placeholder="Email" />
        {errors.email && <p>{errors.email.message}</p>}

        <input {...register('username')} placeholder="Username" />
        {errors.username && <p>{errors.username.message}</p>}

        <input {...register('photo')} placeholder="Photo URL" />
        {errors.photo && <p>{errors.photo.message}</p>}

        <input type="submit" />
    </form>
  )
}

export default UpdateUserProfileForm