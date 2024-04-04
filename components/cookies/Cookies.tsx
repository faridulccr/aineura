// components/CookiesAcceptModal.js
import { useEffect, useState } from "react";

interface CookiesAcceptModalProps {
    onAccept: () => void; // Explicitly typing onAccept prop
}

const Cookies: React.FC<CookiesAcceptModalProps> = ({ onAccept }) => {
    const [accepted, setAccepted] = useState(false);

    const acceptCookies = () => {
        // Set a cookie to remember user's preference
        document.cookie = 'cookiesAccepted=true; max-age=2592000'; // 30 days
        setAccepted(true);
        onAccept(); // Notify parent component
      };
    
      useEffect(() => {
        // Check if cookies are already accepted when component mounts
        if (document.cookie.includes('cookiesAccepted=true')) {
          setAccepted(true);
        }
      }, []);
    
      if (accepted) {
        return null; // Don't render the modal if cookies are already accepted
      }

    return (
        <div className="cookies-modal">
            <div className="cookies-modal-content">
                <p>This website uses cookies to enhance user experience.</p>
                <div className="cookies-modal-actions">
                    <button onClick={acceptCookies}>Accept</button>
                </div>
            </div>
        </div>
    );
};

export default Cookies;
