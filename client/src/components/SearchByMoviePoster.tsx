import React, {FC, SyntheticEvent, useState} from 'react';
import axios from 'axios';

const SearchByMoviePoster:FC<any> = () => {
  const [image, setImage] = useState('');
  // const [imageUrl, setImageUrl] = useState('');

  const handleChange = (e: SyntheticEvent) => {
    e.preventDefault();
    const file = (e.target as HTMLInputElement).files![0];
    setImage(URL.createObjectURL(file));
    const data = new FormData();
    data.append('image', file, file.name);
    axios.post('/api/uploadPhoto', data, {headers: {'Content-Type': 'multipart/form-data'}})
      .then((res: any) => {
        console.log('this is API response', res.data);
      })
      .catch((err: any) => {
        console.log('error POSTing file');
        console.error(err);
      });
  };

  const handleRemove = (e: SyntheticEvent) => {
    e.preventDefault();
    setImage('');
  };
  return (
    <>
      <h1>Upload a Movie Poster to find More Details</h1>
      {!!image && (
        <div>
        <img alt="not fount" width={"250px"} src={image} />
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

export default SearchByMoviePoster;