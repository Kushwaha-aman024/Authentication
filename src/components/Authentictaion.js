import React, { useState } from "react";
import loginImage from './components/image3.png';

const AuthenticationPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Default to login page

  const handleCheckboxChange = (e) => {
    setIsLogin(e.target.checked); // Update state based on the hidden checkbox
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Image Section */}
      <div className="hidden md:block md:w-1/2 bg-blue-500">
        <img
          src={loginImage}
          alt="Login"
          className="object-cover w-full h-full"
        />
      </div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-md max-w-md w-full">
        {/* Conditional Headline */}
        <h2 className="text-2xl font-bold mb-2 text-center">
          {isLogin ? "Login" : "Register"}
        </h2>
        <p className="text-center mb-6">
          See your growth and get support!
        </p>

        {/* Hidden checkbox to toggle between login and signup */}
        <input
          type="checkbox"
          checked={isLogin}
          onChange={handleCheckboxChange}
          className="hidden"
        />

        {isLogin ? (
          // Login Form
          <form>
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
            <p className="text-center mt-4 text-sm">
              Not registered yet?{" "}
              <span className="text-indigo-600 cursor-pointer" onClick={() => setIsLogin(false)}>
               Create a new Account
              </span>
            </p>
          </form>
        ) : (
          // Signup Form
          <form>
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
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
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
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
              className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600"
            >
              Sign Up
            </button>
            <p className="text-center mt-4 text-sm">
              Already have an account?{" "}
              <span className="text-indigo-600 cursor-pointer" onClick={() => setIsLogin(true)}>
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
