import React, { useState } from "react";

const AuthenticationPage = () => {
  const [isLogin, setIsLogin] = useState(true); 

  const handleCheckboxChange = (e) => {
    setIsLogin(e.target.checked); 
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
     
<<<<<<< HEAD
    <div className="hidden md:block md:w-1/2 bg-blue-500">
      <img
        src={loginImage}
        alt="Login"
        className="object-cover w-full h-full"
      />
      </div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-md max-w-md w-full">
       
        <h2 className="text-2xl font-bold mb-2">
          {isLogin ? "Login" : "Register"}
        </h2>

       
=======
      <div className="hidden md:block md:w-1/2 bg-blue-500">
        <img
          src={loginImage}
          alt="Login"
          className="object-cover w-full h-full"
        />
      </div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-md max-w-md w-full">
      
        <h2 className="text-2xl font-bold mb-2 text-center">
          {isLogin ? "Login" : "Register"}
        </h2>
        <p className="text-center mb-6">
          See your growth and get support!
        </p>
>>>>>>> ef91287d1b684f84c2d603d6ee0bfda86310d09f
        <input
          type="checkbox"
          checked={isLogin}
          onChange={handleCheckboxChange}
          className="hidden"
        />

        {isLogin ? (
<<<<<<< HEAD
=======
        
>>>>>>> ef91287d1b684f84c2d603d6ee0bfda86310d09f
          <form>
            <p className="text mb-6">
          See your growth and get support!
        </p>
            <div className="mb-4">
              <label htmlFor="loginEmail" className="block text-sm font-medium">
                Email*
              </label>
              <input
                type="email"
                id="loginEmail"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="loginPassword" className="block text-sm font-medium">
                Password*
              </label>
              <input
                type="password"
                id="loginPassword"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="minimum 8 characters"
              />
            </div>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div>
                <a href="#" className="text-sm text-indigo-600 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600"
            >
              Login
            </button>
            <p className="mt-4 text-sm">
              Not registered yet?{" "}
              <span className="text-indigo-600 cursor-pointer" onClick={() => setIsLogin(false)}>
               Create a new Account
              </span>
            </p>
          </form>
        ) : (
<<<<<<< HEAD
          
          <form>
            <p className="text-blue-600">Manage all your inventory efficiently</p>
            <p>Let's get you all setup so you can verify your personal account and begin setting up your work profile.</p>
            <div className="flex gap-4 mb-4">
=======
         
          <form>
          <div className="flex gap-4 mb-4">
>>>>>>> ef91287d1b684f84c2d603d6ee0bfda86310d09f
            <div className="w-1/2">
              <label htmlFor="firstName" className="block text-sm font-medium">
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your first name"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="lastName" className="block text-sm font-medium">
                Last Name*
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your last name"
              />
            </div>
<<<<<<< HEAD
            </div>
            <div className="flex gap-4 mb-4">
=======
          </div>
          <div className="flex gap-4 mb-4">
>>>>>>> ef91287d1b684f84c2d603d6ee0bfda86310d09f
            <div className="w-1/2">
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone*
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="signupEmail" className="block text-sm font-medium">
                Email*
              </label>
              <input
                type="email"
                id="signupEmail"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>
<<<<<<< HEAD
            </div>
=======
          </div>
>>>>>>> ef91287d1b684f84c2d603d6ee0bfda86310d09f
            <div className="mb-4">
              <label htmlFor="signupPassword" className="block text-sm font-medium">
                Password* 
              </label>
              <input
                type="password"
                id="signupPassword"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="minimum 8 characters"
              />
            </div>
            <div className="mb-4 flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-800 border-gray-300 rounded focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-medium text-gray-700">
                  I agree to all policies, privacies, and fees.
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-1/2 bg-indigo-800 text-white py-2 rounded-md hover:bg-indigo-600"
            >
              Sign Up
            </button>
<<<<<<< HEAD
            <p className=" mt-4 text-sm">
              Already have an account?{" "}
              <span className="text-blue-800 cursor-pointer" onClick={() => setIsLogin(true)}>
=======
            <p className="mt-4 text-sm">
              Already have an account?{" "}
              <span className="text-blue-600 cursor-pointer" onClick={() => setIsLogin(true)}>
>>>>>>> ef91287d1b684f84c2d603d6ee0bfda86310d09f
                Login
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
    </div>
  );
};
export default AuthenticationPage;
