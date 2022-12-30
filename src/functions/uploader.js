import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export default function uploader({ storage, file, onProgress, onComplete }) {
  const fileRef = ref(storage, `/images/${file.name}`);

  const uploading = uploadBytesResumable(fileRef, file);

  uploading.on(
    'state_changed',
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      onProgress(progress);
    },
    (error) => {
      console.log(error);
    },
    async () => {
      const URL = await getDownloadURL(fileRef);
      onComplete(URL);
    }
  );
}
