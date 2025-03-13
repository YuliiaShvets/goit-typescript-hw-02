import React from "react";
import ImageCard from "../imageCard/ImageCard";
import s from "../imageGallery/ImageGallery.module.css";

interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (imageUrl: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={s.imageGallery}>
      {images.map((image) => (
        <li className={s.imageGalleryItem} key={image.id}>
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
