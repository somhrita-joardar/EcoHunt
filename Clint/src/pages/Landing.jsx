import React from "react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-green-50 text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-sm rounded-b-lg">
        <h1 className="text-2xl font-bold text-green-700">EcoHunt</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-green-600">About</a>
          <a href="#features" className="hover:text-green-600">Features</a>
          <a href="#community" className="hover:text-green-600">Community</a>
          <button className="bg-green-500 text-white px-4 py-1 rounded-full hover:bg-green-600">
            Register
          </button>
          <button className="border border-green-500 px-4 py-1 rounded-full hover:bg-green-100">
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="p-6 md:p-12 text-center">
        <div className="max-w-4xl mx-auto">
          <img
            src="/forest-hero.jpg" // Replace with your actual forest image path
            alt="Eco Forest"
            className="rounded-lg w-full h-auto object-cover"
          />
          <div className="mt-6">
            <h2 className="text-4xl font-extrabold mb-3">
              Gamify Your Green Habits
            </h2>
            <p className="text-lg text-gray-600 mb-5">
              Join EcoHunt and turn sustainable living into an exciting adventure.
              Earn points, badges, and compete with friends as you make a positive
              impact on the planet.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 px-6 bg-white">
        <h3 className="text-2xl font-bold mb-8 text-center">How EcoHunt Works</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="border rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold text-lg mb-2">🌿 Track Your Actions</h4>
            <p className="text-gray-600">
              Log your eco-friendly activities, from recycling to reducing energy
              consumption, and see your impact grow.
            </p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold text-lg mb-2">🤝 Connect with Friends</h4>
            <p className="text-gray-600">
              Join a community of like-minded individuals, share tips, and challenge
              each other to achieve sustainability goals.
            </p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold text-lg mb-2">🏆 Earn Rewards</h4>
            <p className="text-gray-600">
              Earn points and badges for your green efforts, climb the leaderboard,
              and unlock exciting rewards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
