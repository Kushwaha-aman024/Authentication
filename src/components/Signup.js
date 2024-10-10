import React, { useState } from "react";
//import signupImage from './components/image3.png'; 

const SignupPage = () => {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col items-center justify-center md:w-1/2 bg-gray-100 p-8">
        <div className="p-8 bg-white shadow-lg rounded-md max-w-md w-full">
          <h2 className="text-2xl font-bold mb-2">Sign Up</h2>
          <p className="text-blue-600 mb-4">
            Manage all your inventory efficiently
          </p>
          <p>
            Let's get you all setup so you can verify your personal account and
            begin setting up your work profile.
          </p>
          <br />
          <form>
            <div className="flex gap-4 mb-4">
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
            </div>
            <div className="flex gap-4 mb-4">
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
            </div>
            <div className="mb-4">
              <label
                htmlFor="signupPassword"
                className="block text-sm font-medium"
              >
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
                <label
                  htmlFor="terms"
                  className="font-medium text-gray-700"
                >
                  I agree to all terms, privacy policies, and fees.
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-1/2 bg-indigo-800 text-white py-2 rounded-md hover:bg-indigo-600"
            >
              Sign Up
            </button>
            <p className="mt-4 text-sm">
              Already have an account?{" "}
              <span
                className="text-blue-800 cursor-pointer"
                onClick={() => setIsSignup(false)}
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default SignupPage;