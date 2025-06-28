import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        {/* Logo/Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-green-700">EcoHunt</h1>
        </div>

        {/* Welcome Message */}
        <h2 className="text-center text-2xl font-semibold mb-6">Welcome back</h2>

        {/* Login Form */}
        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <div className="text-right mt-1">
              <a href="#" className="text-sm text-green-600 hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-full hover:bg-green-600 transition"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center mt-6 text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-green-600 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
