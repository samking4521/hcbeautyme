import { useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import "./details.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type DetailsProps = {
  imageUrl: string;
  category: string;
  description: string;
  images: string[];
};

interface DetailsScreenProps {
  details: DetailsProps;
 openDetailsScreen: (value: DetailsProps | null) => void;
}

const DetailsScreen = ({ details, openDetailsScreen }: DetailsScreenProps) => {
  const [image, setImage] = useState<string>(details.imageUrl);

  const handleImageClick = (img: string) => {
    setImage(img);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const onBack = () => {
       openDetailsScreen(null);
  }


  return (
    <div>
      {/* Hero Section */}
      <div className="details-hero">
        <img 
        src={image} 
        alt={details.category} 
        
        />

        {/* Fancy Back Button */}
        <button className="details-back-button" onClick={onBack}>
          <FiArrowLeft className="back-icon" />
        </button>

        <div className="details-overlay">
          <h1 className="details-category">{details.category}</h1>
          <p className="details-description">{details.description}</p>
        </div>
      </div>

      {/* Gallery */}
      <div className="details-gallery">
        {details.images.length > 0 && (
          <h2 className="details-gallery-title">More shots</h2>
        )}

        <div className="details-images-scroll">
          {details.images.map((img, index) => (
            <LazyLoadImage
              key={`gallery-${index}`}
              src={img}
              alt="..."
              loading="lazy"
              onClick={() => handleImageClick(img)}
                placeholderSrc="https://example.com/low-res.jpg"
          effect="blur" // blur or opacity
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsScreen;
