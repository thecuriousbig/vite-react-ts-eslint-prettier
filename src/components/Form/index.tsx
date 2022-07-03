import React, { FC, useState, useRef } from 'react';
import CSVIcon from '~/assets/icons/csv.svg?component';

interface FormProps {
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileDrop: (e: React.DragEvent<HTMLDivElement>) => void;
}

const Form: FC<FormProps> = ({ handleFileUpload, handleFileDrop }) => {
  const overrideDefault = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      className='flex flex-col items-center mx-4 p-6 container md:max-w-2xl border-dashed bg-primary-lightGrey border-primary-grey border-4 rounded-3xl'
      onDragEnter={overrideDefault}
      onDragLeave={overrideDefault}
      onDragOver={overrideDefault}
      onDrop={handleFileDrop}
    >
      <div className='flex flex-col items-center my-4 space-y-4'>
        <CSVIcon width={100} height={100} />
        <span className='text-3xl font-roboto text-primary-darkGrey'>
          Drag your .csv file here to start uploading.
        </span>
        <div className='w-3/5 md:w-1/3 relative flex items-center'>
          <div className='flex-grow border-t border-2 border-primary-grey'></div>
          <span className='flex-shrink px-4 text-3xl font-roboto text-primary-grey'>OR</span>
          <div className='flex-grow border-t border-2 border-primary-grey'></div>
        </div>
      </div>
      <label
        htmlFor='input-file'
        className='rounded-xl bg-primary-purple text-white text-2xl font-roboto py-5 px-8 hover:cursor-pointer'
      >
        Browse File
      </label>
      <input id='input-file' type='file' onChange={handleFileUpload} hidden />
    </div>
  );
};

export default Form;
