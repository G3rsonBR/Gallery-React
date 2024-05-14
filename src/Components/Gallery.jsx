import './Gallery.css'

export function Gallery ({ images }) {
  return (
    <div className="cards">
      {images.map((image, index) => (
        <img className='card' key={index} src={image} alt={`Imagem ${index}`} />
      ))}
    </div>
  );
}
