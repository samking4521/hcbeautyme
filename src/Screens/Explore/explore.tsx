import Designs from "../../components/Designs/designs";
import Header from "../../components/Header/header";
import { data } from "../../assets/data";

import "./explore.css";
import StickyHeader from "../../components/Stickyheader/stickyHeader";
import "../../components/Stickyheader/stickyHeader.css";
import Contact from "../../components/Contact/contact";
import { useState } from "react";
import DetailsScreen from "../Details/details";

type detailsProps = {
  imageUrl: string;
  category: string;
  description: string;
  images: string[];
};

const Explore = () => {
  const [contact, setShowContact] = useState(false);
  const [showDetails, setShowDetails] = useState<detailsProps | null>(null);

  const showContactForm = () => {
    setShowContact(true);
  };

  const closeContactForm = () => {
    setShowContact(false);
  };

  const openDetailsScreen = (value: detailsProps | null) => {
    setShowDetails(value);
  };

  console.log("contact : ", contact);

  return (
    <>
      {showDetails ? (
        <DetailsScreen details={showDetails} openDetailsScreen={openDetailsScreen}/>
      ) : (
        <div className="explore-wrapper">
          <StickyHeader showContactForm={showContactForm} />
          <Header />

          <Designs data={data} openDetailsScreen={openDetailsScreen} />

          {contact && (
            <Contact contact={contact} closeContactForm={closeContactForm} />
          )}
        </div>
      )}
    </>
  );
};

export default Explore;
