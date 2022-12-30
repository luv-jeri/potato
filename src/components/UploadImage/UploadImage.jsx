/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Styles from './UploadImage.module.css';
import uploader from '../../functions/uploader';
export default function UploadImage({ onComplete, storage }) {
  const [file, setFile] = useState(null); //  picked file
  const [logoURL, setLogoURL] = useState(''); //url of the image after upload
  const [progress, setProgress] = useState(0); // progress during upload

  useEffect(() => {
    if (file) {
      uploader({
        storage,
        file,
        onProgress: setProgress,
        onComplete: (URL) => {
          setLogoURL(URL);
          onComplete(URL);
        },
      });
    }
  }, [file, uploader, onComplete, storage]);

  return (
    <div
      style={{
        backgroundImage: `url(${
          progress === 0 && (logoURL || 'https://source.unsplash.com/random')
        })`,
      }}
      className={Styles.imageContainer}
    >
      {progress > 0 ? (
        <div className={Styles.loadingWrap}>
          {progress}
          {/* <CircularProgressWithLabel value={progress} /> */}
        </div>
      ) : (
        <input
          type='file'
          accept='image/gif, image/jpeg, image/png'
          variant='outlined'
          placeholder='Upload DP'
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
          className={Styles.imagePicker}
        />
      )}
    </div>
  );
}
