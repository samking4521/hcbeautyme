import { useEffect, useRef } from "react";
import "./designs.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type dataObj = {
  category: string;
  images: string[];
  description: string;
};

type detailsProps = {
  imageUrl: string;
  category: string;
  description: string;
  images: string[];
};

/* Row component */
const Rows = ({ item, openDetailsScreen }: { item: dataObj; openDetailsScreen: (value: detailsProps) => void }) => {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imgs = rowRef.current?.querySelectorAll<HTMLImageElement>(".row-image");
    if (!imgs) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.3 }
    );

    imgs.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="row-scroll">
      <div className="row-grid" ref={rowRef}>
        {item.images.map((img, index) => (
         
        
          <LazyLoadImage
            onClick={() => openDetailsScreen({
                imageUrl: img,
                category: item.category,
                description: item.description,
                images: item.images
            })}
            key={`img-${index}`}
            src={img}
            alt="..."
            className="row-image"
          effect="blur" // blur or opacity
          />
       
        ))}
      </div>
    </div>
  );
};

/* Designs component */
const Designs = ({ data, openDetailsScreen }: { data: dataObj[]; openDetailsScreen: (value: detailsProps) => void }) => {
  return (
    <div className="designs">
      <p className="discoverCategory">Discover my latest styles</p>
      {data.map((item, index) => (
        <section key={`item-${index}`} className="design-section">
          <p className="category-title">{item.category}</p>
          <Rows item={item} openDetailsScreen={openDetailsScreen} />
        </section>
      ))}
    </div>
  );
};

export default Designs;
