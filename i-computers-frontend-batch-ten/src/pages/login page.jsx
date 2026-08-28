import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


export default function LoginPage() {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const navigate = useNavigate()

  function handleLogin(){
    console.log("Email: ", email);
    console.log("Password: ", password);
    console.log(import.meta.env);

    axios.post(import.meta.env.VITE_API_URL + "/users/login",{
      email:email,
      password:password
      
    }).then((response)=>{
      
      localStorage.setItem("token",response.data.token);
      toast.success("Login successfully");

      if(response.data.isAdmin){
          navigate("/admin")
      }else{
        navigate("/")
      }
      
    }).catch((error)=>{
      toast.error(error.response.data.message)

      
    });
    
  }
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[url('/login-bg.jpg')] bg-center bg-cover bg-no-repeat">
      <div className="w-1/2 h-full "></div>

      <div className="w-1/2 h-full  flex justify-center items-center">
        <div className="w-[400px] h-[500px] backdrop-blur-lg rounded-xl shadow-2xl flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-8 text-secondary">Sign in</h1>

          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
            placeholder="Email"
            className="w-3/4 p-3 mb-6 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
          ></input>

          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
            className="w-3/4 p-3 mb-6 rounded-lg border border-gray-400 focus:ring-2 focus:ring-accent"
          />
          <p className="mb-6 w-3/4 text-right text-white">
            Forget password?
            <Link to="/forgot-Password" className="text-accent ">
              
              Click here
            </Link>
          </p>
          <button onClick={handleLogin} className="w-3/4 p-3 bg-accent text-white rounded-lg">
            Sign in
          </button>

          <p className="mt-6 w-3/4 text-center text-white">
            Don't have an account?
            <Link to="/register" className="text-accent">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
