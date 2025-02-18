import { useForm } from "react-hook-form";
import { useState } from "react";
import Navbar1 from "../Navbar/Navbar1";
import Navbar2 from "../Navbar/Navbar2";
import img from "../../assets/homelogo.jpg";

function Admin_login() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (data) => {
    if (data.username === "admin" && data.password === "password") {
      alert("Login Successful!");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <>
    <div>
    <Navbar1 />   
    <Navbar2 />
    </div>
    <div className="bg-zinc-200 bg-cover flex items-center justify-center min-h-screen overflow-auto p-20">
    <div className="bg-white w-full max-w-[500px] p-6 shadow-lg border rounded-lg mt-5">
    <div className="flex items-center justify-start mb-4 gap-20">
    <img src={img} alt="Admin Logo" className="w-20 h-20 object-contain" />
        <h2 className="text-2xl font-bold text-center">Admin Login</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-1">Username</label>
            <input type="text" className="w-full border rounded p-2" {...register("username", { required: true })} />
            {errors.username && <p className="text-red-500 text-sm">Username is required</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input type="password" className="w-full border rounded p-2" {...register("password", { required: true })} />
            {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
          </div>
          {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
          <button type="submit" className="w-full bg-blue-400 text-white py-2 rounded">Login</button>
        </form>
      </div>
    </div>
    </>
  );
}
 export default Admin_login;