import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-slate-800 text-white px-4">
      <div className="bg-gray-900 rounded-2xl shadow-xl p-6 w-full max-w-sm text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1029/1029183.png"
          alt="Quiz Icon"
          className="w-32 h-32 mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold mb-4 text-orange-500">Quiz App</h1>
        <button
          onClick={() => navigate("/quiz")}
          className="bg-orange-600 hover:bg-orange-500 transition duration-300 text-white px-6 py-2 rounded-md text-lg font-medium"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;
