import React from "react";
import { Bios } from "../api/Bio"; // Assuming you are getting data from Bios

const AboutPage = () => {
  return (
    <div className="bg-slate-800 text-white flex justify-center items-center h-screen overflow-y-hidden overflow-x-hidde ">
      <div className="max-w-sm bg-slate-700 rounded-lg shadow-lg p-3">
        <div className="flex flex-col items-center">
          {/* Image section */}
          <img
            className="w-32 h-32 rounded-full object-cover mb-4"
            src="https://media.licdn.com/dms/image/v2/D5635AQG87sONhkfIcQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1721465637114?e=1730412000&v=beta&t=iVy07i3vVwAPvcovT9wDl7CpjXVzSms_N9_0lO_fWqk" // Replace with your image path
            alt="Profile"
          />
          {/* Description section */}
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">About Me</h2>
            <p className="text-sm text-gray-300">
              {Bios.data || "I am a passionate web developer with a strong focus on building efficient, user-friendly applications."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
