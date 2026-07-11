import gallery from '../data/gallery';
import '../styles/Gallery.css';

function Gallery() {
  return (
    <div className="gallery-grid">
      {gallery.map((item) => (
        <div className={`gallery-tile tile-${item.size}`} key={item.id}>
          <img src={item.image} alt={item.caption} className="gallery-img" />
          <div className="gallery-caption">
            <span>{item.caption}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;