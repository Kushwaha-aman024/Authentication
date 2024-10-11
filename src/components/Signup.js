import React from "react";
import { Link } from "react-router-dom";
import loginImage from './components/image3.png';
import logoImage from './components/logo.png';

const SignupPage = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 bg-gray-100">
      <div className="absolute top-4 left-4">
          <img src={logoImage} alt="Logo" className="h-12 w-12" />
        </div>
        <div className="p-8 bg-white shadow-lg rounded-md max-w-md w-full">
          <h2 className="text-2xl font-bold mb-2">Register</h2>
          <p className="text-blue-600">Manage all your inventory efficiently</p>
          <p>Let's get you all set up so you can verify your personal account and begin setting up your work profile.</p>
          <br></br>
          <form>
            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <label htmlFor="firstName" className="block text-sm font-medium">First Name*</label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName" className="block text-sm font-medium">Last Name*</label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <label htmlFor="phone" className="block text-sm font-medium">Phone*</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="signupEmail" className="block text-sm font-medium">Email*</label>
                <input
                  type="email"
                  id="signupEmail"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="signupPassword" className="block text-sm font-medium">Password*</label>
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
                <label htmlFor="terms" className="font-medium text-gray-700">I agree to all policies, privacies, and fees.</label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-800 text-white py-2 rounded-md hover:bg-indigo-600"
            >
              Sign Up
            </button>
            <p className="text-center mt-4 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-800">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Right side with image */}
      <div className="hidden md:block md:w-1/2 bg-blue-500">
        <img
          src={loginImage}
          alt="Signup"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default SignupPage;