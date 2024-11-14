import React from 'react';
import { Menu, Bell, User as UserIcon, Clock, Package, Users, Settings } from 'lucide-react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button className="p-2 rounded-md hover:bg-gray-100 lg:hidden">
                <Menu className="h-6 w-6 text-gray-600" />
              </button>
              <div className="flex items-center space-x-3 ml-4">
                <Clock className="h-8 w-8 text-indigo-600" />
                <span className="font-bold text-xl text-gray-900">TimeCapsule</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100 relative">
                <Bell className="h-6 w-6 text-gray-600" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
              </button>
              <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User"
                  className="h-8 w-8 rounded-full"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <nav className="mt-5 flex-1 px-2 space-y-1">
              <NavItem icon={Package} text="My Capsules" active />
              <NavItem icon={Users} text="Shared With Me" />
              <NavItem icon={Settings} text="Settings" />
            </nav>
          </div>
        </aside>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

function NavItem({ icon: Icon, text, active }) {
  return (
    <a
      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
        active ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      <Icon className={`mr-3 h-6 w-6 ${active ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-500'}`} />
      {text}
    </a>
  );
}