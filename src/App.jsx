import { useState } from 'react';
import {Gallery} from './Components/Gallery';
import {ImageUploadForm} from './Components/ImageUploadForm';
import './App.css';

export default function App() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (image) => {
    setImages([...images, image]);
  };

  return (
    <>
      <h1>Galeria de Imagens</h1>
      <ImageUploadForm onImageUpload={handleImageUpload} />
      <Gallery images={images} />
    </>
  );
}
