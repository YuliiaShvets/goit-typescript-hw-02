import React from "react";
import s from "../imageCard/ImageCard.module.css";

import Image from "../../types/image";

interface ImageCardProps {
  image: Image;
  onImageClick: (imageUrl: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
  return (
    <div className={s.imageCard}>
      <img
        className={s.imageCardItem}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onImageClick(image.urls.regular)}
      />
    </div>
  );
};

export default ImageCard;
