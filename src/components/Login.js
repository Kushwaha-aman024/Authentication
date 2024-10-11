import React from "react";
import { Link } from "react-router-dom";
import loginImage from './components/image3.png';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen">
      <div className="absolute top-4 left-4">
          <img src={logoImage} alt="Logo" className="h-12 w-12" />
        </div>
      <div className="hidden md:block md:w-1/2 bg-blue-500">
        <img
          src={loginImage}
          alt="Login"
          className="object-cover w-full h-full"
        />
      </div>

     
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 bg-gray-100">
        <div className="p-8 bg-white shadow-lg rounded-md max-w-md w-full">
          <h2 className="text-2xl font-bold mb-2">Login</h2>
          <p className="text mb-6">See your growth and get support!</p>
          <form>
            <div className="mb-4">
              <label htmlFor="loginEmail" className="block text-sm font-medium">Email*</label>
              <input
                type="email"
                id="loginEmail"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="loginPassword" className="block text-sm font-medium">Password*</label>
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
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">Remember me</label>
              </div>
              <div>
                <a href="#" className="text-sm text-indigo-600 hover:underline">Forgot password?</a>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600"
            >
              Login
            </button>
            <p className="text-center mt-4 text-sm">
              Not registered yet?{" "}
              <Link to="/signup" className="text-indigo-600">
                Create a new Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;