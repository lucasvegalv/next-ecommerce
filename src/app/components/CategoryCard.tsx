import React, { cloneElement, ReactElement } from 'react'


interface CategoryCardProps {
  icon: React.ElementType;
  category: string;
  iconSize?: number;
  iconColor?: string;
}

const CategoryCard = ({ icon: Icon, category, iconSize, iconColor }: CategoryCardProps) => {
  return (
    <div className='flex flex-col justify-center items-center p-4 bg-black bg-opacity-5 rounded-xl w-48 h-32 gap-2 hover:bg-opacity-15 transition-all'>
       {Icon && <Icon size={iconSize} color={iconColor} />}
      <h3 className='text-center font-semibold text-sm'>{category}</h3>
    </div>
  );
};

export default CategoryCard;


