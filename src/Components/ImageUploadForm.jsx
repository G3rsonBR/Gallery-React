import { useState } from "react";
import "./ImageUploadForm.css";

export function ImageUploadForm({ onImageUpload }) {
  const [image, setImage] = useState("");
  const [text, setText] = useState("Enviar Foto");

  const styleInput = {
    backgroundColor: image ? "#14af2f" : "#3d3d3d",
    
  }

  const handleImageChange = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setImage(url);
    setText("Imagem carregada!");  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image) {
      onImageUpload(image);
      setImage("");
      setText("Enviar Foto");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label style={styleInput} htmlFor="image" className="custom_file_uploader">
        {text}
      </label>
        <input id="image" type="file" onChange={handleImageChange} />
      <button type="submit">Enviar</button>
    </form>
  );
}
