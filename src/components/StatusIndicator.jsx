import React from 'react';

const StatusIndicator = ({ status }) => {
  const isActive = status === 'Active' || status === '✅ Active';
  const color = isActive ? 'bg-green-500' : 'bg-tk-red';
  const text = isActive ? '✅ Active' : '🔴 Offline';
  [cite_start]// Add animation or glow effects around status indicators [cite: 12]
  const shadow = isActive ? 'shadow-green-500/50' : 'shadow-tk-red/50';

  return (
    <div className="flex items-center space-x-2">
      <span className={`h-3 w-3 rounded-full ${color} ${shadow} animate-pulse`}></span>
      <span className="font-semibold">{text}</span>
    </div>
  );
};

export default StatusIndicator;
