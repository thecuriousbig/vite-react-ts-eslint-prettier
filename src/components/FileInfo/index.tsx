import { FC } from 'react';

interface FileInfoProps {
  data: {
    up: number;
    down: number;
  } | null;
}

const FileInfo: FC<FileInfoProps> = ({ data }) => {
  if (!data) {
    return null;
  }
  const total = data.up + data.down;
  return (
    <div className='flex flex-col mx-4 p-8 space-y-6 container md:max-w-sm shadow-md shadow-primary-grey rounded-xl'>
      <span className='font-roboto text-2xl text-primary-darkGrey'>Total {total} websites</span>
      <div className='flex flex-row justify-evenly'>
        <div className='relative flex flex-col justify-center items-center rounded-2xl text-white bg-primary-green w-32 h-32'>
          <span className='absolute top-2 left-2 text-lg px-2 py-1'>up</span>
          <span className='font-roboto text-4xl font-bold'>{data.up}</span>
        </div>
        <div className='relative flex flex-col justify-center items-center rounded-2xl text-primary-darkGrey bg-primary-lightGrey w-32 h-32'>
          <span className='absolute top-2 left-2 text-start text-lg px-2 py-1'>down</span>
          <span className='font-roboto text-4xl font-bold'>{data.down}</span>
        </div>
      </div>
    </div>
  );
};

export default FileInfo;
