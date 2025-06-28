// src/pages/Missions.jsx
import React from "react";
import Sidebar from "../components/Sidebar";

const missions = [
  {
    title: "Recycle Plastic Bottles",
    description: "Properly dispose of 5 plastic bottles to reduce waste",
    image: "/missions/recycle.png",
  },
  {
    title: "Take a 30–minute Walk",
    description:
      "Enjoy a brisk walk to promote health and reduce carbon emissions",
    image: "/missions/walk.png",
  },
  {
    title: "Plant a Tree",
    description:
      "Contribute to reforestation by planting a tree in your community",
    image: "/missions/plant.png",
  },
  {
    title: "Reduce Water Usage",
    description: "Conserve water by taking shorter showers or fixing leaks",
    image: "/missions/water.png",
  },
  {
    title: "Use Public Transport",
    description:
      "Opt for public transport instead of driving to reduce pollution",
    image: "/missions/bus.png",
  },
];

const Missions = () => {
  return (
    <Sidebar>
      {/* Page Title & Filters */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Missions</h2>
        <p className="text-gray-600 mb-4">
          Explore missions to earn points and make a difference
        </p>
        <div className="flex gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-md bg-white">
            <option>Category</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-md bg-white">
            <option>Difficulty</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-md bg-white">
            <option>Points</option>
          </select>
        </div>
      </div>

      {/* Mission Cards */}
      <div className="space-y-6">
        {missions.map((mission, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row justify-between items-center bg-white rounded-xl p-4 shadow-sm"
          >
            <div className="mb-4 md:mb-0 md:w-3/4">
              <h3 className="text-lg font-semibold mb-1">{mission.title}</h3>
              <p className="text-gray-600">{mission.description}</p>
              <button className="mt-3 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-full">
                Start Mission
              </button>
            </div>
            <img
              src={mission.image}
              alt={mission.title}
              className="w-full md:w-40 rounded-md object-cover"
            />
          </div>
        ))}
      </div>
    </Sidebar>
  );
};

export default Missions;
