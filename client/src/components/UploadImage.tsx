import React, { SyntheticEvent, useState } from "react";
import imageToBase64 from 'image-to-base64';

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [base64Image, setBase64Image] = useState<string>('');


  const handleChange = (e: SyntheticEvent) => {
    e.preventDefault();
    const file = (e.target as HTMLInputElement).files![0];
    console.log(file);
    setSelectedImage(file);
    console.log(URL.createObjectURL(file));
    // imageToBase64(URL.createObjectURL(file))
    //   .then((response: string) => {
    //     console.log(response);
    //   })
    //   .catch((err: any) => {
    //     console.error(err);
    //   });
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
      <input
        type="file"
        name="myImage"
        onChange={handleChange}
      />
    </>
  );
};

export default UploadAndDisplayImage;
