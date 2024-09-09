import  { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase"; // Import storage from the firebase.js file

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [downloadURL, setDownloadURL] = useState(null);

  // Function to handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Function to upload the file
  const handleUpload = () => {
    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`); // Reference the storage path

    // Create the file upload task
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Track progress and handle success/failure
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressPercentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progressPercentage); // Update progress
      },
      (error) => {
        console.error("Upload failed:", error);
      },
      () => {
        // Get the download URL when the upload is complete
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setDownloadURL(url);
        });
      }
    );
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <progress value={progress} max="100" />
      {downloadURL && <p>File uploaded! <a href={downloadURL}>Download here</a></p>}
    </div>
  );
};

export default FileUpload;
