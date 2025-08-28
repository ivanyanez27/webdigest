import React from 'react';

interface ListCardProps {
  title: string;
  items: string[];
  icon: React.ComponentType<{ className?: string }>;
  color?: string;
}

const ListCard = ({ title, items, icon: Icon, color = "blue" }: ListCardProps) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
    <div className="flex items-center gap-2 mb-4">
      <Icon className={`h-5 w-5 text-${color}-500`} />
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
    <div className="space-y-3 max-h-64 overflow-y-auto">
      {items.map((item, index) => (
        <div key={index} className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3">
          {item}
        </div>
      ))}
    </div>
  </div>
);

export default ListCard;