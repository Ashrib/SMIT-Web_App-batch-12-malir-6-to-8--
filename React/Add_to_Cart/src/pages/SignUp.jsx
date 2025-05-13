import React from 'react'
import Container from '@mui/material/Container';
import { Box, Button, TextField, Typography,Stack, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

export default function SignUp() {
    const schema = yup
    .object({
      firstName: yup.string().required().min(3, "First Name atleast 3 chars"),
      lastName: yup.string().required().min(3, "Last Name atleast 3 chars"),
      email: yup.string().required().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email is invaild'),
      password: yup.string().required().min(6, 'Password should be atleast 6 characters'),
      // gender: yup.string().required(),
    })
    .required()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema)
      })
    
      const onSubmit = (data) => console.log(data)
    
    
  return (

    <>
    
    <Container maxWidth="sm" 
    sx={{
      padding: 2,
      border: "2px solid black"
    }}>
        
        <Box>
            <Typography variant='h2'>
                SignUp
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}>
                    
                <Stack direction={'row'} spacing={2}>
                <TextField id="outlined-basic" label="First Name" variant="outlined" 
            {...register('firstName')}
            error={errors?.firstName}
            helperText={errors?.firstName?.message}
            />
            <TextField id="outlined-basic" label="Last Name" variant="outlined" 
            {...register('lastName')}
            error={errors?.lastName}
            helperText={errors?.lastName?.message}
            />
                </Stack>
            <TextField id="outlined-basic" label="Email" variant="outlined" 
            {...register('email')}
            error={errors?.email}
            helperText={errors?.email?.message}
            />

            <TextField id="outlined-basic" label="Password" variant="outlined" 
            {...register('password')}
            error={errors?.password}
            helperText={errors?.password?.message}
            />


{/* <RadioGroup 
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        
      </RadioGroup> */}

            <Button type='submit' variant="contained">Submit</Button>
            </Stack>
            </form>

        </Box>
        </Container>
        
        </>

  )
}
