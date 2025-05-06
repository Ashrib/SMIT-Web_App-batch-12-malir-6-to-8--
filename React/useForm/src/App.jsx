import { useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

function App() {

  const schema = yup.object({ /// yup schema
    email: yup.string().required().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'invaild email'),
    username: yup.string().required().min(3,'min 3 chars'),
    password: yup.string().required(),
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema) // provide schema
  })


  const onSubmit = (data) => console.log(data)



  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} >
      <input type="text"  placeholder='username'
        {...register("username")} 
      />
      {errors.username && (<span>{errors.username.message}</span>)}
      <input type="text"  placeholder='email'
        {...register("email")}
        
        />
        {errors.email && (<span>{errors.email.message}</span>)}
      <input type="password"  placeholder='password'
        {...register("password")}
        
        />
        {errors.password && (<span>{errors.password.message}</span>)}
      <input type="submit" />
      </form>


    </>
  )
}

export default App
