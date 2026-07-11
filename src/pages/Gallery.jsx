import Gallery from '../components/Gallery';

function GalleryPage() {
  return (
    <section className="section gallery-page">
      <div className="section-head">
        <div className="section-label">Our work</div>
        <h2 className="section-title">A look <em>inside the studio.</em></h2>
        <p className="gallery-intro">
          Real work, real clients — from bridal days to quick touch-ups.
        </p>
      </div>

      <Gallery />
    </section>
  );
}

export default GalleryPage;