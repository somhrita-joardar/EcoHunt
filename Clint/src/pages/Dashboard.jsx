import React from "react";

const Dashboard = () => {
  const points = 1250;
  const flags = 32;
  const progress = 60; // in %

  const badges = [
    "/badges/recycle.png",
    "/badges/zero-waste.png",
    "/badges/plant-tree.png",
    "/badges/eco-drive.png",
    "/badges/transport.png",
    "/badges/microhabits.png",
    "/badges/profile.png",
  ];

  return (
    <div className="min-h-screen bg-green-50 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-green-700">EcoHunt</h1>
        <div className="flex items-center space-x-4">
          <button className="rounded-full p-2 bg-white shadow">
            <span className="material-icons">notifications</span>
          </button>
          <img
            src="/profile.jpg"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </header>

      {/* Welcome Message */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Welcome back, Sarah!</h2>
        <p className="text-gray-600 mt-1">Ready to continue your eco-journey?</p>
      </div>

      {/* Stats + Progress */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-100 rounded-lg p-6 text-center">
          <h3 className="text-lg font-medium">Points</h3>
          <p className="text-2xl font-bold">{points.toLocaleString()}</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-6 text-center">
          <h3 className="text-lg font-medium">Flags Earned</h3>
          <p className="text-2xl font-bold">{flags}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <p className="mb-2 font-medium">Level 3 Progress</p>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-green-600 h-3 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-right text-sm text-gray-500 mt-1">{progress}%</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-start gap-4 mb-8">
        <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
          View Missions
        </button>
        <button className="border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-100">
          Leaderboard
        </button>
      </div>

      {/* Badge Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4">My Badges</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {badges.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Badge ${index + 1}`}
              className="w-full rounded-lg object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
