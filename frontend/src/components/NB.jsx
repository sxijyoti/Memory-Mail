import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiBell, FiSettings, FiUser } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600">TimeCapsule</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">
              Dashboard
            </Link>
            <Link to="/create" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">
              Create Capsule
            </Link>
            <Link to="/capsules" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">
              View Capsules
            </Link>
            <Link to="/notifications" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">
              <FiBell className="w-5 h-5" />
            </Link>
            <Link to="/settings" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">
              <FiSettings className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/dashboard"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/create"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              Create Capsule
            </Link>
            <Link
              to="/capsules"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              View Capsules
            </Link>
            <Link
              to="/notifications"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              Notifications
            </Link>
            <Link
              to="/settings"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              Settings
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;