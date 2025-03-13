import React from "react";
import ImageCard from "../imageCard/ImageCard";
import s from "../imageGallery/ImageGallery.module.css";
import Image from "../../types/image";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (imageUrl: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
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
