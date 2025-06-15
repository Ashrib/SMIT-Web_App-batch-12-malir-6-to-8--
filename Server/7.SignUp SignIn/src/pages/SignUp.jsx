import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();

  const schema = yup.object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    first_name: yup
      .string()
      .required("Enter first name.")
      .min(3, "min 3 chars"),
    last_name: yup
      .string()
      .required("Enter last name.")
      .min(3, "min 3 chars"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    age: yup
      .number()
      .typeError("Age must be a number")
      .integer("Age must be an integer")
      .min(1, "Age must be at least 1")
      .required("Age is required"),
    isAdmin: yup
      .boolean()
      .required("Please select user or admin"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:4000/auth/register', {
        username: `${data.first_name} ${data.last_name}`,
        email: data.email,
        password: data.password,
        age: data.age,
        marks: [], // default value
        isAdmin: data.isAdmin,
      });

      const result = response.data;
      console.log(result);

      toast.success('Registration successful! Redirecting to login...', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      onClose: () => navigate('/signIn'),
    });

  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message || 'Error during registration!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};

  return (
    <div className="mt-6 flex flex-col justify-center items-center-safe">
      <div className="p-7 border-2 w-[90%] sm:w-[70%] lg:w-[50%] xl:w-[30%] rounded-2xl">
        <h1 className="text-center text-4xl">Sign Up</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto mt-3 flex justify-center flex-col"
        >
          <div className="relative z-0 w-full mb-5 group">
            <input
              {...register("email")}
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                {...register("first_name")}
                type="text"
                name="first_name"
                id="first_name"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label
                htmlFor="first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
              {errors.first_name && <span className="text-red-500">{errors.first_name.message}</span>}
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                {...register("last_name")}
                type="text"
                name="last_name"
                id="last_name"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label
                htmlFor="last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
              {errors.last_name && <span className="text-red-500">{errors.last_name.message}</span>}
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              {...register("age")}
              type="number"
              name="age"
              id="age"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
            <label
              htmlFor="age"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Age
            </label>
            {errors.age && <span className="text-red-500">{errors.age.message}</span>}
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label className="block text-sm text-gray-500 dark:text-gray-400 mb-2">
              Account Type
            </label>
            <div className="flex items-center space-x-4">
              <div>
                <input
                  {...register("isAdmin")}
                  type="radio"
                  value={false}
                  id="user"
                  className="mr-2"
                />
                <label htmlFor="user" className="text-sm text-gray-500">User</label>
              </div>
              <div>
                <input
                  {...register("isAdmin")}
                  type="radio"
                  value={true}
                  id="admin"
                  className="mr-2"
                />
                <label htmlFor="admin" className="text-sm text-gray-500">Admin</label>
              </div>
            </div>
            {errors.isAdmin && <span className="text-red-500">{errors.isAdmin.message}</span>}
          </div>
          <input
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            value="Sign Up"
          />
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}