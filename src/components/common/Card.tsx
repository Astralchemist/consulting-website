// filepath: /consulting-website/src/components/common/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      {imageUrl && <img src={imageUrl} alt={title} className="rounded-t-lg" />}
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  );
};

export default Card;