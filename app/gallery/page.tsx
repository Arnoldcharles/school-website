export default function GalleryPage() {
  const images = [1, 2, 3, 4, 5]; // sample images: public/gallery/1.jpg, etc.

  return (
    <div>
      <h1>📸 School Gallery</h1>
      <div className="gallery-grid">
        {images.map((id) => (
          <img key={id} src={`/gallery/${id}.jpg`} alt={`Gallery ${id}`} />
        ))}
      </div>
    </div>
  );
}
