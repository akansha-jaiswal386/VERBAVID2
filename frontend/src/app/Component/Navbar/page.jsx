"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center bg-black">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 opacity-80"></div>
      
      <nav className="relative bg-gradient-to-r from-black to-gray-800 text-white p-4 w-full ">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">Verbavid</a>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Features</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
          
          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600">Sign Up</button>
            <button className="border border-emerald-500 text-emerald-500 px-4 py-2 rounded-lg hover:bg-emerald-500 hover:text-white">Login</button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col items-center space-y-4 mt-4">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Features</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            <li><button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600">Sign Up</button></li>
            <li><button className="border border-emerald-500 text-emerald-500 px-4 py-2 rounded-lg hover:bg-emerald-500 hover:text-white">Login</button></li>
          </ul>
        )}
      </nav>
    </div>
  );
}
