import React from 'react';
import { Lock, Unlock, Calendar, Users } from 'lucide-react';

export default function CapsuleCard({ capsule, onClick }) {
  const isUnlockingSoon = new Date(capsule.unlockDate) - new Date() < 7 * 24 * 60 * 60 * 1000;

  return (
    <div 
      onClick={() => onClick(capsule.id)}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer overflow-hidden border border-gray-100"
    >
      <div className="relative h-48 bg-gradient-to-br from-indigo-500 to-purple-600">
        {capsule.contents.some(c => c.type === 'image') && (
          <img
            src={capsule.contents.find(c => c.type === 'image').preview}
            alt=""
            className="w-full h-full object-cover opacity-50"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-semibold text-white mb-1">{capsule.title}</h3>
          <p className="text-white text-opacity-90 text-sm line-clamp-2">{capsule.description}</p>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {capsule.isLocked ? (
              <Lock className="h-5 w-5 text-indigo-600" />
            ) : (
              <Unlock className="h-5 w-5 text-green-600" />
            )}
            <span className={`text-sm font-medium ${capsule.isLocked ? 'text-indigo-600' : 'text-green-600'}`}>
              {capsule.isLocked ? 'Locked' : 'Unlocked'}
            </span>
          </div>
          {isUnlockingSoon && capsule.isLocked && (
            <span className="px-3 py-1 text-xs font-medium text-amber-700 bg-amber-50 rounded-full">
              Unlocking Soon!
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>{new Date(capsule.unlockDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>{capsule.recipients.length} recipients</span>
          </div>
        </div>
      </div>
    </div>
  );
}