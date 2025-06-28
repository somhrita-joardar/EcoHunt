import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        {/* Logo/Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-green-700">EcoHunt</h1>
        </div>

        {/* Register Title */}
        <h2 className="text-center text-2xl font-semibold mb-6">Create your account</h2>

        {/* Register Form */}
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-full hover:bg-green-600 transition"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-green-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
