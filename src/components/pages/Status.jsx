import React from 'react';
import StatusIndicator from '../components/StatusIndicator';

[cite_start]// Mock live data based on description [cite: 8, 9, 10, 11]
const liveData = [
  { label: 'Guild Name', value: 'TEAM KRAITH', isStatus: false, source: 8 },
  { label: 'Guild ID', value: '(Your Guild ID)', isStatus: false, source: 8 },
  { label: 'Members Active', value: '45', isStatus: false, note: '(Auto-updated from bot or manual count)', source: 9 },
  { label: 'Total Members', value: '50/50', isStatus: false, source: 9 },
  { label: 'Weekly Rank', value: 'Top 10 (Freestyle Division)', isStatus: false, source: 10 },
  { label: 'Server Region', value: 'INDIA 🇮🇳', isStatus: false, source: 10 },
  { label: 'Bot Connection', value: 'Active', isStatus: true, source: 11 },
  { label: 'Last Updated', value: '2025-11-09, 19:20:00 IST', isStatus: false, note: '(Every 5 minutes)', source: 11 },
];

const Status = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-900 rounded-xl shadow-2xl border border-tk-pink/50">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-tk-red tracking-wide">
        📡 Live Guild Status
      </h1>
      <p className="text-center text-gray-400 mb-8">
        [cite_start]Real-time data from the Guild Bot. (Can use MongoDB or JSON file for live data). [cite: 13]
      </p>

      <div className="space-y-4">
        {liveData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 bg-gray-800 rounded-lg border-l-4 border-tk-red hover:border-tk-pink transition duration-300"
          >
            <span className="font-semibold text-gray-300">
              {item.label} 
            </span>
            {item.isStatus ? (
              <StatusIndicator status={item.value} /> 
            ) : (
              <span className="font-bold text-white">
                {item.value} {item.note && <span className="text-xs text-gray-500">{item.note}</span>}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Status;
