import React, { useState, FC } from 'react';
import uploadService from '~/services/fileUploadService';
import Form from '~/components/Form';
import Uploading from '~/components/Uploading';
import FileInfo from '~/components/FileInfo';

const Home: FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [info, setInfo] = useState<{ up: number; down: number } | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const upload = (uploadFile: File) => {
    uploadService
      .upload(uploadFile, (event: ProgressEvent) => {
        setProgress(Math.round((event.loaded * 100) / event.total));
        console.log('progress', Math.round((event.loaded * 100) / event.total));
      })
      .then((response) => {
        console.log(response.data);
        setInfo(response.data);
        setIsUploading(false);
        setProgress(0);
      })
      .catch((error) => {
        console.error(error);
        setIsUploading(false);
        setProgress(0);
      });
  };

  const handleDropFile = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files[0];
    if (selectedFile) {
      setIsUploading(true);
      setProgress(0);
      setFile(selectedFile);
      upload(selectedFile);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setIsUploading(true);
      setProgress(0);
      setFile(selectedFile);
      upload(selectedFile);
    }
  };

  return (
    <div className='max-h-screen flex flex-col items-center mt-20 space-y-10'>
      <Form handleFileUpload={handleFileUpload} handleFileDrop={handleDropFile} />
      {isUploading && <Uploading filename={file?.name} progress={progress} />}
      {!isUploading && info !== null && <FileInfo data={info} />}
    </div>
  );
};

export default Home;
