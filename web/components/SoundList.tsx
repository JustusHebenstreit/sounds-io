import React from 'react';
import { SoundItem } from './SoundItem';

const data = [
  {
    title: 'Sound 1',
    url: '/sound1',
    description: 'This is a description for sound 1',
  },
  {
    title: 'Sound 2',
    url: '/sound1',
    description: 'This is a description for sound 2',
  },
  {
    title: 'Sound 3',
    url: '/sound1',
    description: 'This is a description for sound 3',
  },
  {
    title: 'Sound 4',
    url: '/sound1',
    description: 'This is a description for sound 4',
  },
  {
    title: 'Sound 5',
    url: '/sound1',
    description: 'This is a description for sound 5',
  },
];

export const SoundList: React.FC = () => {
  return (
    <ul role='list' className='divide-y divide-gray-200 md:divide-y-0'>
      {data.map((sound, i) => (
        <SoundItem
          key={i}
          title={sound.title}
          description={sound.description}
          url={sound.url}
        />
      ))}
    </ul>
  );
};
