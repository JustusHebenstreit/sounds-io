import React from 'react';
import Avatar from 'boring-avatars';
import Link from 'next/link';
import { ChevronUpIcon } from '@heroicons/react/solid';

interface SoundItemProps {
  title: string;
  description: string;
  url: string;
}

export const SoundItem: React.FC<SoundItemProps> = ({
  title,
  description,
  url,
}) => {
  return (
    <li className='py-5 flex justify-around'>
      <Link href={url}>
        <a className='flex'>
          <div className='flex'>
            <div>
              <Avatar size={45} />
            </div>
            <div className='ml-3 flex-auto flex flex-col justify-around'>
              <p className='text-sm font-medium text-gray-900'>{title}</p>
              <p className='text-sm text-gray-500'>{description}</p>
            </div>
          </div>
        </a>
      </Link>
      <button>
        <div className='flex-initial w-16 flex flex-col items-center text-gray-900'>
          <ChevronUpIcon className='h-8' />
          <span className=''>212</span>
        </div>
      </button>
    </li>
  );
};
