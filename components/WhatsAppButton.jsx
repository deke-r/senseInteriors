"use client";

import styles from "../styles/Whatsapp.module.css";


const WhatsAppButton = () => {
  const phoneNumber = "919821995637"; 
  const message = encodeURIComponent("Hi! I'm interested in your services via Scrapify.");
  const link = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={link}
      className={styles.whatsappButton}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
     <img src="/img/WhatsApp.svg.webp" width={30} alt="whatsApp button" />
    </a>
  );
};

export default WhatsAppButton;
