import "./header.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="text-content">
        <div className="labelCont">
          <LazyLoadImage
            src={"https://hcbeautyme.com/logo.jpg"}
            alt="..."
            className="logo"
             placeholderSrc="https://example.com/low-res.jpg"
          effect="blur" // blur or opacity
          />

          <p className="name">HCBeauty</p>
        </div>
        <p className="desc">
          Elegant and versatile model with a refined presence, blending
          confidence, timeless style, and expressive storytelling across
          fashion, lifestyle, editorial, and commercial projects worldwide.
        </p>
      </div>
    </div>
  );
};

export default Header;
