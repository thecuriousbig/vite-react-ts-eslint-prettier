import { FC } from 'react';
import CSVIcon from '~/assets/icons/csv.svg?component';

interface UploadingProps {
  filename: string | undefined;
  progress: number;
}

const Uploading: FC<UploadingProps> = ({ filename, progress }) => {
  return (
    <div className='flex flex-row items-center mx-4 p-6 container md:max-w-2xl shadow-md shadow-primary-grey  rounded-xl'>
      <div className='flex-shrink'>
        <CSVIcon width={80} height={80} />
      </div>
      <div className='flex-grow flex flex-col items-start justify-evenly'>
        <div className='flex flex-row justify-between w-full'>
          <span className='text-lg font-roboto text-primary-grey'>{filename}</span>
          <span className='text-lg font-roboto text-primary-grey'>{progress}%</span>
        </div>
        <div className='w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700'>
          <div
            className='bg-primary-purple h-5 rounded-full'
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Uploading;
