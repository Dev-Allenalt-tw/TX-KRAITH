import React from 'react';

[cite_start]// Mock data (This auto-updates from Status API) [cite: 3]
const statsData = [
  { label: 'Guild Power', value: '999K', color: 'text-tk-red' },
  { label: 'Members', value: '48/50', color: 'text-tk-pink' },
  { label: 'Weekly Rank', value: '#3', color: 'text-tk-red' },
  { label: 'Win Rate', value: '75%', color: 'text-tk-pink' },
];

const QuickStats = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">🔥 Quick Stats</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {statsData.map((stat) => (
          <div
            key={stat.label}
            className="text-center p-6 bg-gray-800 rounded-lg border-2 border-tk-black/50 hover:border-tk-red transition duration-300 shadow-lg hover:shadow-neon-red/50"
          >
            <p className={`text-4xl font-extrabold ${stat.color} mb-1`}>
              {stat.value}
            </p>
            <p className="text-sm uppercase font-semibold text-gray-400 tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickStats;
