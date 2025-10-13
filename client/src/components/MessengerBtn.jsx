import React, { useState } from "react";
import {
  FaWhatsapp,
  FaFacebookMessenger,
  FaTelegram,
  FaWeixin,
} from "react-icons/fa";

const MessengerBtn = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="relative">
      {/* Main Button */}
      <button
        onClick={toggleOptions}
        className="btnzoom text-white p-2 rounded-full shadow-md hover:scale-125 transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)", // WhatsApp green gradient
        }}
      >
        <FaWhatsapp className="text-3xl" />
      </button>

      {/* Options */}
      {showOptions && (
        <div className="absolute -top-44 right-0 flex flex-col space-y-2">
          {/* WhatsApp */}
          <a
            href="https://wa.me/8801511169923"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white w-12 h-12 flex justify-center items-center rounded-full shadow-md hover:scale-110 transition duration-300"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
          {/* WeChat */}
          <a
            href="https://www.facebook.com/people/Staminaplus/61569582182168/?rdid=6TTDKoplN3t7r3oV&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Bc9oxzDh3%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-400 text-white w-12 h-12 flex justify-center items-center rounded-full shadow-md hover:scale-110 transition duration-300"
          >
            <FaFacebookMessenger className="text-2xl" />
          </a>

          {/* Telegram */}
          {/* <a
            href="https://t.me/+88018187729352"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-400 text-white w-12 h-12 flex justify-center items-center rounded-full shadow-md hover:scale-110 transition duration-300"
          >
            <FaTelegram className="text-2xl" />
          </a> */}
        </div>
      )}
    </div>
  );
};

export default MessengerBtn;
