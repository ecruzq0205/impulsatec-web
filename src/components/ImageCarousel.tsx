import { useEffect, useState } from 'react';

type CarouselImage = {
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  images: CarouselImage[];
  className: string;
  imageClassName: string;
  intervalMs?: number;
  label: string;
};

export default function ImageCarousel({
  images,
  className,
  imageClassName,
  intervalMs = 3000,
  label,
}: ImageCarouselProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reduceMotion) return;

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div className={`impt-carousel ${className}`} aria-label={label}>
      <div className="impt-carousel-frame">
        {images.map((image, index) => (
          <img
            key={image.src}
            className={`${imageClassName} impt-carousel-img${
              index === active ? ' is-active' : ''
            }`}
            src={image.src}
            alt={index === active ? image.alt : ''}
            aria-hidden={index !== active}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
      {images.length > 1 && (
        <div className="impt-carousel-dots" aria-label="Imagenes del carrusel">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={
                'impt-carousel-dot' + (index === active ? ' is-active' : '')
              }
              aria-label={`Mostrar imagen ${index + 1}`}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
