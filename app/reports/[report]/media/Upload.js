import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from "./firebase"; // Import storage from the firebase.js file
import { addUrlImage } from "@/app/services/addUrlImage";
import { useSelector } from "react-redux";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [downloadURLs, setDownloadURLs] = useState([]);
  const reportId=useSelector(state=>state.reports.reportId)


  // Function to handle file selection (only images)
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(selectedFile);
    } else {
      alert("Please select an image file");
    }
  };

  // Function to upload the file
  const handleUpload = () => {
    if (!file) return;

    const storageRef = ref(storage, `images/${file.name}`); // Reference the storage path

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
          setDownloadURLs((prevURLs) => [...prevURLs, { name: file.name, url }]);
          setFile(null); // Reset file after upload
          setProgress(0); // Reset progress

          // Call the function to save the URL in the database
          addUrlImage(reportId,url);
        });
      }
    );
  };

  // Function to delete the uploaded file
  const handleDelete = (name, url) => {
    const fileRef = ref(storage, `images/${name}`);
    deleteObject(fileRef)
      .then(() => {
        alert("File deleted successfully");
        setDownloadURLs(downloadURLs.filter(item => item.url !== url)); // Remove the file from the list
      })
      .catch((error) => {
        console.error("Delete failed:", error);
      });
  };

  // Function to save the image URL to the database


  return (
    <div className="flex flex-col items-center p-4 bg-gray-50 min-h-screen">
      {/* <h1 className="text-2xl font-bold mb-4">Upload an Image</h1> */}

      {/* Display uploaded images in a table */}
      {downloadURLs.length > 0 && (
        <table className="table-auto text-center mb-6 w-full">
          <thead>
            <tr className="text-sm font-bold text-center text-gray-700">
              <th className="p-2">الصورة</th>
              <th className="p-2">اجراء</th>
            </tr>
          </thead>
          <tbody>
            {downloadURLs.map((item, index) => (
              <tr key={index} className="text-center border-b">
                <td className="p-2 text-center">
                  <img
                    src={item.url}
                    alt={`Uploaded ${item.name}`}
                    className="rounded-lg w-24 h-24 object-cover"
                  />
                </td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelete(item.name, item.url)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-lg"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <input
        type="file"
        accept="image/*" // Only accept images
        onChange={handleFileChange}
        className="mb-4 px-4 py-2 border border-gray-300 rounded-lg text-sm"
      />
      <button
        onClick={handleUpload}
        disabled={!file}
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
      >
        Upload
      </button>

      {progress > 0 && (
        <>
          <progress value={progress} max="100" className="w-full mb-4"></progress>
          <p>{`Uploading: ${progress.toFixed(2)}%`}</p>
        </>
      )}
    </div>
  );
};

export default FileUpload;
