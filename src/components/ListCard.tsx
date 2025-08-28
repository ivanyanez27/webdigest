import React from 'react';

interface ListCardProps {
  title: string;
  items: string[];
  icon: React.ComponentType<{ className?: string }>;
  color?: string;
}

const ListCard = ({ title, items, icon: Icon, color = "blue" }: ListCardProps) => (
  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-800 p-6 hover:shadow-xl transition-all duration-300">
    <div className="flex items-center gap-2 mb-4">
      <Icon className={`h-5 w-5 text-${color}-400`} />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <div className="space-y-3 max-h-64 overflow-y-auto">
      {items.map((item, index) => (
        <div key={index} className="text-sm text-gray-300 bg-gray-800/50 rounded-lg p-3 border border-gray-700">
          {item}
        </div>
      ))}
    </div>
  </div>
);

export default ListCard;