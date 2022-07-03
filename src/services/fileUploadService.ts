import http from '~/http';

const upload = (file: File, onUploadProgress: (progressEvent: ProgressEvent) => void) => {
  const formData = new FormData();
  formData.append('file', file);

  return http.post('/file/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress,
  });
};

export default {
  upload,
};
