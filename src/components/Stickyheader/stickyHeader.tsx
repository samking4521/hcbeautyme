import "./stickyHeader.css";
import { FaUser } from "react-icons/fa"; // FontAwesome icons

const StickyHeader = ({showContactForm}: {showContactForm: ()=> void;}) => {
  return (
    <header className="header">
      <div  className="header-logo">Explore</div>
      <div className="hcbeauty">HCBeauty</div>
      <nav className="header-nav">
        <div onClick={showContactForm} className="nav-link">
          <FaUser size={30} /> {/* Contact icon */}
        </div>
        
      </nav>

      
    
    </header>
  );
};

export default StickyHeader;
