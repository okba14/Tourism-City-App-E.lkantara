import React from 'react';
import { Compass } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Compass size={32} className="text-indigo-600" />
      <div>
        <span className="text-2xl font-bold text-indigo-600">El Kantara</span>
        <span className="block text-xs text-gray-600">Gateway to the Desert</span>
      </div>
    </div>
  );
}