import React, { SyntheticEvent, useState } from "react";
// import imageToBase64 from 'image-to-base64';
import axios from "axios";
// import blobToBase64 from 'blob-to-base64';
import FormData from 'form-data';

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [base64Image, setBase64Image] = useState<string>('');


  const handleChange = (e: SyntheticEvent) => {
    e.preventDefault();
    const file = (e.target as HTMLInputElement).files![0];
    setSelectedImage(file);
    let data = new FormData();
    data.append('image', file, file.name);
    console.log(data);
    axios.post('/api/detectText', data, {headers: {'Content-Type': 'multipart/form-data'}})
      .then((res: any) => {
        console.log(res.data, ' this is API response');
      })
      .catch((err: any) => {
        console.log('error POSTing file');
        console.error(err);
      });
  };

  const handleRemove = (e: SyntheticEvent) => {
    e.preventDefault();
    setSelectedImage(null);
  };

  return (
    <>
      <h1>Upload a Movie Poster to find More Details</h1>
      {!!selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={handleRemove}>Remove</button>
        </div>
      )}
      <br />
      <br />
      <form
        encType="multipart/form-data"
      >
        <input
          type="file"
          name="myImage"
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default UploadAndDisplayImage;
