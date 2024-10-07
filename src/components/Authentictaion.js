import React, { useState } from "react";

const AuthenticationPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Default to login page

  const handleCheckboxChange = (e) => {
    setIsLogin(e.target.checked); // Update the state based on the checkbox
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        
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
                Email
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
                Password
              </label>
              <input
                type="password"
                id="loginPassword"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600"
            >
              Login
            </button>
          </form>
        ) : (
          // Signup Form
          <form>
            <div className="mb-4">
              <label htmlFor="signupEmail" className="block text-sm font-medium">
                Email
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
                Password
              </label>
              <input
                type="password"
                id="signupPassword"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthenticationPage;