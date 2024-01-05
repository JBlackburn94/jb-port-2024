"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState();
  return (
    <nav className="bg black p-4 fixed">
      {isOpen ? (
        <FaBars className="text-white" size={40} />
      ) : (
        <FaTimes className="text-white" size={40} />
      )}
    </nav>
  );
}
