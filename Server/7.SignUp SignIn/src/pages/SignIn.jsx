import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext.jsx';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

export default function SignIn() {
  let navigate = useNavigate();
  let [loading, setLoading] = useState(false);
  let { setUser } = useContext(AuthContext);

  const schema = yup.object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitButton = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:4000/auth/login', data);
      const { data: userData, token } = response.data;

      toast.success(`Welcome ${userData.isAdmin ? 'Admin' : 'User'} ${userData.username}!`, {
        position: "top-right",
        autoClose: 3000,
        onClose: () => {
          setUser(userData);
          Cookies.set('token', token); 
          navigate("/dashboard"); 
        },
        toastId: "login-success",
      });

      setLoading(false);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed!', {
        position: "top-right",
        autoClose: 3000,
        toastId: "login-error",
      });
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 flex flex-col justify-center items-center">
      <div className="p-7 border-2 w-[90%] sm:w-[70%] lg:w-[50%] xl:w-[30%] rounded-2xl">
        <h1 className="text-center text-4xl">Sign In</h1>
        <form
          onSubmit={handleSubmit(submitButton)}
          className="max-w-md mx-auto mt-3 flex flex-col"
        >
          <div className="relative z-0 w-full mb-5 group">
            <input
              {...register("email")}
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              {...register("password")}
              type="password"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </div>
          <button
            disabled={loading}
            type="submit"
            className={`text-white ${loading ? "bg-red-800" : "bg-blue-700 hover:bg-blue-800"} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          toastStyle={{ zIndex: 9999 }}
        />
      </div>
    </div>
  );
}