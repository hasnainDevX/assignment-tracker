import React from "react";
import { BookOpen, Bell, User, ChevronDown,  } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <BookOpen className="text-indigo-600" size={28} />
                <span className="ml-2 text-xl font-bold text-gray-900">Assignment Tracker</span>
              </div>
              <div className="hidden md:flex space-x-1">
                <a href="#" className="px-3 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-md">Dashboard</a>
                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md">Calendar</a>
                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md">Courses</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell size={20} />
              </button>
              <button className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                <User size={20} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Student</span>
                <ChevronDown size={16} className="text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
